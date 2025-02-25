interface AudioPlayer{
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "ED Sheeran",
    year: 2015
  }
}

const song = 'New Song';

const { song: anotherSong, songDuration: duration, details } = audioPlayer;
// const {author: autor} = audioPlayer.details //primero se desestructuro details para luego sacar el authot en otra constante
const {author}=details;

// console.log("Song: ", song);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

const [,,trunk='Not found']: string[] = ['Goku', 'Vegeta'];
// const trunk = dbz[3] || 'No hay personaje';
// se puede desestructurar coloando el nombre de la variale en la posicion que se queire extraer

console.error('Personaje 3: ', trunk);


export{}