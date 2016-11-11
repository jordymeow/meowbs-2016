System.register(["angular-platform-browser-dynamic", "./app.module"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_platform_browser_dynamic_1, app_module_1, platform;
    return {
        setters: [
            function (angular_platform_browser_dynamic_1_1) {
                angular_platform_browser_dynamic_1 = angular_platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }
        ],
        execute: function () {
            System.import('./css/style.scss');
            platform = angular_platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(app_module_1.AppModule);
        }
    };
});
