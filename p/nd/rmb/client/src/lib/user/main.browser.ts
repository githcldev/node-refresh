import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { NgModuleRef } from '@angular/core';
import { AppModule } from './app/module';
import { ROOT_SELECTOR } from './app/comp';
export function main(): Promise<any> {
  let modulePromise: Promise<NgModuleRef<AppModule>> = null;
  if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => {
      const oldRootElem = document.querySelector(ROOT_SELECTOR);
      const newRootElem = document.createElement(ROOT_SELECTOR);
      oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem);
      if (modulePromise) {
        modulePromise.then((appModule) => {
          appModule.destroy();
          if (oldRootElem !== null) {
            oldRootElem!.parentNode!.removeChild(oldRootElem);
          }
          return appModule;
        });
      }
    });
  }
  modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);
  return modulePromise.then(environment.decorateModuleRef).catch((err) => console.error(err));
}
switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}
function _domReadyHandler() {
  document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
  main();
}