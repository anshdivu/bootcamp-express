const router = require('express').Router();
const heroService = require('./services/mockHeroes');

// get list => `${this.heroesUrl}`
// get      => `${this.heroesUrl}/${id}`
// update   => `${this.heroesUrl}/${id}`
// delete   => `${this.heroesUrl}/${id}`
// create   => `${this.heroesUrl}`
// search   => `${this.heroesUrl}?name=${term}`

router.get('/', async (req, res) => {
  const heroes = await heroService.all();
  res.send(heroes);
});

router.post('/', async (req, res) => {
  try {
    const hero = await heroService.create(req.body);

    return res.send(hero);
  } catch (_) {
    res.status(404).end();
  }
});

router.get('/', async (req, res) => {
  const { name } = req.params;

  try {
    const heroes = await heroService.search(name);

    return res.send(heroes);
  } catch (_) {
    res.status(404).end();
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const hero = await heroService.find(+id);

  if (hero) {
    return res.send(hero);
  }

  res.status(404).end();
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const hero = await heroService.update(+id, req.body);

    return res.send(hero);
  } catch (_) {
    res.status(404).end();
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await heroService.remove(+id);

    return res.status(200).end();
  } catch (_) {
    res.status(404).end();
  }
});

module.exports = router;
