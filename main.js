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
    .factory('Shepherd', function($window){
        if(!$window.Shepherd){
            console.log('Shepherd cannot be loaded');
        }
        return $window.Shepherd;
    })
    .controller('mainCtrl', function($scope, Shepherd){
        const tour = new Shepherd.Tour({
            defaults: {
                classes: 'shepherd-theme-arrows',
                scrollTo: true,
            }
        });

         var tourButtonOptions = [
            {
                text: 'Back',
                classes: 'shepherd-button-secondary',
                action: tour.back,
            },
            {
                text: 'Next',
                classes: 'shepherd-button-primary',
                action: tour.next,
            },
            {
                text: 'Exit',
                classes: 'shepherd-button-primary',
                action: function () {
                    return tour.cancel();
                }
            }
        ]

        tour.addStep('tour',{
            title: "Heading",
            text: "Your website name",
            attachTo: ".heading-shepherd right",
            buttons: tourButtonOptions,
        });

        tour.addStep('tour',{
            title: "Brand Name",
            text: "Your brand logo",
            attachTo: ".brand-shepherd right",
            buttons: tourButtonOptions,
        });

        tour.addStep('tour',{
            title: "Home",
            text: "Your companies portfolio and establishment",
            attachTo: ".home-shepherd bottom",
            buttons: tourButtonOptions,
        });

        tour.addStep('tour',{
            title: "Information",
            text: "Yours companies operation and explaining how it operates",
            attachTo: ".information-shepherd bottom",
            buttons: tourButtonOptions,
        });

        tour.addStep('tour',{
            title: "Contact",
            text: "You explain how clients or customers can contact you to get your service",
            attachTo: ".contact-shepherd bottom",
            buttons: tourButtonOptions,
        });

        $scope.startGuide = function(){
            tour.start();
        };
    });
})();