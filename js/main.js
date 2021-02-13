// 外部サイトは新しいページへ
$(function(){
  const website = window.location.hostname;
  const internalLinkRegex = new RegExp('^((((http:\\/\\/|https:\\/\\/)(www\\.)?)?'
  + website
  + ')|(localhost:\\d{4})|(\\/.*))(\\/.*)?$', '');
  $('a').filter(function() {
const href = $(this).attr('href');
  return !internalLinkRegex.test(href);
})
.each(function() {
  $(this).attr('target', '_blank');
  $(this).attr('rel', 'noopener');
  });
});


$(function(){
    $('a[href^="#"]').click(function() {
      // スクロールの速度
      const speed = 800; // ミリ秒で記述
      const href= $(this).attr("href");
      const target = $(href == "#" || href == "" ? 'html' : href);
      const position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
});

$('.animated').waypoint({
  handler(direction){
    // downの時専用
    if(this.element.classList.contains('welcome')){
      if(direction === 'down'){
      $(this.element).addClass('fadeInDown');
      }
    }
    else if(direction === 'down'){
      $(this.element).addClass('fadeInUp');
      $(this.element).removeClass('fadeOutDown');
    }
  },
  offset: '50%',
});
$('.animated').waypoint({
  handler(direction){
    // upの時専用
    if(direction === 'up'){
      $(this.element).addClass('fadeOutDown');
      $(this.element).removeClass('fadeInUp');
    }
  },
  offset: '70%',
});
$('.shine').waypoint({
  handler(direction){
    // upの時専用
    if(direction === 'down'){
      $(this.element).addClass('kira');
    }
  },
  offset: '60%',
});