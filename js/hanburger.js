
// hamburger ， jQuery 版本：DOM 載入完成之後執行
$(function(){
  // 按鈕狀態的切換
  $("button.hamburger_icon").on("click", function(){
    $(this).toggleClass("-on");
    $('.navfont').slideToggle('1000').css('display','flex');
    $('.navicon').slideToggle('1000').css('display','flex');
  });
});
























