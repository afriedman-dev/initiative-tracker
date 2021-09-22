exports.seed = function(knex) {
  return knex('character').del()
    .then(function () {
      return knex('character').insert([
        { 
          name: 'Thorin Strongbeard',
          intiative: 4,
          armor_class: 16,
          health: 25,
          attack: '+7, 2d6+4',
          img_url: 'https://i.pinimg.com/736x/7c/c7/aa/7cc7aa6b6fd0d30b2ab78eabcd44c94e--dwarf-apocalypse.jpg',
          status_array: JSON.stringify([]),
        },
        { 
          name: 'Minotaur',
          intiative: 3,
          armor_class: 14,
          health: 32,
          attack: '+8, 1d10+5',
          img_url: 'https://s-media-cache-ak0.pinimg.com/originals/20/ee/fc/20eefc59de0bd9d75a2b4889c18504bc.png',
          status_array: JSON.stringify(['Blocking']),
        },
        { 
          name: 'Elrik Battleborne',
          intiative: 5,
          armor_class: 18,
          health: 28,
          attack: '+6, 2d6+4 +1d4 fire',
          img_url: 'https://i.pinimg.com/originals/6c/0a/f9/6c0af91e8c7b7c8607091a755dcc483c.png',
          status_array: JSON.stringify([]),
        },
      ]);
    });
};
