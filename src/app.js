"use strict";
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var seed_app_1 = require('./app/seed-app');
browser_1.bootstrap(seed_app_1.SeedApp, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.js.map