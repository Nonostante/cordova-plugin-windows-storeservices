(function () {
    if (!window.Microsoft || !Microsoft.Services || !Microsoft.Services.Store || !Microsoft.Services.Store.Engagement) {
        return;
    }

    var ns = Microsoft.Services.Store.Engagement;
    var manager = ns.StoreServicesEngagementManager.getDefault();

    //track parameters
    var launchArgs = null;

    // Windows.UI.WebUI.WebUIApplication.addEventListener("activated", function (e) {
    //     if (e.kind == Windows.ApplicationModel.Activation.ActivationKind.toastNotification) {
    //         var realArgs = manager.parseArgumentsAndTrackAppLaunch(e.argument);
    //         launchArgs = {
    //             arguments: realArgs,
    //             previousExecutionState: e.previousExecutionState
    //         };
    //     } else {
    //         launchArgs = null;
    //     }
    // });

    cordova.commandProxy.add("WindowsStoreServices", {
        getLaunchArgs: function (s, f) {
            s && s(launchArgs);
        },
        registerNotificationChannel: function (s, f, args) {
            var customChannel = args && args[0];

            function handleResult(r) {
                if (r.errorCode) {
                    f && f(r);
                } else {
                    s && s(r.notificationChannelUri);
                }
            }


            if (typeof customChannel === "string") {
                var pars = new Microsoft.Services.Store.Engagement.StoreServicesNotificationChannelParameters();
                pars.customNotificationChannelUri = customChannel;
                manager.registerNotificationChannelAsync(pars).done(handleResult, f);
            } else {
                manager.registerNotificationChannelAsync().done(handleResult, f)
            }
        },
        parseArgumentAndTrack: function (s, f, args) {
            var arg = args[0];
            if (!arg) {
                f && f();
                return;
            }

            var realArgs = manager.parseArgumentsAndTrackAppLaunch(arg);
            s && s(realArgs);
        }
    });
})();