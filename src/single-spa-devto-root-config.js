import { registerApplication, start } from "single-spa";
import singleSpaAngularJS from 'single-spa-angularjs'
import angular from 'angular'

angular.module('app', [])

angular
    .module('app')
    .component('root', {
      template: `
        <a href="/ng">Retornar ao Angular 13</a>
        </br>
        <a href="/">Retornar ao SingleSPA apenas.</a>
        <p> Hello World AngularJS</p>
        `,
    })


window.myAngularApp = singleSpaAngularJS({
  angular: window.angular,
  mainAngularModule: 'app',
  uiRouter:true,
  preserveGlobal: false,
  template: '<root/>'
})


registerApplication({
  name: "@angular-js",
  app: window.myAngularApp,
  activeWhen: ["/js"],
});

registerApplication({
  name: "@angular-mfe",
  app: () => System.import("http://localhost:4200/main.js"),
  activeWhen: ["/ng"]
});

start({
  urlRerouteOnly: true,
});
