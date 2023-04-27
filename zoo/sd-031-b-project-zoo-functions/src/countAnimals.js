const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  const key = Object.values(animal);
  const findAnimal = data.species.find((specie) => specie.name === key[0]);
  if (key.length > 1) {
    return findAnimal.residents.filter((resident) => resident.sex === key[1]).length;
  }
  return findAnimal.residents.length;
};

countAnimals({ species: 'bears', sex: 'male' });
module.exports = countAnimals;
