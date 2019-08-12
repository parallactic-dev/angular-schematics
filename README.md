# Parallactic Angular Schematics

Parallactic's best practices schematics for angular apps.

### Development
Use `npm run build:watch` to auto compile TypeScript while developing.
```bash
npm run build:watch
```

You can run your schemtic inside the repo like this:
```bash
schematics collection.json:store --debug=false
```

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
 