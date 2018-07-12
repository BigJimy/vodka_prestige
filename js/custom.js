/* Show and hide menu */

$(document).ready(function(){
    
    'use strict';
    
    $(window).scroll(function() {
        'use strict'; 
        
        if($(window).scrollTop() < 80 ) {
            
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
            });
					
            $('.navbar-brand img').css({
                
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(255, 255, 255, 0)'
            });
            
        } else {
    
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(255, 255, 255, 0.95)',
                'border-color': '#444'
            });
            
            $('.navbar-brand img').css({
                'height': '35px',
                'padding-top': 'Opx',
								'display': 'block'
            });
            
            $('.navbar-nav > li > a').css({
                'padding-top': '15px'
            });
        }
        
    });
    
});

/* Add smooth scrolling */
$(document).ready(function() {
    
    'use strict';
    
    $('.nav-item, #scroll-to-top').click(function() {
        
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && location.hostname == this.hostname) {
            
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          } 
        }
      });
                  
});

/* Active menu item on click */
$(document).ready(function() {
    
    'use strict';
    
    $('.navbar-nav li a').click(function(){
        
        'use strict';
        
         $('.navbar-nav li a').parent().removeClass("active");
        
        $(this).parent().addClass("active");
    });
    
});

/* Highlight menu item on scroll */
$(document).ready(function() {
    
    'use strict';
    
    $(window).scroll(function() {
        
        'use strict';
        
        $('section').each(function() {
            
           'use strict';
            
            var bb = $(this).attr("id"); // ABOUT, CONTACT...
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
                
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
        });
        
    });
    
});

/* Add auto-padding to Header */
$(document).ready(function() {
    
    'user strict';
    
    setInterval( function() {
        
        'user strict';
        
        var windowHeight = $(window).height();
        var containerHeight = $(".header-container").height();
        var padTop = windowHeight - containerHeight;
        
        $(".header-container").css({
            
            'padding-top': Math.round( padTop / 2) + 'px',
            'padding-bottom': Math.round( padTop / 2) + 'px'
        });
    }, 10)
    
    
});

/* Add BX Slider to Screens */
$(document).ready(function() {
    
    $('.bxslider').bxSlider({
        
        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50
    
    });
    
});

/* Display age control form */
$(document).ready(function() {
    $('.majeur-btn').click(function(){
        'use strict';
			
        $('#age_control').css({
            'visibility': 'hidden',
        });
    });
});

/* Add Counter */
$(document).ready(function() {
      $('.counter-num').counterUp({
        delay: 10,
        time: 2000
    });  
});

/* Add Animation / Initialize WOW */
$(document).ready(function() { 
    
    'use strict';
    
    new WOW().init(); 
});