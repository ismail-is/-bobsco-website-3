/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {

    'use strict';
	
	function contactForm(){
	// > Contact form function by = custom.js	
	jQuery('body').on('submit', 'form.cons-contact-form', function(e){
		e.preventDefault();
		var form = jQuery(this);
		/ sending message /
		jQuery.ajax({
			url: 'https://7xtheme.com/react/shapen/form-handler.php',
			data: form.serialize() + "&action=contactform",
			type: 'POST',
			dataType: 'JSON',
			beforeSend: function() {
				jQuery('.loading-area').show();
			},

			success:function(data){
				jQuery('.alert').remove();
				jQuery('.loading-area').hide();
				if(data['success']){
				jQuery("<div class='alert alert-success'>Message sent successfully.</div>").insertBefore('form.cons-contact-form');
				}else{
				jQuery("<div class='alert alert-danger'>Message sent successfully.</div>").insertBefore('form.cons-contact-form');	
				}
			},
			error:function(data){
				jQuery('.alert').remove();
				jQuery('.loading-area').hide();
				if(data['success']){
				jQuery("<div class='alert alert-success'>Message sent successfully.</div>").insertBefore('form.cons-contact-form');
				}else{
				jQuery("<div class='alert alert-danger'>Message sent successfully.</div>").insertBefore('form.cons-contact-form');	
				}
			},
		});
		return false;
	});	
	}
	
	
    /*--------------------------------------------------------------------------------------------
        document.ready ALL FUNCTION START
    ---------------------------------------------------------------------------------------------*/
    //________ Contact form animation function by = custom.js ________//		
    function Get_in_touch(){		
      $(".input input , .input textarea").focus(function() {
  
      $(this).parent(".input").each(function() {
        $("label", this).css({
        "line-height": "18px",
        "font-size": "12px",
        "font-weight": "500",
        "top": "0px"
        })
        $(".spin", this).css({
        "width": "100%"
        })
      });
      }).blur(function() {
      $(".spin").css({
        "width": "0px"
      })
      if ($(this).val() == "") {
        $(this).parent(".input").each(function() {
        $("label", this).css({
            "line-height": "40px",
            "font-size": "12px",
            "font-weight": "500",
            "top": "10px"
        })
        });
  
      }
      });
  }		
    
    //________page scroll top on button click function by = custom.js________//	

    function scroll_top(){
      jQuery("button.scroltop").on('click', function() {
        jQuery("html, body").animate({
          scrollTop: 0
        }, 1000);
        return false;
      });

      jQuery(window).on("scroll", function() {
        var scroll = jQuery(window).scrollTop();
        if (scroll > 900) {
          jQuery("button.scroltop").fadeIn(1000);
        } else {
          jQuery("button.scroltop").fadeOut(1000);
        }
      });
    }
  
    function magnific_popup(){
        jQuery('.mfp-gallery').magnificPopup({
          delegate: '.mfp-link',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          }
       });
	}

    /* 2.1 skills bar tooltips*/
	function progress_bar_tooltips() {
		jQuery(function () { 
		  jQuery('[data-toggle="tooltips"]').tooltip({trigger: 'manual'}).tooltip('show');
		});  
	}

	/* 2.2 skills bar widths*/

	function progress_bar_width() {	
		jQuery( window ).on('scroll', function() {   
		  jQuery(".progress-bar").each(function(){
			progress_bar_width = jQuery(this).attr('aria-valuenow');
			jQuery(this).width(progress_bar_width + '%');
		  });
		}); 
	}

  //________graph images moving function by = jquery.bgscroll.js	________//	
	function bg_moving(){
		jQuery( function() {			  
		jQuery('.bg-moving').bgscroll({scrollSpeed:100 , direction:'h' });
		});
	}

  // > masonry function function by = isotope.pkgd.min.js ========================= //	
function masonryBox() {
  if ( jQuery().isotope ) {      
      var $container = jQuery('.portfolio-wrap');
          $container.isotope({
              itemSelector: '.masonry-item',
              transitionDuration: '1s',
    originLeft: true,
    stamp: '.stamp',
          });

      jQuery('.masonry-filter li').on('click',function() {                           
          var selector = jQuery(this).find("a").attr('data-filter');
          jQuery('.masonry-filter li').removeClass('active');
          jQuery(this).addClass('active');
          $container.isotope({ filter: selector });
          return false;
      });
};
}

//________Nav submenu show hide on mobile by = custom.js________//	
function mobile_nav(){
  jQuery(".sub-menu").parent('li').addClass('has-child');
  jQuery(".mega-menu").parent('li').addClass('has-child');
  jQuery('.submenu-toogle').remove();
  jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");
  
  jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {
    jQuery(this).next(jQuery('.sub-menu')).slideToggle('fast', function(){
      jQuery(this).parent().toggleClass('nav-active');
    });
    ev.stopPropagation();
  });
}
	

    /*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
		magnific_popup();

    //________masonry function function by = isotope.pkgd.min.js________//			
    masonryBox();

    progress_bar_tooltips();
				
		progress_bar_width();

    bg_moving();

    mobile_nav();

    scroll_top();

    Get_in_touch();
	
	page_loader();
	
	contactForm();
});

})(window.jQuery);

/*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
jQuery(window).on('load', function () {
  //________masonry function function by = isotope.pkgd.min.js________//			
  masonryBox();
  // > page loader function by = custom.js		
  page_loader();

  
  //________background image parallax function by = stellar.js	________//	
  bg_image_stellar();
  // > page loader function by = custom.js
});

// > page loader function by = custom.js ========================= //		
function page_loader() {
  jQuery('.loading-area').fadeOut(1000);
}

// > masonry function function by = isotope.pkgd.min.js ========================= //	
function masonryBox() {
  if ( jQuery().isotope ) {      
      var $container = jQuery('.portfolio-wrap');
          $container.isotope({
              itemSelector: '.masonry-item',
              transitionDuration: '1s',
    originLeft: true,
    stamp: '.stamp',
          });

      jQuery('.masonry-filter li').on('click',function() {                           
          var selector = jQuery(this).find("a").attr('data-filter');
          jQuery('.masonry-filter li').removeClass('active');
          jQuery(this).addClass('active');
          $container.isotope({ filter: selector });
          return false;
      });
};
}

//________background image parallax function by = stellar.js ________//		
	function bg_image_stellar(){
		jQuery(function(){
				jQuery.stellar({
					horizontalScrolling: false,
					verticalOffset:100
				});
			});			
	}