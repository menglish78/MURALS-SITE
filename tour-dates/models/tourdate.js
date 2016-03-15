import DS from 'ember-data';

export default DS.Model.extend({
  venue: DS.attr(),
  city: DS.attr(),
  date: DS.attr()
});
