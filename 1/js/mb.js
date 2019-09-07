$(function () {
	let layoutType = layout
	const popContent = '<div class="translation_Font">KK[ˈrɛrlɪ]  DJ[ˈrɛəli]<br>ad.<br>很少，難得<br>異乎尋常地，極度</div>';
	$('.Read_More_btn').click(function () {
		if(layoutType == 'a'){
			$('.video-cover').css({display: 'none'});
			$('.v-wrapper').css({display: 'block', height: $(window).width() * 0.56});

			var tag = document.createElement('script');
			tag.src = "./js/youtube_iframe_api.js";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

			var player;
			function onYouTubeIframeAPIReady() {
				player = new YT.Player('player', {
					height: '390',
					width: '640',
					videoId: 'CZoYuWA21SU',
					playerVars: {
						autoplay: 1,
						playsinline: 1,
						loop: 1,
						rel: 0,
						controls: 0,
					},
					events: {
						'onReady': onPlayerReady,
						'onStateChange': onPlayerStateChange
					}
				});
			}

			function onPlayerReady(event) {
				event.target.mute();
				event.target.playVideo();
			}

			function onPlayerStateChange(evt) {
				if (evt.data === YT.PlayerState.ENDED) {
					evt.target.playVideo();
				}
			}

			window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

		}
		$('.article_cover').addClass("Read_on");
		$('section').addClass("Read_on");
		$('.message_btn').addClass("show");
		$('.ad').addClass("show");
	});
	$('.english span').click(function () {
		$(this).toggleClass("Drlinehight");
		$(this).siblings().removeClass('Drlinehight');
		$('.english span .translation_Font').remove();
		$(this).append(popContent);
		const left = $(this).offset().left;
		const top = $(this).offset().top;
		if (left <= 160) {
			$('.english span .translation_Font').addClass("lbox");
		} else {
			$('.english span .translation_Font').addClass("rbox");
		}
		if (top <= 410) {// Gress: a=390 / b=410
			$('.english span .translation_Font').addClass("tbox");
		} else {
			$('.english span .translation_Font').addClass("bbox");
		}
	});
	$('.share_btn').click(function () {
	  	$('#sharebox').addClass("showbox");
	});
	$('.close_share').click(function () {
		$('#sharebox').removeClass("showbox");
		$('.ad').addClass("show");
	});
	$('.close_join,.join_btn,.fb_btn').click(function () {
		$('#joinbox').removeClass("showbox");
		$('.ad').addClass("show");
	});
	$('.message_btn,.join_btn,.fb_btn').click(function () {
	// $('.join_btn,.fb_btn').click(function () {
		switch(true){
			case layoutType == 'a':
				$('.messagebox').addClass("show");
				break;
			case layoutType == 'b':
				$('#messagebg').addClass("showbox");
				break;
			default:
		}
	});
	$('.back_btn').click(function () {
		switch (true){
			case layoutType == 'a':
				$('.messagebox').removeClass("show");
				break;
			case layoutType == 'b':
				$('#messagebg').removeClass("showbox");
				break;
			default:
		}
	  	$('.ad').addClass("show");
	});
	const nua = navigator.userAgent;
	if (/iphone/i.test(nua)) {
		$('.Read_More_btn').on('click', function () {
			const $target = $('.english').parent('section');
			switch (true){
				case layoutType == 'a':
					$target.css({ marginTop: 0 });
					break;
				case layoutType == 'b':
					$target.css({ marginTop: 25, paddingBottom: 38 });
					break;
				default:
			}
		});
	}

	$('#audioPlayer-a').click(function () {
		if($(this).attr('src')=='images/mb_a/play_btn.png'){
			$(this).attr('src','images/mb_a/pause_btn.png')
			$('.main').addClass('is-playing')
			pauseplay()
		}else{
			$(this).attr('src','images/mb_a/play_btn.png')
			$('.main').removeClass('is-playing')
			pausetime()
		}
	})

	$('#audioPlayer-b').click(function () {
		if($(this).attr('src')=='images/mb_b/play_btn.png'){
			$(this).attr('src','images/mb_b/pause_btn.png')
			$('.main').addClass('is-playing')
			pauseplay()
		}else{
			$(this).attr('src','images/mb_b/play_btn.png')
			$('.main').removeClass('is-playing')
			pausetime()
		}
	})

	// ====================================
	// == v SCROLL 'READ MORE'
	// ====================================
	let newTop;
	let oldTop;
	const $readMore = $('.read-more');
	$('.scroller').scroll(function(){
		oldTop = newTop;
		newTop = $(this).scrollTop();
		if( newTop > oldTop ){
			$readMore.removeClass('is-show');
		}else{
			$readMore.addClass('is-show');
		}
	});


	// ====================================
	// == v layoutType B .message_btn
	// ====================================
	if( layout == 'b'){
		$('.message_btn, .back_btn').click(function(){
			$('.scroller').toggleClass('is-lock')
		});
	}
	console.log('layout', layout, 'layoutType', layoutType);
	
 });