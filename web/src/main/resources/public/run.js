require.config({

    paths: {
        domReady: 'lib/requirejs-domready/domReady',
        angular: 'lib/angular/angular',
        jquery: 'lib/jquery/jquery',
        bootstrap: 'lib/bootstrap/bootstrap',
        ngResource: 'lib/angular-resource/angular-resource',
        ngRoute: 'lib/angular-route/angular-route',
        sockjs : 'lib/sockjs/sockjs'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        bootstrap: {
            deps: ['jquery']
        },
        cgBusy: {
            deps: ['promiseTracker']
        },
        'promiseTracker': {
            deps: ['angular']
        },
        'ngResource': {
            deps: ['angular']
        }
    }
});

define([
    'require',
    'angular',
    'app'
], function (require, angular) {
    'use strict';
    require(['sockjs'],function(sockjs){
       console.log('loaded sockjs!');
    });
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['doge']);
        console.log('just called angular.bootstrap!')
    });
   /* require(['jquery', 'bootstrap'], function () {
        console.log('Loaded Bootstrap.');
        return {};
    });*/
});