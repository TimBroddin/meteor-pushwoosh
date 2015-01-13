Package.describe({
  name: 'timbroddin:pushwoosh',
  summary: 'Send push notifications to Pushwoosh',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('cordova.js', 'web.cordova');
  api.addFiles('browser.js', 'web.browser');
  api.addFiles('server.js', 'server');
  api.use('http');
  api.export('Pushwoosh');
});

Package.onTest(function(api) {

});

Cordova.depends({
  'com.pushwoosh.plugins.pushwoosh': '3.4.6'
});

Npm.depends({
  "request": "2.51.0"
});
