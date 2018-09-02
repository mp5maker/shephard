(function(){
    // Defining the app 
    angular.module('myApp', ['ui.router', 'ngAnimate'])
    // All the Routees
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
    // Creating the Shepherd Factory which uses $window
    .factory('Shepherd', function($window){
        if(!$window.Shepherd){
            console.log('Shepherd cannot be loaded');
        }
        return $window.Shepherd;
    })
    // Our main controller
    .controller('mainCtrl', function($scope, Shepherd){
        const tour = new Shepherd.Tour({
            defaults: {
                classes: 'shepherd-theme-arrows',
                scrollTo: true,
            }
        });

        // [Dry] Writing down all the button options over here
         var tourButtonOptions = [
            {
                text: 'Back',
                // Custom Button Color [Secondary --> Taken from bootstrap 4]
                classes: 'shepherd-custom-button-secondary',
                action: tour.back,
            },
            {
                text: 'Next',
                // By Default shepherd has shepherd-button-primary and shepherd-button-secondary
                classes: 'shepherd-button-primary',
                action: tour.next,
            },
            {
                text: 'Exit',
                // Custom Button Color [Danger --> Taken from bootstrap 4]
                classes: 'shepherd-custom-button-danger',
                action: function () {
                    return tour.cancel();
                }
            }
        ]

        // Addding the steps
        tour.addStep('tour',{
            title: "Heading",
            text: "Your website name",
            // Which class should it point to and in which side [right]
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

        // Clicking on the guide button starts the tour
        $scope.startGuide = function(){
            tour.start();
        };

        // Cancel the tour by pressing escape
        angular.element(document.onkeydown = (event) => {
            event = event || window.event;
            if(event.keyCode == 27){
                tour.cancel();
            }
        });
    });
})();