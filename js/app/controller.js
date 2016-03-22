var toursApp = angular.module('toursApp', []);

toursApp.controller('TourDateCtrl', function ($scope) {
  $scope.tourDates = [
    {
      tickets: "http://www.songkick.com/concerts/25554799-diane-coffee-at-zanzabar",
      venue: "Zanzabar",
      city: "Louisville , KY",
      date: "Feb. 6"
    },
    {
      tickets: "http://www.songkick.com/concerts/25834744-idiot-glee-at-als-bar",
      venue: "Al's Bar",
      city: "Lexington, KY",
      date: "Mar. 13"
    },
    {
      tickets: "http://www.songkick.com/concerts/26024648-idiot-glee-at-comet",
      venue: "The Comet",
      city: "Cincinnati, OH",
      date: "Mar. 14"
    },
    {
      tickets: "http://www.songkick.com/concerts/25986263-murals-at-aurora",
      venue: "Aurora",
      city: "Providence, RI",
      date: "Mar. 17"
    },
    {
      tickets: "http://www.songkick.com/concerts/25834734-idiot-glee-at-silent-barn",
      venue: "Silent Barn",
      city: "Brooklyn, NY",
      date: "Mar. 18"
    },
    {
      tickets: "http://www.songkick.com/concerts/26024653-idiot-glee-at-ortliebs",
      venue: "Ortliebs",
      city: "Philadelphia, PA",
      date: "Mar. 19"
    },
    {
      tickets: "http://www.songkick.com/concerts/26024658-idiot-glee-at-galaxy-hut",
      venue: "Galaxy Hut",
      city: "Arlington, VA",
      date: "Mar. 21"
    },
   ];
 });
