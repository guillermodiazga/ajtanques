$(document).ready(function(){
    
	$("#nave").click(function(){
	   
        $(this).animate({left:'150%',width:'30%'},2500);
		$("#estrellas").animate({opacity:'0.7'},3000);
		$("#edificios img").animate({width:'400%'},1500);
		$("#saturno img").animate({width:'-50%'},500);
        		
		$(this).css({"transform": "rotate(30deg)"});
		$('#fondo').animate({scrollLeft: '1000'}, 2000,"swing",function(){
			$("#nave").css({"transform": "rotate(-25deg)"});
			setTimeout(function(){
                        $("#nave").css({"transform": "rotate(-50deg)"});
            },500);
            
			$("#nave").animate({top:'75%'},2000);
            
            setTimeout(function(){
                $("#base").text("Llegamos, nos salvamos!");
                $("#base").slideDown();
            },3000);
        });
        
        $("#estrellas").animate({opacity:'0.9'},3000);

        setTimeout(function(){
             $("#luna").animate({opacity:'1'},6000);
            $("#estrellas").animate({opacity:'0.5'},5000);
        },3000);
        $("#luna img").animate({width:'60%'},2000);
        
        setTimeout(function(){
		  $('#fondo').animate({scrollLeft: '400'},3000);
          $("#police").show().animate({left:'120%'},5000);
          $("#police img").animate({width:"250"},5000);
            $("#base").slideUp();
        },6000);
        
        setTimeout(function(){
		  $('#fondo').animate({scrollLeft: '1000'},3000);
        },9000);
        
        setTimeout(function(){
        $("#base").css({left: '100%'});
         $("#base").text("No puede estacionar aqui!!");
        $("#base").slideDown();
        },9500);

	});//fin click
    
    $("#nave").after("<span class='elemento' id='cuentaReg'></span>");
    
    setTimeout(function(){
        $("#cuentaReg").text('3');
    },500);
    setTimeout(function(){
        $("#cuentaReg").text('2');
    },1000);
    setTimeout(function(){
        $("#cuentaReg").text('1');
    },1500);
    setTimeout(function(){
        $("#cuentaReg").slideUp(500);
    },2000);
    
    setTimeout(function(){
        $("#nave").trigger('click');
    },2500);
    
});