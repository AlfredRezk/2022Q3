class Song { 
  constructor(typeList, name, time) { 
    this.typeList = typeList;
    this.name = name;
    this.time = time;
  }
}

function main(songsArr) { 

  // remove the first element in array
  songsArr.shift();
  let selectedPlayList = songsArr.pop();

  let songs = songsArr.map(songInfo => { 
    let [typeList, name, time] = songInfo.split('_');
    return new Song(typeList, name, time);
  })

// search for selected playlist
  if (selectedPlayList != 'all') { 
    songs = songs.filter(song=> song.typeList === selectedPlayList)
  }

  // Loop through the array and print its songs
  songs.forEach(song => console.log(song.name));


}

main([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);