const db = require('../../db/db');

class CharacterDAO {
  async createCharacter(
    name,
    intiative,
    armor_class,
    health,
    attack,
    img_url,
    status_array
    ) {
    const [id] = await db('person').insert({
      name,
      intiative,
      armor_class,
      health,
      attack,
      img_url,
      status_array,
    })
    .returning('id');

    return id;
  };
};

module.exports = new CharacterDAO;
