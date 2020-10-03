//常見問題QA常用點開往下展開方式
$(function(){
    
	$('.op_top').click(function(){
		$('.op_top').removeClass('cur')
		$('.op_don').slideUp(500);
		$(this).addClass('cur')
		$(this).next('.op_don').stop(false,true).slideDown(800);
		return false;
	}).eq(0).click();

}); 


//頁籤
$(function(){
    $("a.tab").on("click", function(e){
      e.preventDefault();
      
      /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
      $(this).closest("ul").find("a.tab").removeClass("-on");
      $(this).addClass("-on");
      
      /* 找到對應的頁籤內容，加上 -on 來顯示 */
      $("div.tab").removeClass("-on");
      $("div.tab." + $(this).attr("data-target")).addClass("-on");
    });
  });
