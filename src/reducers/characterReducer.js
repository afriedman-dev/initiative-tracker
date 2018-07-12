import * as actions from '../actions/actionTypes';

export default function characterReducer(state = characters, action) {
    switch (action.type) {
        case actions.CREATE_CHARACTER:
            return [...state, Object.assign({}, action.char)];
        default:
            return state;
    }
}

const characters= [
    {
      name: "Thorin Strongbeard",
      order: 4,
      charImg: "https://i.pinimg.com/736x/7c/c7/aa/7cc7aa6b6fd0d30b2ab78eabcd44c94e--dwarf-apocalypse.jpg",
      armor: 16,
      health: 25,
      attack: "+7, 2d6+4"
    },
    {
      name: "Minotaur",
      order: 3,
      charImg: "https://s-media-cache-ak0.pinimg.com/originals/20/ee/fc/20eefc59de0bd9d75a2b4889c18504bc.png",
      armor: 14,
      health: 32,
      attack: "+8, 1d10+5"
    },
    {
      name: "Elrik Battleborne",
      order: 5,
      charImg: "https://i.pinimg.com/originals/6c/0a/f9/6c0af91e8c7b7c8607091a755dcc483c.png",
      armor: 18,
      health: 28,
      attack: "+6, 2d6+4 +1d4 fire"
    },
  ];