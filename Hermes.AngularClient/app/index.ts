import { bootstrap }    from '@angular/platform-browser-dynamic';

declare var require: any;

import 'es6-shim';
import 'reflect-metadata';
require('zone.js/dist/zone');

import AppComponent from './app.component';

bootstrap(AppComponent);