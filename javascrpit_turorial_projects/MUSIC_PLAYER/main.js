let progress = document.getElementById("progress");
let song = document.getElementById("song");
let crtlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;

}
function playPause() {
    if (crtlIcon.classList.contains("fa-pause")) {
        song.pause();
        crtlIcon.classList.remove("fa-pause");
        crtlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        crtlIcon.classList.add("fa-pause")
        crtlIcon.classList.remove("fa-play")
    }
    
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    },5000)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    crtlIcon.classList.add("fa-pause")
    crtlIcon.classList.remove("fa-play")
}