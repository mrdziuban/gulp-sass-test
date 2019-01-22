# gulp-sass importer test

This is a simple gulp-sass setup to demonstrate an issue with custom importers not being called. To reproduce the issue,
run:

```bash
$ npm run gulp
```

The output shows:

```
[09:30:03] Using gulpfile ~/gulp-sass-test/gulpfile.js
[09:30:03] Starting 'default'...
[09:30:03] Finished 'default' after 7.83 ms
Importer received URL: missing
```

Given the contents of [src/index.scss], I would have expected the importer to receive both `exists` and `missing`.
