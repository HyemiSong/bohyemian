
$(document).ready(function() {

   $('.title-btn').hide();

    //header animation
    $(window).on("scroll", function() {
            if($(window).scrollTop() > 430) {
                $(".bgcolor").addClass("active");
                $('.site-header').css({'position':'fixed', 'top':'0'});
                $('.title-btn').show();
                
            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $(".bgcolor").removeClass("active");
                $('.site-header').css({'position':'relative', 'top':'430px'});
                $('.title-btn').hide();

                $('.nav-logo').css({'opacity':'1'});
                $('.nav-logo img').css({'opacity':'1'});
                $('.nav-logo span').css({'opacity':'1'});
            }
        });


    $('.clip-circle').click(function() {
            var js_href = document.querySelector('#about_me').href
    })

    $('.data-box')
        .mouseover(function(){
        $('.index').html('Data')
        })
        .mouseout(function(){
        $('.index').html('Index')
        })
    $('.ux-box')
        .mouseover(function(){
        $('.index').html('UX/UI Design')
        })
        .mouseout(function(){
        $('.index').html('Index')
        })    
    $('.graphic-box')
        .mouseover(function(){
        $('.index').html('Graphic Design')
        })
        .mouseout(function(){
        $('.index').html('Index')
        })
    $('.etc-box')
        .mouseover(function(){
        $('.index').html('Uncategorized')
        })
        .mouseout(function(){
        $('.index').html('Index')
        })
    $('.text-box')
        .mouseover(function(){
        $('.index').html('Article')
        })
        .mouseout(function(){
        $('.index').html('Index')
        })

    // $('.thumb-left-top').hide();
    // $('.thumb-right-top').hide();

    // $('.clip-circle').mouseover(function() {

    //         $('.thumb-left-top').show();
      
    // })


    var $elem1 = $('.description-left');
    var $elem2 = $('.thumb-left');
    // var $elem3 = $('.press-right');

    $('._nav-item:nth-child(1)').click(
        function (e) {
            $('html, body').animate({scrollTop:  "500px"}, 600);
        }
    );

    $('._nav-item:nth-child(2)').click(
        function (e) {
            $('html, body').animate({scrollTop:  "1400px"}, 600);
        }
    );

    $('._nav-item:nth-child(3)').click(
        function (e) {
            $('html, body').animate({scrollTop:  "2950px"}, 600);
        }
    );


    var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }

            setTimeout(function() {
            that.tick();
            }, delta);
        };

        var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.02em solid #fff; height: -20px; padding-right: 10px;}";
            document.body.appendChild(css);


        // window.onload = function() {
            
        // };

})
