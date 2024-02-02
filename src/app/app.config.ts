import {ApplicationConfig, importProvidersFrom, inject} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {BuilderModule} from '@builder.io/angular';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(BuilderModule.forRoot("TODO"))],
};
