const skills: string[] =['Bash','Counter','Healing'];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: 'Strinder',
  hp: 100,
  skills: ['Bash', 'counter'],
}

strider.hometown='Rivendell';

console.table(strider);

export {};