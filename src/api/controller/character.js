const characterService = require('../service/character');

class CharacterController {
  async createCharacter(req, res) {
    try {
      const id = await characterService.createCharacter(req.body);
      res.status(201).json(id);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Error creating character: ');
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).json('Something went wrong.');
    }
  };
};

module.exports = new CharacterController;
