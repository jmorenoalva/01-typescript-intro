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
// const {author: autor} = audioPlayer.details
const {author}=details;

console.log("Song: ", song);
console.log('Duration: ', duration);
console.log('Author: ', author);


export{}