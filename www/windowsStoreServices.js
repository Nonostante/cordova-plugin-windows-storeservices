

StoreServices = {
	getLaunchArgs: function (success, failure) {
		cordova.exec(success, failure, "WindowsStoreServices", "getLaunchArgs", []);
	},
	registerNotificationChannel: function (customChannel, success, failure) {
		cordova.exec(success, failure, "WindowsStoreServices", "registerNotificationChannel", [customChannel]);
	},
	parseArgumentAndTrack: function (argument, success, failure) {
		cordova.exec(success, failure, "WindowsStoreServices", "parseArgumentAndTrack", [argument]);
	}
};

module.exports = StoreServices;
