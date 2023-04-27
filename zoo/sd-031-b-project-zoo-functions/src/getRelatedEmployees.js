const data = require('../data/zoo_data');

const isManager = (id) => {
  const findManager = data.employees.some(
    (person) => (person.managers.some(
      (value) => value === id,
    )),
  );
  return findManager;
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const arrayp = [];
  data.employees.forEach((value) => {
    value.managers.forEach((id) => {
      if (id === managerId) {
        arrayp.push(`${value.firstName} ${value.lastName}`);
      }
    });
  });
  return arrayp;
};

module.exports = { isManager, getRelatedEmployees };
