const util = require('util');
const fs = require('fs');
const path = require('path');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function all() {
  const heroes = await fetchHeroes();
  return heroes;
}

async function create({ name }) {
  const heroes = await fetchHeroes();

  const id = heroes.length;
  const hero = { id, name };

  heroes.push(hero);
  await saveHeroes(heroes);

  return hero;
}

async function search(name) {
  const heroes = await fetchHeroes();

  return heroes.filter(hero => hero.name === name);
}

async function update(heroId, { name = null }) {
  const heroes = await fetchHeroes();

  const hero = await find(heroId, heroes);
  if (name) hero.name = name;

  await saveHeroes(heroes);

  return hero;
}

async function remove(id) {
  const heroes = await fetchHeroes();

  const hero = await find(id, heroes);
  const idx = heroes.indexOf(hero);

  heroes.splice(idx, 1);

  await saveHeroes(heroes);
}

async function find(id, heroes) {
  return heroes.find(hero => hero.id === id);
}

async function fetchHeroes() {
  const storePath = path.join(__dirname, 'store.json');
  const str = await readFile(storePath);

  return JSON.parse(str);
}

async function saveHeroes(heroes) {
  const data = JSON.stringify(heroes);

  const storePath = path.join(__dirname, 'store.json');
  return await writeFile(storePath, data);
}

module.exports = {
  all,
  create,
  search,
  update,
  remove,
  find
};
