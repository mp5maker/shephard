(function(){
    // Defining the app 
    angular.module('myApp', ['ui.router', 'ngAnimate'])
    .config(function($stateProvider, $urlRouterProvider){
        var homeState = {
            name: 'home',
            url: '/home',
            templateUrl: 'home.html'
        }

        var informationState = {
            name: 'information',
            url: '/information',
            templateUrl: 'information.html'
        }

        var contactState = {
            name: 'contact',
            url: '/contact',
            templateUrl: 'contact.html'
        }

        $stateProvider.state(homeState);
        $stateProvider.state(informationState);
        $stateProvider.state(contactState);
        $urlRouterProvider.otherwise('home');
    })
    .factory('Shepherd', ['$window', function ShephardFactory($window){
        if(!$window.Shepherd){
            console.log('Shepherd cannot be loaded');
        }
        return $window.Shepherd;
    }])
    .controller('mainCtrl', function($scope, Shepherd){
        const tour = new Shepherd.Tour({
            defaults: {
                classes: 'shepherd-theme-arrows',
                scrollTo: true,
            }
        });
        
        tour.addStep('example',{
            title: "Example",
            text: "Creating first shepherd, testing it out",
            attachTo: ".start-shepherd right",
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                }
            ]
        });

        $scope.startGuide = function(){
            tour.start();
        };
    });
})();