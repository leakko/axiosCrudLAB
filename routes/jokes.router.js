const express = require('express');
const router  = express.Router();
const jokesController = require("../controllers/jokes.controller")

/* GET home page */
router.get('/', jokesController.list);

router.get('/new', jokesController.createJoke)
router.post('/', jokesController.doCreateJoke);


router.get('/:id', jokesController.detail);

router.get('/:id/edit', jokesController.editJoke);
router.post('/:id/edit', jokesController.doEditJoke);

module.exports = router;
