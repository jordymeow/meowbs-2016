import { platformBrowserDynamic } from "angular-platform-browser-dynamic";
import { AppModule } from "./app.module";

System.import('./css/style.scss');

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
