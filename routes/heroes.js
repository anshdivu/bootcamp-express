const router = require('express').Router();

// get      => `${this.heroesUrl}/${id}`
// update   => `${this.heroesUrl}/${id}`
// delete   => `${this.heroesUrl}/${id}`
// get list => `${this.heroesUrl}`
// create   => `${this.heroesUrl}`
// search   => `${this.heroesUrl}/?name=${term}`
router.get('/', (req, res, next) => {
  res.send({ user: 'respond with a resource' });
});

module.exports = router;
