document.addEventListener("DOMContentLoaded", function() {
	// Открытие модального окна "полный список оборудывание"
	new WOW().init();
	
	$('.equipment__download-text').on('click', function() {
		$('.modal-equipment').addClass('modal-equipment-active');
		return false;
	})

	$('.portfolio-new-dots__btn').on('click', function() {
		
	})
	let vous_counter = 0;
	$('.your-voice__navigation-arrow').on('click', function() {
		$('.your-voice__decoration-image').removeClass('your-voice__decoration-image_active')
		if (vous_counter == 0) {
			vous_counter = 1;
			$('.voice__decoration_2').addClass('your-voice__decoration-image_active')
		}
		else{
			vous_counter = 0;
			$('.voice__decoration_1').addClass('your-voice__decoration-image_active')
		}
	})

	// Переключение активных блоков в "расчете стоимости"
	$('.calculation-block').on('click', function() {
		$('.calculation-block').removeClass('calculation-block-active');
		$(this).addClass('calculation-block-active');
	})

	$('.portfolio__tabs-item').on('click', function() {
		$('.portfolio-new').removeClass('portfolio-new-active');
		$('.portfolio-new_2').removeClass('portfolio-new_2_active');

	})
	$('.portfolio__tabs-item-3').on('click', function() {
		$('.portfolio-new').addClass('portfolio-new-active');

	})

	$('.portfolio__tabs-item-2').on('click', function() {
		$('.portfolio-new_2').addClass('portfolio-new_2_active');

	})

	
	$('.clients__navigation-next').on('click', function() {
		$('.clients__pagination_news__dot').removeClass('clients__pagination_news__dot_active')
		$('.dt-2').addClass('clients__pagination_news__dot_active')
	})

	$('.clients__navigation-prev').on('click', function() {
		$('.clients__pagination_news__dot').removeClass('clients__pagination_news__dot_active')
		$('.dt-1').addClass('clients__pagination_news__dot_active')
	})

	$('.dt-1').on('click', function() {
		$('.clients__navigation-prev').click()
	})
	$('.dt-2').on('click', function() {
		$('.clients__navigation-next').click()
	})
	// Закрытие модального окна "полный список оборудывание"
	jQuery(function($){
		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".modal-equipment-inner"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.modal-equipment').removeClass('modal-equipment-active');
			}
		});
	});

	// Инициализациия AOS анимаций
	

	var d = document;

	// Мобильное меню

	var menuBurger = d.querySelector('.header__burger');
	menuBurger.addEventListener('click', function(e){
		e.preventDefault();
		if(this.classList.contains('header__burger--active')){
			this.classList.remove('header__burger--active');
			d.querySelector('.header__nav-mobile').classList.remove('header__nav-mobile--active');
			d.querySelector('body').classList.remove('stop');
		}else{
			this.classList.add('header__burger--active');
			d.querySelector('.header__nav-mobile').classList.add('header__nav-mobile--active');
			d.querySelector('body').classList.add('stop');
		}
	})


	// Скрытие мобильного меню и модалок

	function findCloseBtns(){
		let closeBtns = document.querySelectorAll('.close');
		
		for (let i = 0; i < closeBtns.length; i++) {
			setUpClose(closeBtns[i]);
		}
	}

	function setUpClose(closeBtn) {
		closeBtn.addEventListener('click', function(e){
			e.preventDefault();
			menuBurger.classList.remove('header__burger--active');
			d.querySelector('.header__nav-mobile').classList.remove('header__nav-mobile--active');
			d.querySelector('body').classList.remove('stop');
			d.querySelector('.modal').classList.remove('modal--active');
		})
	}
	
	findCloseBtns();



	// Модальные окна скрипт открытия
	function findBtnModal(){
		let btnsModal = document.querySelectorAll('.btn--modal');
		
		for (let i = 0; i < btnsModal.length; i++) {
			setUpBtnModal(btnsModal[i]);
		}
	}

	function setUpBtnModal(btnModal) {
		btnModal.addEventListener('click', function(e){
			e.preventDefault();
			d.querySelector('.modal').classList.add('modal--active');
			d.querySelector('body').classList.add('stop');
		})
	}
	
	findBtnModal();


	// Вызов модалки с заказом
	function findBtnModalOrder(){
		let btnsModal = document.querySelectorAll('.btn--modal-order');
		for (let i = 0; i < btnsModal.length; i++) {
			setUpBtnModalOrder(btnsModal[i]);
		}
	}

	function setUpBtnModalOrder(btnModal) {
		btnModal.addEventListener('click', function(e){
			e.preventDefault();
			d.querySelector('.modal .modal-window--order').classList.add('modal-window--active');
		})
	}
	
	findBtnModalOrder();

	// Вызов с политикой конфиденциальности
	function findBtnModalPrivacy(){
		let btnsModal = document.querySelectorAll('.btn--modal-privacy');
		for (let i = 0; i < btnsModal.length; i++) {
			setUpBtnModalPrivacy(btnsModal[i]);
		}
	}

	function setUpBtnModalPrivacy(btnModal) {
		btnModal.addEventListener('click', function(e){
			e.preventDefault();
			d.querySelector('.modal .modal-window--privacy').classList.add('modal-window--active');
		})
	}
	
	findBtnModalPrivacy();



	// Скрытие модалки при клике на оверлей
	d.querySelector('.modal-overlay').addEventListener('click', function(e){
		e.preventDefault();
		d.querySelector('body').classList.remove('stop');
		d.querySelector('.modal').classList.remove('modal--active');
		d.querySelector('.modal-window--active').classList.remove('modal-window--active');
	});
	


	// Ленивая загрузка изображений

	[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	  img.setAttribute('src', img.getAttribute('data-src'));
	  img.onload = function() {
	 img.removeAttribute('data-src');
	  };
	});




	// Куки
	function setCookie(c_name,value,exdays){
        var exdate=new Date();
           	exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()) + "; path=/";
        document.cookie=c_name + "=" + c_value;
   	}

    function getMyCookie(name) {
        var c = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
            if (c) return c[2];
            else return "";
    }

  

		

	// Слайдер с контрольными точками
	  var swiper = new Swiper('.testimonials-swiper-container', {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: false,
		// init: false,
		pagination: {
		  el: '.testimonials-swiper-pagination',
		  clickable: true,
		},
		navigation: {
			nextEl: '.testimonials-swiper-next',
			prevEl: '.testimonials-swiper-prev',
		},

		breakpoints: {
		  670: {
			slidesPerView: 2,
			spaceBetween: 20,
		  },
		  992: {
			slidesPerView: 3,
			spaceBetween: 20,
		  },
		  1300: {
			slidesPerView: 4,
			spaceBetween: 20,
		  },
		}
	  });


	  // LightGallary (Плагин типо FacnyBox только без JQ)
	  // lightGallery(document.querySelector('.lightgallery'));




	  // FAQ
	  function findFaq(){
			let faqBoxes = document.querySelectorAll('.faq-box')

			for(i = 0; i <= faqBoxes.length-1; i++){
				setupFaq(faqBoxes[i]);
			}
		}

		function setupFaq(faq){
			faq.addEventListener('click', function(e) {
				e.preventDefault();
				if(this.classList.contains('active')){
					this.classList.remove('active');
				}else{
					let activeElem = this.closest('.faq').querySelector('.faq-box.active');
					if(activeElem){
						activeElem.classList.remove('active');
					}
					this.classList.add('active');
				}
			});
		}
		findFaq();

	// Swipers
	const servicesSwiper = new Swiper('.services-swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		allowTouchMove: false,
		// init: false,
		navigation: {
			nextEl: '.services__navigation-next',
			prevEl: '.services__navigation-prev',
		}
	});
	const portfolioSwiper = new Swiper('.portfolio-swiper', {
		slidesPerView: 1,
		spaceBetween: 18,
		loop: true,
		allowTouchMove: false,
		// init: false,
		pagination: {
			el: '.portfolio__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.portfolio__navigation-next',
			prevEl: '.portfolio__navigation-prev',
		},
		breakpoints: {
			576: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				spaceBetween: 36,
				slidesPerView: 3
			}
		}
	});
	const yourVoiceSwiper = new Swiper('.your-voice-swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		allowTouchMove: false,
		// init: false,
		pagination: {
			el: '.your-voice__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.your-voice__navigation-next',
			prevEl: '.your-voice__navigation-prev',
		}
	});
	const branchesSwiper = new Swiper('.branches-swiper', {
		slidesPerView: 1,
		spaceBetween: 16,
		loop: true,
		// init: false,
		navigation: {
			nextEl: '.branches__navigation-next',
			prevEl: '.branches__navigation-prev',
		}
	});
	const equipmentSwiper = new Swiper('.equipment-swiper', {
		slidesPerView: 1,
		spaceBetween: 18,
		loop: true,
		// init: false,
		pagination: {
			el: '.equipment__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.equipment__navigation-next',
			prevEl: '.equipment__navigation-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 36
			}
		}
	});
	const clientsSwiper = new Swiper('.clients-swiper', {
		slidesPerView: 1,
		loop: false,
		slidesPerGroup: 1,
		// init: false,
		pagination: {
			el: '.clients__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.clients__navigation-next',
			prevEl: '.clients__navigation-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 18
			},
			992: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 36
			},
			1200: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 64
			}
		}
	});
	const clientsSwiperMobile = new Swiper('.clients-swiper-mobile', {
		slidesPerView: 1,
		loop: false,
		slidesPerGroup: 1,
		// init: false,
		pagination: {
			el: '.clients__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.clients__navigation-next',
			prevEl: '.clients__navigation-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 18
			},
			992: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 36
			},
			1200: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 64
			}
		}
	});
	const videoGallerySwiper = new Swiper('.video-gallery-swiper', {
		slidesPerView: 1,
		loop: true,
		// init: false,
		pagination: {
			el: '.video-gallery__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.video-gallery__navigation-next',
			prevEl: '.video-gallery__navigation-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 18
			},
			992: {
				spaceBetween: 36,
				slidesPerView: 3
			}
		}
	});
	const articlesSwiper = new Swiper('.articles-swiper', {
		slidesPerView: 1,
		spaceBetween: 18,
		loop: true,
		// init: false,
		pagination: {
			el: '.articles__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.articles__navigation-next',
			prevEl: '.articles__navigation-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				spaceBetween: 36,
				slidesPerView: 3
			}
		}
	});
	const reviewsSwiper = new Swiper('.reviews-swiper', {
		slidesPerView: 1,
		spaceBetween: 25,
		loop: true,
		// init: false,
		pagination: {
			el: '.reviews__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.reviews__navigation-next',
			prevEl: '.reviews__navigation-prev',
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
				spaceBetween: 25
			},
			1200: {
				spaceBetween: 50,
				slidesPerView: 3
			}
		}
	});

	$('.form-field__input_time').datetimepicker({
		datepicker:false,
		format:'H:i',
		theme: 'dark'
	});
	$('.js-request-input-date').datetimepicker({
		timepicker:false,
		format:'d.m.Y',
		theme: 'dark'
	});

	// Custom Select
	var x, i, j, l, ll, selElmnt, a, b, c;
	/*look for any elements with the class "custom-select":*/
	x = document.getElementsByClassName("custom-select");
	l = x.length;
	for (i = 0; i < l; i++) {
		selElmnt = x[i].getElementsByTagName("select")[0];
		ll = selElmnt.length;
		/*for each element, create a new DIV that will act as the selected item:*/
		a = document.createElement("DIV");
		a.setAttribute("class", "select-selected");
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		x[i].appendChild(a);
		/*for each element, create a new DIV that will contain the option list:*/
		b = document.createElement("DIV");
		b.setAttribute("class", "select-items select-hide");
		for (j = 1; j < ll; j++) {
			/*for each option in the original select element,
            create a new DIV that will act as an option item:*/
			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener("click", function(e) {
				/*when an item is clicked, update the original select box,
                and the selected item:*/
				var y, i, k, s, h, sl, yl;
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				sl = s.length;
				h = this.parentNode.previousSibling;
				for (i = 0; i < sl; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName("same-as-selected");
						yl = y.length;
						for (k = 0; k < yl; k++) {
							y[k].removeAttribute("class");
						}
						this.setAttribute("class", "same-as-selected");
						break;
					}
				}
				h.click();
			});
			b.appendChild(c);
		}
		x[i].appendChild(b);
		a.addEventListener("click", function(e) {
			/*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle("select-hide");
			this.classList.toggle("select-arrow-active");
		});
	}
	function closeAllSelect(elmnt) {
		/*a function that will close all select boxes in the document,
        except the current select box:*/
		var x, y, i, xl, yl, arrNo = [];
		x = document.getElementsByClassName("select-items");
		y = document.getElementsByClassName("select-selected");
		xl = x.length;
		yl = y.length;
		for (i = 0; i < yl; i++) {
			if (elmnt == y[i]) {
				arrNo.push(i)
			} else {
				y[i].classList.remove("select-arrow-active");
			}
		}
		for (i = 0; i < xl; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add("select-hide");
			}
		}
	}
	/*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
	document.addEventListener("click", closeAllSelect);

	// Certificate Slider
	document.querySelectorAll('.js-certificate-slider').forEach(function (slider) {
		const range = slider.querySelector('.certificate-slider__input-input')
		console.log(slider)
		const rangeValue = slider.querySelector('.certificate-slider__input-value')
		const setValue = () => {
			const newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) )
			const newPosition = 14 - (newValue * 0.275)

			rangeValue.innerHTML = `<span>${range.value}</span>`;
			rangeValue.style.left = `calc(${newValue}% + (${newPosition}px))`;
		}
		range.addEventListener('input', setValue);
		setValue()
	})
});

function tariffsChange (slug) {
	const tariffsGroups = document.querySelectorAll('.tariffs__panels-group.active')
	tariffsGroups.forEach((tariffsGroup) => {
		tariffsGroup.classList.remove('active')
	})

	const targetTariffsGroup = document.querySelector('.tariffs__panels-group[data-type=' + slug + ']')
	targetTariffsGroup.classList.add('active')
}

function portfolioChange (slug) {
	console.log(slug);

	const portfolioGroups = document.querySelectorAll('.portfolio__carousel.active')
	portfolioGroups.forEach((portfolioGroup) => {
		portfolioGroup.classList.remove('active')
	})

	const targetPortfolioGroup = document.querySelector('.portfolio__carousel[data-type=' + slug + ']')
	targetPortfolioGroup.classList.add('active')
}