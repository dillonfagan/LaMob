<script>
	const minutesToSeconds = (minutes) => minutes * 60;
	const secondsToMinutes = (seconds) => Math.floor(seconds / 60);
	const padWithZeroes = (number) => number.toString().padStart(2, '0');

	let time;
	function initializeTimer() {
		const lengthInSeconds = minutesToSeconds(0);
		time = lengthInSeconds;
	}

	function stopTimer(interval) {
		clearInterval(interval);
		setBackgroundColor("#b33939");

		const button = document.getElementById("button");
		button.innerText = "Reset";
		button.onclick = reset;
	}

	function setBackgroundColor(color) {
		document.getElementById("main")
			.style
			.backgroundColor = color;
	}

	initializeTimer();

	let interval;
	function start() {
		setBackgroundColor("#474787");
		const timeInput = parseFloat(document.getElementById("time-input").value);
		time = minutesToSeconds(timeInput);

		interval = setInterval(() => {
			if (time === 0) {
				stopTimer(interval);
				return;
    		}
    		time -= 1;
  		},1000);
	}

	function reset() {
		location.reload();
	}

	function formatTime(timeInSeconds) {
		const minutes = secondsToMinutes(timeInSeconds);
		const remainingSeconds = timeInSeconds % 60;
		return `${padWithZeroes(minutes)}:${padWithZeroes(remainingSeconds)}`;
	}
</script>

<section>
	<div class="text-3xl text-white w-full text-center">{formatTime(time)}</div>
	<input id="time-input" value="0.1" class="py-2 px-4 bg-white rounded-full" />
	<button id="button" on:click={start} class="bg-white py-2 px-6 mt-4 rounded-full">Start</button>
</section>