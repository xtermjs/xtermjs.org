/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 */

const gulp = require('gulp');
const typedoc = require('gulp-typedoc');
const fs = require('fs-extra');
const path = require('path');

/**
 * Generate TypeScript project markdown
 */
gulp.task('typedoc', function() {
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
    gitRevision: 'master',

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
 * Links to markdown documents must not have an ".md" extension, etc.
 * @TODO: Some interfaces are too verbose and should be simplified
 *
 * The files are renamed/moved to ./_docs/api/terminal and links are updated
 * as necessary to work after being processed by Jekyll
 */
gulp.task('docs', ['typedoc'], async function() {
  // YAML Front Matters for Jekyll
  const header = (title, category = 'API', layout = 'docs') =>
    `---\ntitle: ${title}\ncategory: ${category}\nlayout: ${layout}\n---\n\n`;

  // Retains hash identifiers if they exist
  const rename = (basename) => {
    const match = basename.match(/^.*?([^\._]+)_?\.md(#.*|$)/);
    if (match === null) {
      throw new Error(`Unknown file naming scheme: ${basename}`)
    }
    return match[1] + match[2];
  };

  const srcdir = path.join(__dirname, '_typedoc');
  const outdir = path.join(__dirname, '_docs/api/terminal');

  // Cleanup
  if (await fs.pathExists(outdir)) {
    await fs.remove(outdir);
  }

  const excludes = /\/(README.md|modules\/_xterm_d_.md)$/i;
  const directories = ['.'];

  for (const /* relative */ subdir of directories) {
    const directory = path.join(srcdir, subdir);
    for (const basename of await fs.readdir(directory)) {
      const file = path.join(directory, basename);
      if (excludes.test(file)) {
        continue;
      }

      const stats = await fs.lstat(file);
      if (stats.isDirectory()) {
        directories.push(path.join(subdir, basename));
        continue;
      }

      let data = await fs.readFile(file, 'utf-8');
      let title = '';
      let match;

      // Match markdown links i.e. [name](../some/relative/file)
      const re = /\[([^\[\]]*)\]\(([^()]*)\)/g;
      while ((match = re.exec(data)) !== null) {
        let [link, link_title, uri] = match;

        if (/^https?/.test(uri)) {
          continue;
        }

        if (uri.indexOf(basename) !== -1) {
          // Extract the page title from the self-referring navigation link
          if (uri.endsWith(basename) /* without hash identifier */) {
            title = link_title;
          }
          uri = uri.indexOf('#') !== -1 ? uri.replace(basename, '') : '#';
        }
        else {
          const link_name = rename(path.basename(uri));
          const link_path = path.dirname(uri);
          uri = '../' + (link_path === '.' ?
            link_name : link_path + '/' + link_name);
        }

        const replacement = `[${link_title}](${uri})`;
        data = data.substr(0, match.index) + replacement
          + data.substr(re.lastIndex);
        re.lastIndex = match.index + replacement.length;
      }

      if (title === '') {
        throw new Error(`Failed to extract document title from: ${file}`);
      }

      // Remove the navigation links from the top of the document
      data = data.substring(data.indexOf('\n') + 1);
      // Prepend the YAML Front Matters
      data = header(title, subdir === '.' ? 'API' : `API-${subdir}`) + data;

      const dest = path.join(outdir, subdir);
      await fs.ensureDir(dest);
      const outfile = path.join(dest, rename(basename) + '.md');
      await fs.writeFile(outfile, data, 'utf-8');
    }
  }
});

gulp.task('default', ['docs']);
