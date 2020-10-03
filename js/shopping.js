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



// hamburger
$(function(){
  // 按鈕狀態的切換
  $("button.hamburger_icon").on("click", function(){
    $(this).toggleClass("-on");
    $('.navfont').slideToggle('1000').css('display','flex');
    $('.navicon').slideToggle('1000').css('display','flex');
  });
});


/*1*/
$(document).ready(function(){
  $(function(){ $('#lk1').click(function(){ 
      $('html,body').animate({scrollTop:$('#lk1text1').offset().top-120}, 1000);
      $(this).css('color','#0a457f').css('background-color','#afeeee');
      $('#lk2,#lk3,#lk4,#lk5,#lk6').css('color','black').css('background-color','white');
      });  
  }); 
});

/*2*/
$(document).ready(function(){
  $(function(){ $('#lk2').click(function(){ 
      $('html,body').animate({scrollTop:$('#lk1text2').offset().top-120}, 1000);
      $(this).css('color','#0a457f').css('background-color','#afeeee');
      $('#lk1,#lk3,#lk4,#lk5,#lk6').css('color','black').css('background-color','white');
      });  
  }); 
});

/*3*/
$(document).ready(function(){
  $(function(){ $('#lk3').click(function(){ 
      $('html,body').animate({scrollTop:$('#lk1text3').offset().top-120}, 1000); 
      $(this).css('color','#0a457f').css('background-color','#afeeee');
      $('#lk1,#lk2,#lk4,#lk5,#lk6').css('color','black').css('background-color','white');
      });  
  }); 
});

/*4*/
$(document).ready(function(){
  $(function(){ $('#lk4').click(function(){ 
      $('html,body').animate({scrollTop:$('#lk1text4').offset().top-120}, 1000);
      $(this).css('color','#0a457f').css('background-color','#afeeee'); 
      $('#lk1,#lk2,#lk3,#lk5,#lk6').css('color','black').css('background-color','white');
      });  
  }); 
});

/*5*/
$(document).ready(function(){
  $(function(){ $('#lk5').click(function(){ 
      $('html,body').animate({scrollTop:$('#lk1text5').offset().top-120}, 1000);
      $(this).css('color','#0a457f').css('background-color','#afeeee'); 
      $('#lk1,#lk2,#lk3,#lk4,#lk6').css('color','black').css('background-color','white');
      });  
  }); 
});

/*6*/
$(document).ready(function(){
  $(function(){ $('#lk6').click(function(){ 
      $('html,body').animate({scrollTop:$('#lk1text6').offset().top-120}, 1000);
      $(this).css('color','#0a457f').css('background-color','#afeeee'); 
      $('#lk1,#lk2,#lk3,#lk4,#lk5').css('color','black').css('background-color','white');
      });  
  }); 
});

$(document).ready(function(){
  $(function(){ $('#lk1,#lk2,#lk3,#lk4,#lk5,#lk6').blur(function(){ 
      $(this).css('color','black').css('background-color','white');
      });  
  }); 
});





