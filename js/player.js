var d = document;
let play = document.querySelector('#play'); // Кнопка плэй
let title = document.querySelector('#title'); // Название музла
let recent_volume = document.querySelector('#volume'); // Дорожка громкости
let slider = document.querySelector('#duration_slider'); // Дорожка музла
let artist = document.querySelector('#artist'); // Место с именем артиста
let trackCase = d.querySelector('body');
let timer;
let Playing_song = false;

// обертки треков с нижней части
const salesPhoneAlbum = document.querySelectorAll('.sales-phone__album');
// получение треков с верхней части
const dynaminPhoneMenuItemTop = document.querySelectorAll('.dynamin-phone__menu-item--top');
// получаем все видео с пальцем
const videoMediaPhone = document.querySelectorAll('.video__media--phone')
// текущий трек
let currentTrack = 0;
// функция включения видео при клике next prev
const addActoveForVideo = (ind) => {
	videoMediaPhone.forEach((item, i) => {
		item.classList.remove('active');
		if (i === ind){
			item.classList.add('active');
			item.play()
			
		}
	})
}


const salesPhone = document.querySelector('.sales-phone');
let count = 0;

const musicplayerBlock = document.querySelector('.musicplayer-block');
musicplayerBlock.addEventListener('click', e => {
	const target = e.target;

	if (target.closest('.prev')){
		let trackMusic = trackCase.querySelector('audio.active');

		// если слушаем с верхнего плейлиста
		if(trackMusic.dataset.place === 'top'){
			// получение номера трека
			dynaminPhoneMenuItemTop.forEach((item, i) => {
				if (item === trackMusic.parentElement){
					currentTrack = i;
				}
			})

			// Меняем аудио
			if (d.querySelector('audio.active')) {
				d.querySelector('audio.active').pause()
				d.querySelector('audio.active').currentTime = 0;
				d.querySelector('audio.active').classList.remove('active');
			}
		
			--currentTrack;
			if (currentTrack < 0){
				currentTrack = dynaminPhoneMenuItemTop.length - 1;
			}
			// переключаем видео с пальцем
			addActoveForVideo(currentTrack)
			// перключаем трек для проигрывания
			playFromTop(currentTrack);
		} else if (trackMusic.dataset.place === 'bottom') {
			// получение номера трека
			salesPhoneAlbum.forEach((item, i) => {
				if (item === trackMusic.parentElement){
					currentTrack = i;
				}
			})

				// Меняем аудио
			if (d.querySelector('audio.active')) {
				d.querySelector('audio.active').pause()
				d.querySelector('audio.active').currentTime = 0;
				d.querySelector('audio.active').classList.remove('active');
			}
		
			++currentTrack;
			if (currentTrack > salesPhoneAlbum.length - 1){
				currentTrack = 0;
			}
			playFromMusicSaler(currentTrack);
		}
		
	}

	if (target.closest('.next')){
		let trackMusic = trackCase.querySelector('audio.active');

		// если слушаем с верхнего плейлиста
		if(trackMusic.dataset.place === 'top'){
			// получение номера трека
			dynaminPhoneMenuItemTop.forEach((item, i) => {
				if (item === trackMusic.parentElement){
					currentTrack = i;
				}
			})

				// Меняем аудио
			if (d.querySelector('audio.active')) {
				d.querySelector('audio.active').pause()
				d.querySelector('audio.active').currentTime = 0;
				d.querySelector('audio.active').classList.remove('active');
			}
		
			++currentTrack;
			if (currentTrack > dynaminPhoneMenuItemTop.length - 1){
				currentTrack = 0;
			}
			// переключаем видео с пальцем
			addActoveForVideo(currentTrack)
			// перключаем трек для проигрывания
			playFromTop(currentTrack);
		} else if (trackMusic.dataset.place === 'bottom') {
	
			// получение номера трека
			salesPhoneAlbum.forEach((item, i) => {
				if (item === trackMusic.parentElement){
					currentTrack = i;
				}
			})

				// Меняем аудио
			if (d.querySelector('audio.active')) {
				d.querySelector('audio.active').pause()
				d.querySelector('audio.active').currentTime = 0;
				d.querySelector('audio.active').classList.remove('active');
			}
		
			--currentTrack;
			if (currentTrack < 0){
				currentTrack = salesPhoneAlbum.length - 1;
			}
			playFromMusicSaler(currentTrack);
		}
		
	}
})


// переключение трека с нижнего плейлиста
const playFromMusicSaler = (int) => {
	const trackMusic = salesPhoneAlbum[int].querySelector('audio');
	trackMusic.classList.add('active')
	
	load_track(salesPhoneAlbum[int]);
	

	setTimeout(function () {
		Playing_song = false;
		justplay();
		d.querySelector('.musicplayer').classList.add('active');
	}, 700)
}

// переключение трека с верхнего плейлиста
const playFromTop = (int) => {
	const trackMusic = dynaminPhoneMenuItemTop[int].querySelector('audio');
	trackMusic.classList.add('active')

	load_track(dynaminPhoneMenuItemTop[int]);

	setTimeout(function () {
		Playing_song = false;
		justplay();
		d.querySelector('.musicplayer').classList.add('active');
	}, 700)
}

// All functions

// function load the track
function load_track(item) {
	clearInterval(timer);
	reset_slider();

	//trackMusic.src = item.getAttribute('data-url-audio'); // Путь до трека

	// получили имя исполнителя
	title.innerHTML = item.getAttribute('data-name');
	// получили название песни
	artist.innerHTML = item.getAttribute('data-singer');
	//trackMusic.load();

	timer = setInterval(range_slider, 1000);
}




//mute sound function
function mute_sound() {
	let trackMusic = trackCase.querySelector('audio.active');
	trackMusic.volume = 0;
	volume.value = 0;
	//volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
function justplay() {
	if (Playing_song == false) {
		playsong();

	} else {
		pausesong();
	}
}


// reset song slider
function reset_slider() {
	slider.value = 0;
}

// play song
function playsong() {
	let trackMusic = trackCase.querySelector('audio.active');
	trackMusic.play();
	Playing_song = true;
	play.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-pause fa-w-14"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" class=""></path></svg>';
}

//pause song
function pausesong() {
	let trackMusic = trackCase.querySelector('audio.active');
	trackMusic.pause();
	Playing_song = false;
	play.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-play fa-w-14"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>';
}






// change volume
function volume_change() {
	let trackMusic = trackCase.querySelector('audio.active');
	trackMusic.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration() {
	let trackMusic = trackCase.querySelector('audio.active');
	slider_position = trackMusic.duration * (slider.value / 100);
	trackMusic.currentTime = slider_position;
}



function range_slider() {
	let trackMusic = trackCase.querySelector('audio.active');
	let position = 0;

	// update slider position
	if (!isNaN(trackMusic.duration)) {
		position = trackMusic.currentTime * (100 / trackMusic.duration);
		slider.value = position;
	}

	// function will run when the song is over
	if (trackMusic.ended) {
		play.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-play fa-w-14"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>';
	}
}