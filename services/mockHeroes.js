const MOCK_HEROES = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

async function all() {
  return MOCK_HEROES;
}

async function create({ name }) {
  const id = MOCK_HEROES.length;
  const hero = { id, name };

  MOCK_HEROES.push(hero);
  return hero;
}

async function search(name) {
  return MOCK_HEROES.filter(hero => hero.name === name);
}

async function update(heroId, { name = null }) {
  const hero = await find(heroId);
  if (name) hero.name = name;

  return hero;
}

async function remove(id) {
  const hero = await find(id);
  const idx = MOCK_HEROES.indexOf(hero);

  MOCK_HEROES.splice(idx, 1);
}

async function find(id) {
  return MOCK_HEROES.find(hero => hero.id === id);
}

module.exports = {
  all,
  create,
  search,
  update,
  remove,
  find
};
