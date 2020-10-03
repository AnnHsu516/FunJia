

// 按鈕收合
$(function(){
	// 按鈕狀態的切換
	$(".show").on("click", function(){
	$(this).toggleClass("-on");
	$('.op_don').slideToggle('1000');
	});
});



//LightBox
jQuery(document).ready(function ($) {

	var images = [];
   $( ".lightbox" ).each(function( index ) {
	   images.push($(this).attr('src'));
	 $(this).attr('id',index)
	 });
   //Function to open LightBox
   $(document).on('click','.lightbox',function(){open_lb($(this).attr('id'));});
  
   $(document).on('click','#AI_lightbox .next',function(){
	 if(parseInt($('#AI_lightbox img').attr('id')) < (images.length-1)){
	   open_lb(parseInt($('#AI_lightbox img').attr('id'))+1)
	 };
   });
   $(document).on('click','#AI_lightbox .prev',function(){
	 if(parseInt($('#AI_lightbox img').attr('id')) > 0){
	   open_lb(parseInt($('#AI_lightbox img').attr('id'))-1);
	 };
   });
   
  function open_lb(id){
	 $('body').append('<div id="AI_lightbox"><span class="close"><i class="material-icons">&#xE5CD;</i></span><img src="" alt="" /><span class="prev"><i class="material-icons">&#xE5CB;</i></span><span class="next"><i class="material-icons">&#xE5CC;</i></span></div>');
	 $('#AI_lightbox').css('display','block');
	 $('#AI_lightbox img').attr('id',id);
	 $('#AI_lightbox img').attr('src',$('#'+id).attr('src'));
	 $('#AI_lightbox').animate({opacity: 1});
  };
   
   //Function to close LightBox
   $(document).on('click','#AI_lightbox .close',function(){
	 $('#AI_lightbox').animate({opacity: 0}, 200, function() {
	   $('#AI_lightbox').css('display','none');
	   $('#AI_lightbox').remove();
	 });
   });
  });



  	


  