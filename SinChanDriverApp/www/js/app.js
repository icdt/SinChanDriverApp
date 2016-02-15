// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var app = angular.module('starter', ['ionic']);

app.run(['$ionicPlatform', '$rootScope', '$state', function ($ionicPlatform, $rootScope, $state) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

    // �Y�����Ҧ��\�|��stateChangeError, �P�_error�W�r�A���n�J�|��
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        if (error.name === 'AuthenticationRequired') {
            //$state.go('app.loginIndex', {}, { reload: true });
        }
    });
}]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('m', {
            url: "/m",
            abstract: true,
            templateUrl: "pages/main.html",
            controller: ''
        })
        //�n�J
        .state('m.login', {
            url: "",
            views: {
                content: {
                    templateUrl: "pages/mLogin/login.html",
                    controller: 'LoginCtrl'
                }
            }
        })
        //����
      .state('m.home', {
          url: "/home",
          views: {
              content: {
                  templateUrl: "pages/mHome/home.html",
                  controller: 'HomeCtrl'
              }
          }
      })
      //���鬣������
     .state('m.listtoday', {
         url: "/listToday",
         views: {
             content: {
                 templateUrl: "pages/mList/today/today.html",
                 controller: 'TodayCtrl'
             }
         }
     })
    .state('m.todaydetail', {
        url: "/TodayDetail",
        views: {
            content: {
                templateUrl: "pages/mList/today/todaydetail.html",
                controller: 'TodayDetailCtrl'
            }
        }
    })
    //�����������{
    .state('m.listhistory', {
         url: "/listHistory",
         views: {
             content: {
                 templateUrl: "pages/mList/history/history.html",
                 controller: 'HistoryCtrl'
             }
         }
     })
    .state('m.historydetail', {
        url: "/HistoryDetail",
        views: {
            content: {
                templateUrl: "pages/mList/history/historydetail.html",
                controller: 'HistoryDetailCtrl'
            }
        }
    })
    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/m');
});

