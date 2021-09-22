const characterDAO = require('../dao/character');

class CharacterService {
  createCharacter(characterDto) {
    const { 
      name,
      intiative,
      armor_class,
      health,
      attack,
      img_url, // TODO default if not exist
      status_array // TODO stringify
    } = characterDto;

    // TODO error handling
    return characterDAO.createCharacter(
      name,
      intiative,
      armor_class,
      health,
      attack,
      img_url,
      status_array
    );
  };
};

module.exports = new CharacterService;
