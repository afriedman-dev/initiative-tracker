const { Router } = require('express');
const characterController = require('../controller/character');

const router = Router();

router.get('/api', (req, res) => {
  res.json({ message: "Hello from server!" });
});

router.post('/character', characterController.createCharacter);

module.exports = router;
