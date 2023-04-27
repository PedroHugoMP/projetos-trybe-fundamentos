const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => (!ids ? [] : ids.map((id) =>
  species.find((s) => id === s.id)));

module.exports = getSpeciesByIds;
