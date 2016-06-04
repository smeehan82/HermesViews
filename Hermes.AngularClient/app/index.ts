import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import LOGGER_PROVIDERS from './Logging/Logger';

declare var require: any;

import 'es6-shim';
import 'reflect-metadata';
require('zone.js/dist/zone');

import AppComponent from './app.component';

bootstrap(AppComponent, [ROUTER_PROVIDERS, LOGGER_PROVIDERS]);