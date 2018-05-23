/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 */

const gulp = require('gulp');
const typedoc = require('gulp-typedoc');
const fs = require('fs-extra');
const path = require('path');

gulp.task('docs:clean', async function() {
  const directory = path.join(__dirname, '_docs/api/terminal');
  if (await fs.pathExists(directory)) {
    await fs.remove(directory);
  }
})

/**
 * Generate TypeScript project markdown
 */
gulp.task('docs:build', ['docs:clean'], function() {
  return gulp.src('./xterm.js/typings/xterm.d.ts')
  .pipe(typedoc({
    // TypeScript options (see typescript docs)
    module: 'commonjs',
    target: 'es5',

    // Output options (see typedoc docs)
    out: './_docs/api/terminal/',
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
 * _docs/api/terminal/README.md only contains a link to
 * _docs/api/terminal/modules/_xterm_d_.md
 *
 * _docs/api/terminal/modules/_xterm_d_.md only contains a link to
 * _docs/api/terminal/modules/_xterm_d_._xterm_.md
 *
 * The nearly empty files are removed and
 * _docs/api/terminal/modules/_xterm_d_._xterm_.md is moved to
 * _docs/api/terminal/index.md
 *
 * Links are modified to reflect these changes.
 * @TODO: Some interfaces are too verbose and should be simplified
 */
gulp.task('docs:patch', ['docs:build'], async function() {
  const docs = (...args) =>
    path.join(__dirname, '_docs/api/terminal', ...args);

  // Remove unnecessary files
  await fs.remove(docs('README.md'));
  await fs.remove(docs('modules/_xterm_d_.md'));

  // Regex to match filenames that should be replaced with index.md
  const filenames = /(readme\.|(modules\/)?(_xterm_(d_)?\.)+)md(?=#|$)/i;

  // All of the files that need to be updated are in subdirs
  for (const dirname of await fs.readdir(docs())) {
    const directory = docs(dirname);
    for (const basename of await fs.readdir(directory)) {
      const document = path.join(directory, basename);
      // Match markdown links i.e. [name](../some/relative/file)
      const re = /\[([^\[\]]*)\]\(([^()]*)\)/g;

      let data = await fs.readFile(document, 'utf-8');
      let modified = false;
      let match;

      if (basename === '_xterm_d_._xterm_.md') {
        // Remove the navigation links from the index document
        data = data.substring(data.indexOf('\n') + 1);
        modified = true;
      }

      while ((match = re.exec(data)) !== null) {
        let [link, title, uri] = match;
        let replacement = '';

        if (/_xterm_(d_)?\.md(#|$)/.test(uri) &&
            data.substring(re.lastIndex, re.lastIndex + 3) === ' > ') {
          // Remove the navigation link and the angle bracket that follows
          re.lastIndex += 3;
        }
        else if (filenames.test(uri)) {
          uri = uri.replace(filenames, 'index.md');
          replacement = `[${title}](${uri})`;
        }
        else {
          continue;
        }

        data = data.substr(0, match.index) + replacement
          + data.substr(re.lastIndex);
        re.lastIndex = match.index + replacement.length;
        modified = true;
      }

      if (modified) {
        await fs.writeFile(document, data, 'utf-8');
      }
    }
  }

  // Move the main markdown document to ./_docs/api/terminal/index.md
  await fs.move(docs('modules/_xterm_d_._xterm_.md'),
                docs('index.md'));
});

gulp.task('docs', ['docs:patch']);
gulp.task('default', ['docs']);
