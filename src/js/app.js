import Team from './Team';
import Character from './Character';

const newTeam = new Team();

const player = new Character({ name: 'Gans', age: 32 });
const player1 = new Character({ name: 'John', age: 44 });
const player2 = new Character({ name: 'Stive', age: 25 });

newTeam.addAll(player, player1, player2, player2);
