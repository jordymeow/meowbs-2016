System.register(["zone.js", "reflect-metadata", "rxjs", "angular-core", "angular-platform-browser", "angular-forms", "./app.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var angular_core_1, angular_platform_browser_1, angular_forms_1, app_component_1, AppModule;
    return {
        setters: [
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            },
            function (angular_core_1_1) {
                angular_core_1 = angular_core_1_1;
            },
            function (angular_platform_browser_1_1) {
                angular_platform_browser_1 = angular_platform_browser_1_1;
            },
            function (angular_forms_1_1) {
                angular_forms_1 = angular_forms_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                angular_core_1.NgModule({
                    imports: [angular_forms_1.FormsModule, angular_platform_browser_1.BrowserModule],
                    declarations: [app_component_1.AppComponent],
                    bootstrap: [app_component_1.AppComponent]
                }),
                __metadata("design:paramtypes", [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
