Pushwoosh = {};

Pushwoosh.initPushwoosh = function(appId) {
  var pushNotification = window.plugins.pushNotification;

  //set push notification callback before we initialize the plugin
  document.addEventListener('push-notification', function(event) {
    //get the notification payload
    var notification = event.notification;

    //clear the app badge
    pushNotification.setApplicationIconBadgeNumber(0);
  });

  //initialize the plugin
  pushNotification.onDeviceReady({pw_appid:appId });

  //register for pushes
  pushNotification.registerDevice(
    function(status) {
      var deviceToken = status['deviceToken'];
      console.warn('registerDevice: ' + deviceToken);
    },
    function(status) {
      console.warn('failed to register : ' + JSON.stringify(status));
      alert(JSON.stringify(['failed to register ', status]));
    }
  );

  //reset badges on app start
  pushNotification.setApplicationIconBadgeNumber(0);

}

Pushwoosh.createMessage = function(notification) {
  throw new Meteor.Error('302', 'Only supported on server');
}
