/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 */

const gulp = require('gulp');
const typedoc = require('typedoc');
const fs = require('fs-extra');
const path = require('path');

// The path to the cloned xtermjs/xterm.js git repository.
const xterm = path.join(__dirname, '_xterm.js');
// The path to typedoc's output.
const rawDocs = path.join(__dirname, '_typedoc');
// The path to the jekyll docs collection.
const docs = path.join(__dirname, '_docs');

/**
 * This task uses typedoc and typedoc-plugin-markdown to generate docs.
 */
gulp.task('typedoc', function () {
  const addons = fs.readdirSync(`${xterm}/src/addons`)
    .map(name => `${xterm}/src/addons/${name}/${name}.ts`);

  generateDocs([`${xterm}/typings/xterm.d.ts`], `${rawDocs}/terminal`);
  // This invocation was required to avoid plugin already loaded error(s).
  generateDocs(addons, `${rawDocs}/addons`, {
    // Excludes symbols that are not exported from the output
    excludeNotExported: true,
  });
});

/**
 * This task works around the following issues:
 *
 * Some files are nearly empty i.e. README.md and modules/_xterm_d_.md
 * Files are not well named and Jekyll ignores files prefixed with underscores
 * @TODO: Some interfaces are too verbose and should be simplified
 *
 * The files are renamed/moved to <project>/_docs/api/${category}
 */
gulp.task('docs', ['typedoc'], function() {
  return Promise.all(fs.readdirSync(rawDocs).map(target =>
    transformDocs(`${rawDocs}/${target}`, `${docs}/api/${target}`)));
});

gulp.task('default', ['docs']);

/**
 * See: http://typedoc.org/api/classes/application.html#generatedocs
 */
function generateDocs(src, out, options) {
  const app = new typedoc.Application({
    // Required to process .d.ts files
    includeDeclarations: true,
    // Exclude @types/node, etc.
    excludeExternals: true,
    // Excludes private class members
    excludePrivate: true,
    // The branch or revision that will be used to create src links.
    gitRevision: 'master',
    readme: 'none',
    theme: 'markdown',
    ignoreCompilerErrors: false,
    // Decrease verbosity
    logger: (message, level) => {
      if (level === 2) {
        console.error(message);
      }
    },
    // TypeScript options
    module: 'commonjs',
    target: 'es5',
    // Additional options that may override current options
    ...options
  });

  app.generateDocs(src, out);

  // It should throw but to be safe...
  if (app.logger.hasErrors()) {
    throw new Error('There were errors when generating TypeDoc output.');
  }
}

/**
 * @param srcDir An absolute path to a subdir of typedoc's output
 * @param outDir An absolute path to a subdir of the jekyll docs collection
 */
async function transformDocs(srcDir, outDir) {
  // Removes prefixes and outer underscores from the basename of paths
  // (1): ../classes/_xterm_d_._xterm_.foo.md#bar => ../classes/foo.md#bar
  // (2): modules/_xterm_d_._xterm_.md => modules/xterm.md
  const rename = (uri) =>
    uri.replace(/([^/]*?)(?:_*([a-z]+)_*\.)+(md(?=#.*|$))/i, '$2.$3');

  // Remove old build artifacts: rm -rf ${outDir}
  if (await fs.pathExists(outDir)) {
    await fs.remove(outDir);
  }

  // The base category is currently either terminal or addons
  const category = path.basename(outDir);
  // sub-directories are used as sub-categories i.e. terminal-${subdir}.
  const directories = ['modules', 'classes', 'interfaces'];

  for (const dirType of directories) {
    const directory = path.join(srcDir, dirType);
    // The "classes/" directory isn't present when processing addon docs
    if ((await fs.pathExists(directory)) === false) continue;

    const files = await fs.readdir(directory);
    for (const basename of files) {
      // Skip any useless docs that are created from .d.ts files
      if (basename.endsWith('_d_.md')) continue;

      const srcFile = path.join(srcDir, dirType, basename);
      const outFile = path.join(outDir, dirType, rename(basename));

      // YAML Front Matters for Jekyll
      let header = `---\ncategory: ${category}-${dirType}`
        + '\nlayout: docs\n---\n\n';

      let data = await fs.readFile(srcFile, 'utf-8');
      let match;

      // Match markdown links i.e. [name](../some/relative/file)
      const re = /\[([^\[\]]*)\]\(([^()]*)\)/g;
      while ((match = re.exec(data)) !== null) {
        let [link, title, uri] = match;

        if (/^https?/.test(uri)) {
          continue;
        }

        // Cosmetic - Maybe use the title of a self-referencing nav. link
        if (uri.endsWith(basename) && header.indexOf('title') === -1
            && header.indexOf('addons-modules') === -1) {
          // Specify the page title in YFM, defaults to filename
          header = header.replace(/^(---)/, `$1\ntitle: ${title}`);
        }

        // Resolve the URI relative to the current file
        uri = path.resolve(outFile, '../', rename(uri));
        // Make the path relative to <project> i.e. _docs/a/t/c/terminal.md
        uri = path.normalize(path.relative(__dirname, uri));
        // Split the URI into two parts: path and hash identifier ...
        uri = uri.match(/([^#]*)(#.*|$)/);
        // ... The jekyll link directive would otherwise throw on hash IDs.
        link = `[${title}]({% link ${uri[1]} %}${uri[2]})`;

        data = data.substr(0, match.index) + link
          + data.substr(re.lastIndex);
        re.lastIndex = match.index + link.length;
      }

      // Cosmetic - Remove the document's <H1> title and everything before it
      data = data.substr(data.match(/^[\s\S]*\n+#[^#].+\s+/)[0].length)

      await fs.ensureDir(path.dirname(outFile));
      await fs.writeFile(outFile, header + data, 'utf-8');
    }
  }
}
