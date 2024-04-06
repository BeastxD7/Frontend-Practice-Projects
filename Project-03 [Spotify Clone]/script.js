

function createCard(title, desc, imageSrc) {
    return `
    <div class="card-structure">
        <img class="playlist-img" src="${imageSrc}" alt="image">
        <h3 class="p-title">${title}</h3>
        <p class="p-desc">${desc}</p>
        <img class="play" src="assets/play.svg" alt="play">
    </div>
    `;
}

function addCardToPlaylist(title, desc, imageSrc) {
    let playlists = document.querySelector(".playlist-card");
    playlists.innerHTML += createCard(title, desc, imageSrc);
}


async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/songs/"); 
    let response = await a.text(); 
    // console.log(response); 

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName('a')
    // console.log(as)

    for (let i = 3; i < as.length; i++) {
        let songtitle = as[i].innerText;
    
        songtitle = songtitle.split(".mp3")[0]
        // console.log(songtitle)
        let songs = document.querySelector("#songs");
        songs.innerHTML += ` <div  class="card" style="list-style: none;">
        <li > ${songtitle}</li>
        </div>`  
    }
  playmusic()
}
getSongs()

addCardToPlaylist("Test", "This is a example description. ", "https://img.freepik.com/free-vector/realistic-music-record-label-disk-mockup_1017-33906.jpg")


let currsong = new Audio()

url = `https://spotify-clone-rust-six.vercel.app/songs/`

function playmusic() {
    let track = document.querySelectorAll(".card li");
    track.forEach(element => {
        // console.log(element.innerText);
        element.addEventListener("click", function() {
            console.log("clicked");
            currsong.src = `https://spotify-clone-rust-six.vercel.app/songs/${element.innerText}.mp3`;
            currsong.play()
    });
})}