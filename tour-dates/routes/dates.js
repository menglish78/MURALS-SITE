import Ember from 'ember';

var tourdates = [
  {
    venue: "Zanzabar",
    city: "Louisville , KY",
    date: "Feb. 6"
  },
  {
    venue: "Al's Bar",
    city: "Lexington, KY",
    date: "Mar. 13"
  },{
    venue: "The Comet",
    city: "Cincinnati, OH",
    date: "Mar. 14"
  },
  {
    venue: "Aurora",
    city: "Providence, RI",
    date: "Mar. 17"
  },
  {
    venue: "Silent Barn",
    city: "Brooklyn, NY",
    date: "Mar. 18"
  },
  {
    venue: "Ortliebs",
    city: "Philadelphia, PA",
    date: "Mar. 19"
  },
  {
    venue: "Galaxy Hut",
    city: "Arlington, VA",
    date: "Mar. 21"
  },
];

export default Ember.Route.extend({
  model() {
    return tourdates;
  }
});
