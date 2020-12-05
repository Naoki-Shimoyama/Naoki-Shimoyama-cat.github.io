$(function(){

  $('.faq-list-item').click(function() {
      var $answer = $(this).find('.answer');
      if($answer.hasClass('open')) { 
        $answer.removeClass('open');
        // slideUpメソッドを用いて、$answerを隠してください
        $answer.slideUp();
  
        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
        $(this).find('span').text('+');
        
      } else {
        $answer.addClass('open'); 
        // slideDownメソッドを用いて、$answerを表示してください
        $answer.slideDown();
        
        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
        $(this).find('span').text('-');
      }
      });
          
        $(window).scroll(function(){
          var pos = $(window).scrollTop();
         
          if(200 < pos){
            $('#to-pagetop').fadeIn('slow');
          }else{
            $('#to-pagetop').fadeOut('slow');
          }
         });
     
         $('#to-pagetop a').click(function(){
           $('html, body').animate({scrollTop:0}, 'fast');
         });
     
         $('#fadein-text').hover(function(){
           $('#fadein').fadeIn();
         },
         function(){
           $('#fadein').fadeOut();
         });
     
         $(function() {
          　$('.hamburger').click(function() {
          　　$(this).toggleClass('active');
          
          　if ($(this).hasClass('active')) {
          　　$('.NavMenu').addClass('active');　 //クラスを付与
          　} else {
          　　$('.NavMenu').removeClass('active'); //クラスを外す
          　}
          　});
          });

          
});