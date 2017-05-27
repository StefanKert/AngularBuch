var version = '4.0.0';

System.config({
  transpiler: 'ts',
  typescriptOptions: {
    'experimentalDecorators': true
  },
  packages: {
    app: { defaultExtension: 'ts' },
    rxjs: { }
  },
  meta: {
    'typescript': { 'exports': 'ts' }
  },
  paths: { 'npm:': 'https://unpkg.com/' },
  map: {
    '@angular/common': 'npm:@angular/common@' + version + '/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler@' + version + '/bundles/compiler.umd.js',
    '@angular/core': 'npm:@angular/core@' + version + '/bundles/core.umd.js',
    '@angular/forms': 'npm:@angular/forms@' + version + '/bundles/forms.umd.js',
    '@angular/http': 'npm:@angular/http@' + version + '/bundles/http.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser@' + version + '/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@' + version + '/bundles/platform-browser-dynamic.umd.js',
    '@angular/router': 'npm:@angular/router@' + version + '/bundles/router.umd.js',
    'rxjs': 'npm:rxjs',
    'ts': 'npm:plugin-typescript/lib/plugin.js',
    'typescript': 'npm:typescript/lib/typescript.js'
  }
});