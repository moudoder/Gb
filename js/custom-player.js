let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let Playing_song = false;
let track = document.createElement('audio');

const audioPlayers = document.querySelectorAll('.js-audio')
audioPlayers.forEach((audioPlayer) => {
	const audio = audioPlayer.querySelector('.js-audio__audio')
	let timer

	const play = audioPlayer.querySelector('.js-audio__play')
	const fastForwards = audioPlayer.querySelector('.js-audio__fast-forwards')
	const fastBackwards = audioPlayer.querySelector('.js-audio__fast-backwards')
	const durationTimeActual = audioPlayer.querySelector('.js-audio__duration-time-actual')
	const durationTimeFull = audioPlayer.querySelector('.js-audio__duration-time-full')
	const durationSlider = audioPlayer.querySelector('.js-audio__duration')

	if (!audio) {
		return
	}

	if (durationTimeFull) {
		audio.addEventListener('loadeddata', () => {
			durationTimeFull.innerHTML = time_format(audio.duration)
		})
	}

	timer = setInterval(() => {
		range_slider(audio, durationSlider, durationTimeActual, play)
	}, 1000)

	if (play) {
		play.addEventListener('click', () => {
			console.log(audio)
			justplay(audio, play)
		})
	}

	if (durationSlider) {
		durationSlider.addEventListener('change', () => {
			console.log('Change slider!')
			change_duration(audio, durationSlider)
		})
	}

	if (fastForwards) {
		fastForwards.addEventListener('click', () => {
			change_duration(audio, durationSlider, 10)
		})
	}
	if (fastBackwards) {
		fastBackwards.addEventListener('click', () => {
			change_duration(audio, durationSlider, -10)
		})
	}
})

// ============================================================
// Functions
// ============================================================

// 1. Load the track
// function load_track(src) {
// 	clearInterval(timer);
// 	reset_slider();
//
// 	// track.src = src;
//     // track.load();
//
// 	timer = setInterval(range_slider ,1000);
// }
// load_track(index_no);


// 2. Mute sound
// function mute_sound() {
// 	track.volume = 0;
// 	volume.value = 0;
// 	volume_show.innerHTML = 0;
// }


// 3. Toggle track
function justplay(audio, play) {
	if(audio.classList.contains('active')) {
		pausesong(audio, play);
	} else {
		playsong(audio, play);
	}
}

// 3.1. Play song
function playsong(audio, play) {
	pause_all()

	audio.play();
  	Playing_song = true;
  	play.classList.add('active')
	audio.classList.add('active')
}

// 3.2. Pause song
function pausesong(audio, play) {
	console.log('Pause!')
	audio.pause();
	Playing_song = false;
	play.classList.remove('active')
	audio.classList.remove('active')
}

// 4. Reset song duration slider
function reset_slider() {
	slider.value = 0;
}

// 5. Change song duration slider position (On slider change)
function change_duration(audio, durationSlider, value) {
	audio.currentTime = durationSlider ? (audio.duration * durationSlider.value / 100) + (value ? value : 0) : audio.currentTime + (value ? value : 0);
}

// 6. Range Slider
function range_slider(audio, audioSlider, durationTimeActual, play) {
	let position = 0;

	// Update slider position
	if(!isNaN(audio.duration)) {
		position = audio.currentTime * (100 / audio.duration);
		if (audioSlider) {
			audioSlider.value =  position;
		}
		if (durationTimeActual) {
			durationTimeActual.innerHTML = time_format(audio.currentTime);
		}
	}

    // Function will run when the song is over
	if(audio.ended) {
		console.log('Ended!')
		pausesong(audio, play)
		change_duration(audio, audioSlider, 0)
	}
 }

// 7. Time format
function time_format(time) {
	const duration = Math.round(time)

	const hh = Math.floor(duration / 3600)
	const mm = Math.floor((duration - hh * 3600) / 60)
	const ss = duration - hh * 3600 - mm * 60

	return (hh ? (hh > 9 ? '' : '0') + hh + ':' : '')
		+ (mm ? (mm > 9 ? '' : '0') + mm + ':' : '00:')
		+ (ss > 9 ? '' : '0') + ss
}

// 8. Pause All
function pause_all() {
	const activeAudios = document.querySelectorAll('.js-audio__audio.active')
	activeAudios.forEach((activeAudio) => {
		const play = activeAudio.closest('.js-audio').querySelector('.js-audio__play')
		pausesong(activeAudio, play);
	})
}

// 9. Change volume
// function volume_change(){
// 	volume_show.innerHTML = recent_volume.value;
// 	track.volume = recent_volume.value / 100;
// }