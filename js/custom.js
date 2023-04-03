/////////////////////////////////////////////////////////////
// Tentative avec Mo.js d'animer le logo

const burst = new mojs.Burst({
    radius:   { 0: 100 },
    count:    10,
    children: {
        shape:      'zigzag',
        points:     12,
        angle:      95,
        fill:       [ 'white' ,'blue', 'black', 'yellow'],
        rotate:      { 360: 0 },
        duration:   8000,
        delay:      'stagger(rand(0, 200))',
        easing:       'quint.out'
    }
});
document.addEventListener( 'click', function (e) {
    const coords = { x: e.pageX , y:e.pageY };
    burst
        .tune({coords})
        .setSpeed(6)
        .replay();
});
////////////////////////////////////////////////////////////////

    // // Définir le token d'accès
    // let access_token = "07a48b8c5e5d45189ee3937f64468d96";

    // // Définir l'id du device
    // let device_id = null;

    // // Définir l'id de l'album
    // let album_id = '2yemZEPhsqWdvWnKJh7rzd';

    // // Sélectionner l'image par son id
    // let image = document.getElementById("image-rotate");

    // // Sélectionner les boutons par leur id
    // let playButton = document.getElementById("play-button");
    // let pauseButton = document.getElementById("pause-button");
    // let nextButton = document.getElementById("next-button");

    // // Définir une fonction qui sera exécutée quand la Web Playback SDK sera chargée et que la letiable Spotify sera disponible
    // window.onSpotifyWebPlaybackSDKReady = () => {
    // // Créer une instance du player avec le nom et le token d'accès
    // const player = new Spotify.Player({
    //     name: "Web Playback SDK Quick Start Player",
    //     getOAuthToken: (cb) => {
    //     cb(access_token);
    //     },
    // });

    // // Écouter l'événement ready du player
    // player.addListener("ready", ({ device_id }) => {
    //     console.log("Ready with Device ID", device_id);
    //     // Mettre à jour l'id du device
    //     device_id = device_id;
    // });

    // // Écouter l'événement player_state_changed du player
    // player.addListener("player_state_changed", (state) => {
    //     console.log(state);
    //     // Récupérer l'id de l'album en cours
    //     album_id = state.track_window.current_track.album.id;
    //     // Faire une requête GET à l'endpoint albums/{id} avec l'id de l'album
    //     fetch("https://api.spotify.com/v1/albums/" + album_id, {
    //     headers: {
    //         Authorization: "Bearer " + access_token,
    //     },
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         // Récupérer l'url de la première image de l'album
    //         let image_url = data.images[0].url;
    //         // Changer la source de l'image avec l'url de l'image de l'album
    //         image.src = image_url;
    //     });
    //     // Si la musique est en train de jouer
    //     if (state.paused === false) {
    //     // Ajouter la classe image-rotate à l'image
    //     image.classList.add("image-rotate");
    //     }
    //     // Si la musique est en pause ou arrêtée
    //     else {
    //     // Enlever la classe image-rotate à l'image
    //     image.classList.remove("image-rotate");
    //     }
    // });

    // // Connecter le player
    // player.connect();
    // };

    // // Définir une fonction pour démarrer la musique
    // function playMusic(){
    //     // Faire une requête PUT à l'endpoint me/player/play avec le device_id
    //     fetch("https://api.spotify.com/v1/me/player/play?device_id=" + device_id, {
    //         method: "PUT",
    //         headers: {
    //             Authorization: "Bearer " + access_token,
    //         },
    //         })
    //         .then((response) => console.log(response))
    //         .catch((error) => console.log(error));
    //     }
    
    //     // Définir une fonction pour arrêter la musique
    //     function pauseMusic() {
    //         // Faire une requête PUT à l'endpoint me/player/pause avec le device_id
    //         fetch("https://api.spotify.com/v1/me/player/pause?device_id=" + device_id, {
    //         method: "PUT",
    //         headers: {
    //             Authorization: "Bearer " + access_token,
    //         },
    //         })
    //         .then((response) => console.log(response))
    //         .catch((error) => console.log(error));
    //     }
    
    //     // Définir une fonction pour passer à la piste suivante
    //     function nextTrack() {
    //         // Faire une requête POST à l'endpoint me/player/next avec le device_id
    //         fetch("https://api.spotify.com/v1/me/player/next?device_id=" + device_id, {
    //         method: "POST",
    //         headers: {
    //             Authorization: "Bearer " + access_token,
    //         },
    //         })
    //         .then((response) => console.log(response))
    //         .catch((error) => console.log(error));
    //     }
    
    //     // Ajouter des écouteurs d'événements pour appeler les fonctions correspondantes quand les boutons sont cliqués
    //     playButton.addEventListener("click", playMusic);
    //     pauseButton.addEventListener("click", pauseMusic);
    //     nextButton.addEventListener("click", nextTrack);

