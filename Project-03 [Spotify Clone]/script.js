console.log(`js connected`)

const card = 
`
<div class="card-structure">
    <img class="playlist-img" src="assets/BEAST GAMING (2).png" alt="">
    <h3 class="p-title">Beast Music! </h3>
    <p class="p-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
    <img  class="play"  src="assets/play.svg" alt="play">
</div>
`;



function cards () {
    let playlists = document.querySelector(".playlist-card")
    playlists.innerHTML = playlists.innerHTML + card;
}

cards()
cards()
cards()
cards()
cards()
cards()
cards()
cards()
cards()
cards()
cards()
cards()
