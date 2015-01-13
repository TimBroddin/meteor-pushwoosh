Pushwoosh = {}

Pushwoosh.initPushwoosh = function(appId) {
  return true;
}

Pushwoosh.createMessage = function(notifications) {

  if(notifications instanceof Array) {
  } else {
    notifications = [notifications];
  }

  var request = Npm.require('request');

  var data = {
    request: {
      application: Meteor.settings.pushwoosh.appId,
      auth: Meteor.settings.pushwoosh.token,
      notifications: notifications
    }
  };

  request({
    uri: 'https://cp.pushwoosh.com/json/1.3/createMessage',
    body: data,
    json: true,
    method: 'post'
  }, function(err, res) {
    //console.log(res);
  });
};
