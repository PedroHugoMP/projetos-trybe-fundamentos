const { species, hours } = require('../data/zoo_data');

const scheduleAnimal = (animal) => {
  let schedule = [];
  species.forEach(({ name }, i) => {
    if (animal === name) schedule = species[i].availability;
  });
  return schedule;
};
const AnimalDay = (day) => {
  const array = [];
  species.forEach(({ availability }, i) => {
    if (availability.includes(day)) {
      array.push(species[i].name);
    }
  });
  return array;
};
const sDay = (day) => {
  const schedule = {};
  schedule[day] = {
    officeHour: `Open from ${hours[day].open}am until ${hours.day.close}pm`,
    exhibition: AnimalDay(day),
  };
  return schedule;
};

const monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

const checkDay = (day) => (day !== 'Monday' ? sDay(day) : { Monday: monday });

const genSche = (days) => {
  const obj = {};
  days.forEach((day) => {
    obj[day] = day === 'Monday' ? monday : {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: AnimalDay(day),
    };
  });
  return obj;
};

const parametro = () => {
  const days = Object.keys(hours);
  return genSche(days);
};

const speciesN = species.map(({ name }) => name);

const checkParametro = (scheduleT) => (speciesN.includes(scheduleT)
  ? scheduleAnimal(scheduleT) : parametro());

const getSchedule = (scheduleT) =>
  (Object.key(hours)
    .includes(scheduleT) ? checkDay(scheduleT) : checkParametro(scheduleT));

module.exports = getSchedule;
