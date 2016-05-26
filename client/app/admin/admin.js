(function () {
  'use strict';

  // register the route config on the application
  angular
    .module('appointerxApp.admin', [
      'ui.router',
      'appointerxApp.admin.main',
      'appointerxApp.admin.user',
      'appointerxApp.mainMenu'
    ])
    .config(configAdminRoute);

  // inject configAdminRoute dependencies
  configAdminRoute.$inject = ['$urlRouterProvider', '$stateProvider'];

  // route config function configuring the passed $stateProvider
  function configAdminRoute($urlRouterProvider, $stateProvider) {
    var adminState = {
      name: 'admin',
      url: '/admin',
      abstract: true,
      templateUrl: 'app/admin/admin.html',
      controller: 'AdminController',
      controllerAs: 'vm'
    };

    $urlRouterProvider.when('/admin', '/admin/');
    $stateProvider.state(adminState);
  }

})();
