const { species, employees } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const colaborador = employees.find((employe) => employe.id === id);
  const animal = species.find((specie) => specie.id === colaborador.responsibleFor[0]);
  const ordenarAnimal = animal.residents;
  return Object.values(ordenarAnimal.sort((a, b) => b.age - a.age)[0]);
};

module.exports = getOldestFromFirstSpecies;
