Pushwoosh = {};

Pushwoosh.initPushwoosh = function(appId) {
  return true;
}

Pushwoosh.createMessage = function(notification) {
  throw new Meteor.Error('302', 'Only supported on server');
}
