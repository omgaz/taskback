define([], function() {
  var config = {};
  config.apiKey = 'yourGoogleAPIKey';
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = 'yourGoogleClientID.apps.googleusercontent.com';

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };
  
  return config;
});
