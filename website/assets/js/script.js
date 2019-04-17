$(function() {	
	$('.colectionSlider').owlCarousel({
        loop: true,
        margin: 5,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });
	
	// $('.navbar-default .navbar-nav > li.dropdown').hover(function() {
	// 	$('ul.dropdown-menu', this).stop(true, true).fadeIn('slow');
	// 	$(this).addClass('open');
	// 		  }, function() {
	// 	$('ul.dropdown-menu', this).stop(true, true).fadeOut('slow');
	// 	$(this).removeClass('open');
    // });

    $('[data-toggle="slide-collapse"]').on('click', function() {
        $navMenuCont = $($(this).data('target'));
        $navMenuCont.animate({
          'width': 'toggle'
        }, 350);
        $('html').addClass('sidepanel');
        $(".menu-overlay").fadeIn(500);
      
      });
      $(".menu-overlay").click(function(event) {
        $(".navbar-toggle").trigger("click");
        $(".menu-overlay").fadeOut(500);
        $('html').removeClass('sidepanel');
      });

      $('.collectiontabs').click(function(){
       
        
        $('.collectiontabs').removeClass('active');
        $(this).addClass('active');
      });
});


    function tabBx(id){
        if($('#'+id).css('display')=='block'){
            $('#'+id).fadeIn(500);
            $(this).addClass('active');
        }else{
            $('.collectionslideCon').fadeOut(500);
            $('#'+id).fadeIn(500);
        }
    }



