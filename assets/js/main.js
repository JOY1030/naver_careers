$(function(){
    /**
     * nav
     * 
     */


    $('.header .gnb-item').hover(function() {
      child = $(this).find('.sub-list')
      if($(this).find('.sub-list').length > 0){
        $('.gnb-list').addClass('active');
        child.addClass('active');
      }
    }, function(){
      $('.gnb-list').removeClass('active');
      child.removeClass('active');
    
    });

    $('.header .side-title .teams').click(function(e){
      e.preventDefault();
      $(this).siblings('.side-list').slideToggle();
      $(this).toggleClass('open');
  })


    $('.search1 .select-box').change(function(){
      $(this).css('color','#000')
    })

    /** search-m */
    $('.search2').click(function(){
      $('.select-area').addClass('open');
    })
    $('.select-area .btn-close').click(function(){
      $('.select-area').removeClass('open');
    })

    $('.select-item .btn-job').click(function(){
      $(this).siblings('.select-item .sub-list').slideToggle();
      $(this).toggleClass('open');
      
    })

    $('.sub-item .btn-tree').click(function(){
      $(this).siblings('.select-item .item-list').slideToggle();
      $(this).toggleClass('open');

    })


    $('.sub-item .select-all').click(function(){
      if ($(this).siblings('input').prop('checked')){
        $(this).parents('.sub-list').find('.item input').prop('checked',false);
      } else {
        $(this).parents('.sub-list').find('.item input').prop('checked',true);
      }
    })

    $('.btn-clear').click(function(){
      $('.select-box input').prop('checked',false);
    })


    /**사이드 바 */
    $('.btn-menu').click(function(){
      $('.header .side-nav, .btn-menu').toggleClass('active');
    })
    $('.util-list .lang-item .lang-link1').click(function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).siblings().toggleClass('active')
    })
    
    // 하나선택하면 하나 체크 빠지게 하기
    $('input[type="checkbox"][name="langcheck"]').click(function(){
      if($(this).prop('checked')){
 
        $('input[type="checkbox"][name="langcheck"]').prop('checked',false);
    
        $(this).prop('checked',true);
    
       } 
      });
  

    /**
        * 
        *sc-slide1
        */
            var swiper = new Swiper(".sc-slide .swiper", {
                loop:true,
                autoplay: {
                delay: 4000,
                disableOnInteraction: false,
                    },
                
            });
            /**
             * slide2
             */
            
             var swiper = new Swiper(".sc-people .swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
              grabCursor: true,
              navigation: {
                  nextEl: ".next",
                  prevEl: ".prev",
                },

                breakpoints:{
                  768:{
                    slidesPerView: 1.1,
                  },
                  
                }
            
                
            });
            /**
             * slide3
             */
            
             var swiper = new Swiper(".sc-benefits .swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
              grabCursor: true,
              navigation: {
                  nextEl: ".next",
                  prevEl: ".prev",
                },
            
            breakpoints:{
              768:{
                slidesPerView: 2,
              },
              1025:{
                slidesPerView: 3,
              }
            }

                
            });

            /**footer관련사이트
             * 
             */
            $('.site-now').click(function(){
              $('.site-list, .site-now').toggleClass('active');
            })
})
