import Team from "./Team";

const magician = {
    health: 100,
    type: 'Magician',
    level: 1,
    attack: 10,
    defence: 40
};

const listOfHeroes = new Team();
listOfHeroes.add(magician);
console.log(listOfHeroes);