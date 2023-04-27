const { employees, species } = require('../data/zoo_data');

const getSpecies = (employe, propri) => {
  const speciesF = employe.responsibleFor.map((specieId) =>
    species.find((specie) => specie.id === specieId));
  return speciesF.map((speciesA) => speciesA[propri]);
};
const getemploy = (employe) => ({
  id: employe.id,
  fullName: `${employe.firstName} ${employe.lastName}`,
  species: getSpecies(employe, 'name'),
  locations: getSpecies(employe, 'location'),
});
const getEmployeesCoverage = (obj) => {
  if (obj === undefined) {
    return employees.map((employe) => getemploy(employe));
  }

  const employD = employees.find((employe) =>
    obj.name === employe.firstName || obj.name === employe.lastName || obj.id === employe.id);

  if (employD === undefined) {
    throw new Error('Informações inválidas');
  }
  return getemploy(employD);
};
module.exports = getEmployeesCoverage;
