
const laMusique = new Audio('./assets/AccordionSound.mp3');

const play = () => {
	laMusique.muted = false;
	laMusique.play();
}

const stop = () => laMusique.muted = true;

export default {play, stop};