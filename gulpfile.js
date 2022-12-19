/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 */

const gulp = require('gulp');
const typedoc = require('gulp-typedoc');
const fs = require('fs-extra');
const path = require('path');
const cp = require('child_process');

/**
 * Generate TypeScript project markdown
 */
gulp.task('typedoc', function() {
  const version = require('./_xterm.js/package.json').version;

  // Checkout tag to make sure correct API docs are produced
  cp.spawnSync('git', ['checkout', version], { cwd: path.join(__dirname, '_xterm.js') });

  // Update API doc version number
  const majorMinorVersion = version.substr(0, version.lastIndexOf('.'));
  const configYaml = fs.readFileSync('./_config.yml').toString();
  const newConfigYaml = configYaml.replace(/version:.*/, 'version: \'' + majorMinorVersion + '\'')
  fs.writeFileSync('./_config.yml', newConfigYaml);

  return gulp.src('./_xterm.js/typings/xterm.d.ts')
  .pipe(typedoc({
    // TypeScript options (see typescript docs)
    module: 'commonjs',
    target: 'es5',

    // Output options (see typedoc docs)
    out: './_typedoc',
    // Required to process .d.ts files
    includeDeclarations: true,
    // Exclude @types/node, etc.
    excludeExternals: true,
    // Excludes private class members
    excludePrivate: true,
    // The branch or revision that will be used to create src links
    gitRevision: version,

    // TypeDoc options (see typedoc docs)
    readme: 'none',
    theme: 'markdown',
    ignoreCompilerErrors: false
  }));
});

/**
 * This task works around the following issues:
 *
 * Some files are nearly empty i.e. README.md and modules/_xterm_d_.md
 * Files are not well named and Jekyll ignores files prefixed with underscores
 * @TODO: Some interfaces are too verbose and should be simplified
 *
 * The files are renamed/moved to <project>/_docs/api/terminal/
 */
gulp.task('docs', gulp.series('typedoc', async function() {
  // Removes prefixes and outer underscores from the basename of paths
  // (1): ../classes/_xterm_d_._xterm_.foo.md#bar => ../classes/foo.md#bar
  // (2): modules/_xterm_d_._xterm_.md => modules/xterm.md
  const rename = (uri) =>
    uri.replace(/(?:_?([^\/\.]+[^_])_?\.)+(md(?=#.*|$))/, '$1.$2');

  // The relative destination directory for processed files
  const destination = './_docs/api/terminal/';

  const srcDir = path.join(__dirname, '_typedoc');
  const outDir = path.resolve(__dirname, destination);

  // Remove old build artifacts: rm -rf ${outDir}
  if (await fs.pathExists(outDir)) {
    await fs.remove(outDir);
  }

  // The directories are used to specify a docs category: API-classes, etc.
  const directories = ['modules', 'classes', 'interfaces'];

  for (const dirType of directories) {
    const files = await fs.readdir(path.join(srcDir, dirType));
    for (const basename of files) {
      if (basename === '_xterm_d_.md') continue;

      const srcFile = path.join(srcDir, dirType, basename);
      const outFile = path.join(outDir, dirType, rename(basename));

      // YAML Front Matters for Jekyll
      let header = `---\ncategory: API-${dirType}\nlayout: docs\n---\n\n`;
      let data = await fs.readFile(srcFile, 'utf-8');
      let match;

      // Match markdown links i.e. [name](../some/relative/file)
      const re = /\[([^\[\]]*)\]\(([^()]*)\)/g;
      while ((match = re.exec(data)) !== null) {
        let [link, title, uri] = match;

        // Replace xtermjs.org repo links with xterm.js
        if (/^https?/.test(uri)) {
          uri = uri.replace(/[^\/]*\/xtermjs.org/, 'xtermjs/xterm.js');
          link = `[${title}](${uri})`;
          data = `${data.substring(0, match.index)}${link}${data.substring(re.lastIndex)}`;
          continue;
        }

        // Use the title from a self-referencing navigation link
        if (uri.endsWith(basename)) {
          header = header.replace(/^(---)(?=\ncat)/, `$1\ntitle: ${title}`);
        }

        // Resolve the URI relative to the current file
        uri = path.resolve(outFile, '../', rename(uri));
        // Convert to a relative destination i.e. _docs/a/t/c/terminal.md
        uri = path.normalize(path.join(destination,
                             path.relative(outDir, uri)));
        // Split the URI into two parts: path and hash identifier
        uri = uri.match(/([^#]*)(#.*|$)/);

        link = `[${title}]({% link ${uri[1]} %}${uri[2]})`;

        data = data.substring(0, match.index) + link + data.substring(re.lastIndex);
        re.lastIndex = match.index + link.length;
      }

      // Remove the navigation links and prepend YAML Front Matters
      data = header + data.substring(data.indexOf('\n') + 1);

      await fs.ensureDir(path.dirname(outFile));
      await fs.writeFile(outFile, data, 'utf-8');
    }
  }
}));

gulp.task('default', gulp.series('docs'));
