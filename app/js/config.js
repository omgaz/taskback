define([], function() {
  var config = {};
  config.apiKey = 'AIzaSyB4DePaYtU3mVqzK3IoiCeKxF94pV0qaq8';
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = '794098456712.apps.googleusercontent.com';

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };
  
  return config;
});
