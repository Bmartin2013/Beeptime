export const play = (soundURL) => {
    var audio = new Audio(soundURL);
    audio.play();
}

export default play;