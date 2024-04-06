

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
    console.log(response); 

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName('a')
    console.log(as)

    for (let i = 3; i < as.length; i++) {
        let songtitle = as[i].innerText;
        console.log(songtitle)
        songtitle = songtitle.split(".mp3")[0]
        let songs = document.querySelector("#songs");
        songs.innerHTML += ` <div  class="card" style="list-style: none;">
        <li > ${songtitle}</li>
        </div>`    
        
    }
}
getSongs()

// let songtitle = "srinivas";


addCardToPlaylist("Test", "This is a example description.This is to increase the line ", "https://png.pngtree.com/png-vector/20190408/ourmid/pngtree-vector-music-illustration-with-wing-and-speaker-png-image_923833.jpg")
addCardToPlaylist("Test", "This is a example description. ", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sphere-glass-the-mixtape-cd-cover-design-template-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts=1602178819")
addCardToPlaylist("Test", "This is a example description. ", "https://img.freepik.com/free-vector/realistic-music-record-label-disk-mockup_1017-33906.jpg")
addCardToPlaylist("Test", "This is a example description. ", "https://img.freepik.com/free-vector/realistic-music-record-label-disk-mockup_1017-33906.jpg")
addCardToPlaylist("Test", "This is a example description.This is to increase the line ", "https://png.pngtree.com/png-vector/20190408/ourmid/pngtree-vector-music-illustration-with-wing-and-speaker-png-image_923833.jpg")
addCardToPlaylist("Test", "This is a example description. ", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sphere-glass-the-mixtape-cd-cover-design-template-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts=1602178819")
addCardToPlaylist("Test", "This is a example description. ", "https://img.freepik.com/free-vector/realistic-music-record-label-disk-mockup_1017-33906.jpg")
addCardToPlaylist("Test", "This is a example description. ", "https://img.freepik.com/free-vector/realistic-music-record-label-disk-mockup_1017-33906.jpg")
addCardToPlaylist("Test", "This is a example description.This is to increase the line ", "https://png.pngtree.com/png-vector/20190408/ourmid/pngtree-vector-music-illustration-with-wing-and-speaker-png-image_923833.jpg")
addCardToPlaylist("Test", "This is a example description. ", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sphere-glass-the-mixtape-cd-cover-design-template-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts=1602178819")
addCardToPlaylist("Test", "This is a example description. ", "https://img.freepik.com/free-vector/realistic-music-record-label-disk-mockup_1017-33906.jpg")
addCardToPlaylist("Test", "This is a example description. ", "https://img.freepik.com/free-vector/realistic-music-record-label-disk-mockup_1017-33906.jpg")
addCardToPlaylist("Test", "This is a example description.This is to increase the line ", "https://png.pngtree.com/png-vector/20190408/ourmid/pngtree-vector-music-illustration-with-wing-and-speaker-png-image_923833.jpg")
addCardToPlaylist("Test", "This is a example description. ", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sphere-glass-the-mixtape-cd-cover-design-template-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts=1602178819")
addCardToPlaylist("Test", "This is a example description. ", "https://img.freepik.com/free-vector/realistic-music-record-label-disk-mockup_1017-33906.jpg")
addCardToPlaylist("Test", "This is a example description. ", "https://img.freepik.com/free-vector/realistic-music-record-label-disk-mockup_1017-33906.jpg")
addCardToPlaylist("Test", "This is a example description.This is to increase the line ", "https://png.pngtree.com/png-vector/20190408/ourmid/pngtree-vector-music-illustration-with-wing-and-speaker-png-image_923833.jpg")
addCardToPlaylist("Test", "This is a example description. ", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sphere-glass-the-mixtape-cd-cover-design-template-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts=1602178819")
addCardToPlaylist("Test", "This is a example description. ", "https://img.freepik.com/free-vector/realistic-music-record-label-disk-mockup_1017-33906.jpg")
addCardToPlaylist("Test", "This is a example description. ", "https://img.freepik.com/free-vector/realistic-music-record-label-disk-mockup_1017-33906.jpg")