const data = require('../data/zoo_data');

const { species } = data;
const getAnimalsOlderThan = (animal, ag) => (
  species.find(({ name }) => name === animal).residents.every(({ age }) => age >= ag)
);

module.exports = getAnimalsOlderThan;
