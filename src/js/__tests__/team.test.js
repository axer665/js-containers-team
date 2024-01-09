import Team from "../Team";

const magician = {
    health: 100,
    type: 'Magician',
    level: 1,
    attack: 10,
    defence: 40
};

const bowman = {
    health: 100,
    type: 'Bowman',
    level: 1,
    attack: 25,
    defence: 25
};

const daemon = {
    health: 100,
    type: 'Daemon',
    level: 1,
    attack: 10,
    defence: 40
};

const zombie = {
    health: 100,
    type: 'Zombie',
    level: 1,
    attack: 40,
    defence: 10
};

const undead = {
    health: 100,
    type: 'Undead',
    level: 1,
    attack: 25,
    defence: 25
};

const listOfHeroes = new Team();
listOfHeroes.add(magician);

test('to check that hero is added', () => {
    const result = new Set([magician]);
    expect(listOfHeroes.members).toEqual(result);
});

test('to check that method Team.add(member) is trowing error', () => {
    expect(() => {listOfHeroes.add(magician)}).toThrow('Error: double hero');
});

test('to check the method Team.addAll(...members) adds list of heros', () => {
    const result = new Set([magician, zombie, daemon, bowman, undead]);
    listOfHeroes.addAll(zombie, daemon, bowman, undead);
    expect(listOfHeroes.members).toEqual(result);
});

test('to check the method Team.toArray() triggers array of heroes', () => {
    listOfHeroes.addAll(zombie, daemon, bowman, undead);
    expect(listOfHeroes.toArray()).toEqual([magician, zombie, daemon, bowman, undead]);
});