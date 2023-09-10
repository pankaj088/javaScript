

//  for audio play
function baja() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.baja();
}

setTimeout(() => {
    baja()
}, 2000)


setInterval(() => {
    let d = new Date();
    time.innerHTML = d  // yaha time ak "id" hai
})