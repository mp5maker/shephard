(function(){
    angular.module('myApp', [])
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
            attachTo: angular.element(".start-shepherd top"),
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

// const tour = new Shepherd.Tour({
//     defaults: {
//         classes: 'shepherd-theme-arrows',
//         scrollTo: true,
//     }
// });

// tour.addStep('example',{
//     title: "Example",
//     text: "Creating first shephard, testing it out",
//     attachTo: ".start-shepherd bottom",
//     buttons: [
//         {
//             text: 'Next',
//             action: tour.next,
//         }
//     ]
// });

// tour.start();