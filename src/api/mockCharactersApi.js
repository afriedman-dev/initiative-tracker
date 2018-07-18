const characters = [
  {
    name: "Thorin Strongbeard",
    order: 4,
    charImg:
      "https://i.pinimg.com/736x/7c/c7/aa/7cc7aa6b6fd0d30b2ab78eabcd44c94e--dwarf-apocalypse.jpg",
    armor: 16,
    health: 25,
    attack: "+7, 2d6+4",
    id: 1
  },
  {
    name: "Minotaur",
    order: 3,
    charImg:
      "https://s-media-cache-ak0.pinimg.com/originals/20/ee/fc/20eefc59de0bd9d75a2b4889c18504bc.png",
    armor: 14,
    health: 32,
    attack: "+8, 1d10+5",
    id: 2
  },
  {
    name: "Elrik Battleborne",
    order: 5,
    charImg:
      "https://i.pinimg.com/originals/6c/0a/f9/6c0af91e8c7b7c8607091a755dcc483c.png",
    armor: 18,
    health: 28,
    attack: "+6, 2d6+4 +1d4 fire",
    id: 3
  }
];

const generateId = char => {
  return char.name.toLowerCase() + "-" + Math.random() * 10000000000000000;
};

class CharactersApi {
  static getAllCharacters() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], characters));
      }, 1000);
    });
  }

  static saveCharacter(char) {
    char = Object.assign({}, char); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCharNameLength = 2;
        if (char.name.length < minCharNameLength) {
          reject(`Name must be at least ${minCharNameLength} characters.`);
        }

        if (char.id) {
          const existingCharIndex = characters.findIndex(a => a.id === char.id);
          characters.splice(existingCharIndex, 1, char);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new chars in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          char.id = generateId(char);
          characters.push(char);
        }

        resolve(char);
      }, 1000);
    });
  }

  static deleteChar(charId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCharToDelete = characters.findIndex(char => {
          return char.id === charId;
        });
        characters.splice(indexOfCharToDelete, 1);
        resolve();
      }, 1000);
    });
  }
}

export default CharactersApi;
