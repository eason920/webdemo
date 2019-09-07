$(function () {
	$('.english span').click(function () {
		$('#translation_Font').addClass("show");

		var left = $(this).position().left;
		var top = $(this).position().top;
		var box_l = left + 450;
		var box_r = left + 350;
		var box_t = top + 120;
		var total = $('.mask').width() / 2;

		if (left <= total) {
			$('#translation_Font').css({ top: box_t, left: box_l });
		} else {
			$('#translation_Font').css({ top: box_t, left: box_r });
		}
	});
	$('#translation_Font .close_btn').click(function () {
		$('#translation_Font').removeClass("show");
	});
	$('#control-1 .toggle').click(function () {
		$('#control-1').toggleClass("active");
		if($('#control-1').attr('data-value')=='0'){
			$('#control-1').attr('data-value','1')
			$('.article2').show()
			$('.article').hide();
		}else{
			$('#control-1').attr('data-value','0')
			$('.article').show()
			$('.article2').hide();			
		}
			//console.log($('#control-1').attr('data-value'))
	})
	$('#control-2 .toggle').click(function () {
		$('#control-2').toggleClass("active");
		$('.Chinese').toggleClass("show");
	})
	$('.play_btn').click(function () {
		$('.speed').toggleClass("show");
		$('.play_btn').toggleClass("pause");
			pauseplay()
		if($(".play_btn").hasClass("pause")==false){
			pausetime()
		}
	})
	$('.play_btn').hover(function(){
		if($(".play_btn").hasClass("pause"))
			$('.speed').addClass('show');
	})

	$('.speed').hover(function(){},function(){
		$('.speed').removeClass('show');
	})

	$('.share_btn').click(function () {
		$('.share').toggleClass("show");
	})
	$('.word_btn').click(function () {
		$('section').addClass("move");
		$('.tranglationBody').addClass("show");
	})
	$('.tranglationBody .close_btn').click(function () {
		$('section').removeClass('move');
		$('.tranglationBody').removeClass("show");
	})
	$('.classification_btn').hover(function () {
		$('.classification').toggleClass('show');
	})
	$('.message_btn').click(function () {
		$(".mask").stop().animate({ 'scrollTop': $("#message").offset().top - 70 }, 1000, 'swing');
	})
	if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
		$('.speed').addClass("formac");
	}
	const nua = navigator.userAgent;
	if (/macintosh/i.test(nua)) {
		if (/chrome/i.test(nua)) {
			$('header nav .speed').css({ right: 722 })
		} else {
			$('header nav .speed').css({ right: 728 })
		}
	}
	
	// ====================================
	// == v SCROLL 'READ MORE'
	// ====================================
	let newTop;
	let oldTop;
	const $readMore = $('.read-more');
	$('.mask').scroll(function(){
		oldTop = newTop;
		newTop = $(this).scrollTop();
		if( newTop > oldTop ){
			$readMore.removeClass('is-show');
		}else{
			$readMore.addClass('is-show');
		}
	});
	
});
