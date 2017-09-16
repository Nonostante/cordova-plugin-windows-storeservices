declare module Cordova {
    export module Plugin {
        export module WindowsStoreServices {
            type ActivationInfo = {
                arguments: string
                previousExecutionState: number
            }
        }

        interface WindowsStoreServices {
            getLaunchArgs(success: (actinationInfo?: WindowsStoreServices.ActivationInfo) => void): void
            registerNotificationChannel(customChannel?: string, success?: (channel: string) => void, failure?: (err?: any) => void): void
            parseArgumentAndTrack(argument: string, success: (argument: string) => void, failure?: () => void): void
        }
    }
}

interface Window {
    readonly storeServices: Cordova.Plugin.WindowsStoreServices
}

declare const storeServices: Cordova.Plugin.WindowsStoreServices