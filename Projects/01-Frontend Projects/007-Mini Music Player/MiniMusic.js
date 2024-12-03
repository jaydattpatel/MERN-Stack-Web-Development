songsData = [
  {
    id: 1001,
    name: "Exotic",
    artist: "Pitbull and Priyanka",
    image: "Images/song(1).jpg",
    genre: "Pop",
    source: "Songs/01-Exotic(Pitbull-Priyanka).mp3",
  },
  {
    id: 1002,
    name: "Rain Over Me",
    artist: "Pitbull and Marc",
    image: "Images/song(2).jpg",
    genre: "Rock",
    source: "Songs/02-Rain Over Me (Pitbull-Marc).mp3",
  },
  {
    id: 1003,
    name: "Beautiful",
    artist: "Akon",
    image: "Images/song(3).jpg",
    genre: "Hip Hop",
    source: "Songs/03-Beautiful (Akon) .mp3",
  },
  {
    id: 1004,
    name: "Titanic",
    artist: "Titanic Artists Unknown",
    image: "Images/song(4).jpg",
    genre: "Pop",
    source: "Songs/04-Titanic (Unknown).mp3",
  },
  {
    id: 1005,
    name: "Club Can't Handle Me",
    artist: "Florida",
    image: "Images/song(5).jpg",
    genre: "Rock",
    source: "Songs/05-Club Can't Handle Me(FLO-RIDA).mp3",
  },
  {
    id: 1006,
    name: "Never Say Never",
    artist: "Justin and Jaden Smith",
    image: "Images/song(6).jpg",
    genre: "Hip Hop",
    source: "Songs/06-Never Say Never (Justin-Jaden Smith).mp3",
  },
  {
    id: 1007,
    name: "Tonight",
    artist: "Pitbull",
    image: "Images/song(7).jpg",
    genre: "Pop",
    source: "Songs/07-Tonight(Pitbull).mp3",
  },
  {
    id: 1008,
    name: "I'm So Paid",
    artist: "Akon and Jeeze Lil Wayn",
    image: "Images/song(8).jpg",
    genre: "Rock",
    source: "Songs/08-I'm So Paid(Akon-Young Jeeze-Lil' Wayn).mp3",
  },
  {
    id: 1009,
    name: "She Doesn't Mind",
    artist: "Sean Paul",
    image: "Images/song(9).jpg",
    genre: "Hip Hop",
    source: "Songs/09-She Doesn't Mind(Sean Paul).mp3",
  },
  {
    id: 1010,
    name: "Tokyo Drift",
    artist: "Pharrell Williams",
    image: "Images/song(10).jpg",
    genre: "Pop",
    source: "Songs/10-Tokyo Drift(Pharrell Williams).mp3",
  },
  {
    id: 1011,
    name: "Na Na Na",
    artist: "Akon",
    image: "Images/song(11).jpg",
    genre: "Rock",
    source: "Songs/11-Na Na Na(Akon).mp3",
  },
];

let theme = document.querySelector("#theme");
theme.addEventListener("click", () => {
  if (theme.checked) {
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    document.querySelector("body").style.backgroundColor = "white";
  }
});

let filter = document.querySelector("select");

filter.addEventListener("change", (event) => {
  renderAllSongs();
});

let currentPlayingSong;

let audio = document.querySelector("audio");

function audioPlay(song) {
  audio.src = song.source;
  audio.play();
  updateSongInfo(song);
}

function updateGenre() {
  let genreSet = new Set([]);

  songsData.forEach((song) => {
    genreSet.add(song.genre);
  });

  for (const gen of genreSet) {
    let option = document.createElement("option");
    option.textContent = gen;
    filter.appendChild(option);
  }
}

updateGenre();

let songList = document.querySelector("#songList");

let allSongs = [];

function renderAllSongs() {
  songList.innerHTML = "";

  if (filter.value === "All") {
    allSongs = songsData;
  } else {
    allSongs = songsData.filter((obj) => {
      return obj.genre === filter.value;
    });
  }

  for (let songInfo of allSongs) {
    let div = document.createElement("div");
    div.classList.add("song");
    div.textContent = songInfo.name;
    div.addEventListener("click", () => {
      audioPlay(songInfo);
    });
    songList.appendChild(div);
  }
}

renderAllSongs();

if (allSongs.length > 0) {
  audio.src = allSongs[0].source;
  updateSongInfo(allSongs[0]);
}

function updateSongInfo(song) {
  currentPlayingSong = song;
  document.querySelector(".songInfo img").src = song.image;
  document.querySelector(".songInfo .name").textContent = song.name;
  document.querySelector(".songInfo .artist").textContent = song.artist;
  document.querySelector(".songInfo .genre").textContent =
    "Genre : " + song.genre;
  document.querySelector(".songInfo .id").textContent = "Id : " + song.id;
}

let previous = document.querySelector(".previous");
previous.addEventListener("click", (event) => {
  let len = allSongs.length - 1;
  let index = allSongs.indexOf(currentPlayingSong);

  if (index === 0) {
    audioPlay(allSongs[len]);
  } else {
    audioPlay(allSongs[index - 1]);
  }
});

let next = document.querySelector(".next");
next.addEventListener("click", (event) => {
  let len = allSongs.length - 1;
  let index = allSongs.indexOf(currentPlayingSong);
  if (index === len) {
    audioPlay(allSongs[0]);
  } else {
    audioPlay(allSongs[index + 1]);
  }
});

let playlist = {
  // 'List-1':[],
  // 'Playlist-2':[]
};

let playlistName = document.querySelector(".create input");
let addPlaylistBtn = document.querySelector(".create button");
addPlaylistBtn.addEventListener("click", () => {
  if (playlistName.value.trim() === "") {
    return;
  }
  playlist[playlistName.value.trim()] = [];
  renderPlaylist();
  renderPlaylistSongs();
});

let addSongToList = document.querySelector(".addSongToList button");
addSongToList.addEventListener("click", () => {
  let selectedPlaylist = document.querySelector(".playlist .selected");
  if (selectedPlaylist) {
    playlist[selectedPlaylist.textContent].push(currentPlayingSong);
    renderPlaylistSongs();
  } else {
    alert("Please Select or Add Playlist.....");
  }
});

function renderPlaylist() {
  let playlistContainer = document.querySelector(".playlist");
  playlistContainer.innerHTML = "";
  let len = Object.keys(playlist).length;
  if (len) {
    for (let key of Object.keys(playlist)) {
      let div = document.createElement("div");
      div.classList.add("song");
      div.textContent = key;
      div.addEventListener("click", (event) => {
        if (div.classList.contains("selected")) {
          div.classList.remove("selected");
        } else {
          const sel = document.querySelector(".playlist .selected");
          if (sel) {
            sel.classList.remove("selected");
          }
          div.classList.add("selected");
          renderPlaylistSongs();
        }
      });
      playlistContainer.appendChild(div);
    }
  } else {
    playlistContainer.innerHTML = "No Playlist added.";
  }
}

renderPlaylist();

function renderPlaylistSongs() {
  let selectedPlaylist = document.querySelector(".playlist .selected");
  let list = document.querySelector(".currentList .list");
  list.innerHTML = "";

  if (selectedPlaylist) {
    let selectedPlaylistText = selectedPlaylist.textContent;
    if (playlist[selectedPlaylistText].length <= 0) {
      list.innerHTML = "No Songs in Playlist";
    } else {
      for (let song of playlist[selectedPlaylistText]) {
        let div = document.createElement("div");
        div.classList.add("song");
        div.textContent = song.name;
        div.addEventListener("click", () => {
          audioPlay(song);
        });
        list.appendChild(div);
      }
    }
  } else {
    list.innerHTML = "No Playlist Selected";
  }
}

renderPlaylistSongs();
