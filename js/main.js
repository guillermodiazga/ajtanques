
//Footer
	/*var x=0;
	onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	  	
	  	//celular
	  	if ($(window).width()<800) {
		  $("footer p").css({'position':'relative'});
		  //$("#vaca").fadeOut();
		  $("nav").css({'position':'relative',left:'0px'});

	  	} 

	  	//pc
	  	if (scrollTop < 20 && $(window).width()>800) {
		  	$("footer p").css({'position':'fixed'});
            //$("#vaca").fadeIn();
            $("nav").css({'position':'relative',left:'0px'});
	  	}else if ($(window).width()>800){
	  		$("footer p").css({'position':'relative'});
	  		// $("#vaca").fadeOut();
	  		 $("nav").css({'position':'fixed',left:'0px'});
	  	}
		
		$('html, body').animate({scrollTop: 0},300);


	}	
	*/


$(document).ready( function(){

//save visit:
$.ajax("log-visitas.php");
	
//Scroll
	$('body').after('<a class="go-top" href="#">Subir</a>');


    // Show or hide the sticky footer button

    $(window).scroll(function() {
	//boton de subir
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	//fijar menu
		if ($(this).scrollTop() < 20 && $(window).width()>800) {
		  	$("footer p").css({'position':'fixed'});
            $("nav").css({'position':'relative',left:'0px'});
	  	}else if ($(window).width()>800){
	  		$("footer p").css({'position':'relative'});
	  		 $("nav").css({'position':'fixed',left:'0px'});
	  	}
    });


// Animate the scroll to top

    $('.go-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
    })



//pestaña de admin
	var sw_open=0;
	$("#admin img").on("click",function(){
		if(!sw_open){
			$(this).parent().animate({ right: '0px'});
			this.src="img/arrow_right.png";
			sw_open=1;
		}else{
			$(this).parent().animate({ right: (($(this).parent().width()-($(this).width()*1.5))*-1)});
			this.src="img/arrow_left.png";
			sw_open=0;
		}
	});

	
//login	
	$("#frmLogin").submit(function(e){
		e.preventDefault();
		
		$("#cargando").fadeIn().text("Login...");
		
		$.ajax({
			url : "login.php?",
			async : true, 
			success : function(result) {
				if(result){
					$('#admin').append(result);
                    $("#frmLogin").hide();
					$("#cargando").fadeOut();
					setEditar();
				}else{
					alert("Usuario no existe!");
				}
			},
			error : function(xhr) {
				alert("status : " + xhr.status);
			}
		});

	});
    
    function setEditar(){
            //editor
        $(".editable").before('<button id="editar">Editar</button>');

        $("#editar").click(function(){
            var texto = $(this).siblings(".editable").html();
            $(this).after('<textarea id="textArea" cols="30" rows="10">'+texto+'</textarea>');
            $("#textArea").jqte();
            $(this).siblings(".editable").hide();
            $(this).before('<button id="guardar">Guardar</button>');
            $(this).hide();

            $("#guardar").click(function(){
                var texto=$("#textArea").val();
                $("#textArea").remove();
                $("#editar").show();
                $(this).siblings(".editable").html(texto);
                $(this).siblings(".editable").show();
                $(".jqte").remove();
                $(this).remove();

            });

        });

    //guardar
    }

//alert Personalizado
	window.alert = function (text) {
		$("#dvMsgText").text(text);

		y=($(window).height()-$("#dvMsg").height())/2;
		x=($(window).width()-$("#dvMsg").width())/2;

		$("#dvMsg").css({'top':y,'left':x});

		$("#dvMsg").show();
		$("#cargando").show().text("");

		$("#closeMsg").click(function(){
			$("#dvMsg").fadeOut(100);
			$("#cargando").fadeOut(100);
		});

	}
	
//Navegacion
    

    var currentPage=location.href.split( '#' );
    currentPage=currentPage[1];

    if(currentPage){
        var ar = currentPage.split("M");
        currentPage=ar[1];
    }

    if(!currentPage)
        localStorage.page='inicio';
    else
        localStorage.page=currentPage;

    if(!localStorage.page)
        localStorage.page='inicio';

    $("#"+localStorage.page).show();
    $("#M"+localStorage.page).addClass("active");
	
    
    
//Menu
    $("#cssmenu ul li").on("click",function(e){
    	e.preventDefault();
        window.history.pushState("", "", $(this).children('a').attr("href"));
    	$(".articulo").hide();
    	var idMostrar=this.id;

    	var ar = idMostrar.split("M");
    	$("#"+ar[1]).fadeIn(200);
        localStorage.page=ar[1];
    	$("#cssmenu ul li").removeClass("active");
    	$(this).addClass("active");
    });
    
//Menu responsive
    $('#cssmenu').prepend('<div id="menu-button">Menu</div>');
    $('#cssmenu #menu-button').on('click', function(){

      var menu = $(this).next('ul');
      if (menu.css('display')=='none') {
        menu.slideDown();
      } else {
        menu.slideUp();
      }
    });

    //Cerrar el menu luego seleccionar alguna opcion
    $('#cssmenu ul li').on('click', function(){
        if($(window).width()<800){
            $("#cssmenu ul").slideUp();
        }
    });

    $(window).resize(function(){
        var menu=$("#cssmenu ul");
        if($(window).width()<800){
            menu.hide();
            //$("#vaca").fadeOut();
        }else{
             menu.show();
        }
    });

//Galeria
    var images=Array();
    images=Array();
    images[0]=Array();
	images[1]=Array();
	images[2]=Array();
	images[3]=Array();
	images[4]=Array();
    images[0]["src"]="img/industria_lactea.jpg";
    images[1]["src"]="img/centro_recria2.jpg";
    images[2]["src"]="img/SAM_5169.JPG";
    images[3]["src"]="img/variedad.png";
    images[4]["src"]="img/Personal 1.png";

    images[0]["desc"]="<strong>Calidad: </strong>Especializados en la industria lactea.";
    images[1]["desc"]="<strong>Atención: </strong>Personalizada de acuerdo a sus necesidades.";
    images[2]["desc"]="<strong>Los Mejores Diseños!: </strong>El sistema de refrigeración mas veloz del mercado .";
    images[3]["desc"]="Variedad de productos y servicios";
    images[4]["desc"]="<strong>Personal: </strong>Altamente Calificado.";

    var cantImages=images.length;
    	

     for (var i = 0; i < images.length; i++) {
    	$("#galeria").append("<img class='zoom' id='image"+i+"' src='"+images[i]['src']+"' />"+
    		"<figcaption id='caption"+i+"''>"+images[i]['desc']+"</figcaption>");
    	
    };

    $("#galeria img").hide();
    $("#galeria figcaption").hide();

    var idx=0;
    cambiarImgGaleria(idx);
    var loopGaleria;
    function cambiarImgGaleria(){
    	if(idx>=cantImages || idx<0)
    		idx=0;
        $("#galeria img").fadeOut();
        $("#galeria figcaption").hide();
    	$("#image"+idx).fadeIn();
    	$("#caption"+idx).show();

    	loopGaleria=setTimeout(function () {
			$("#image"+idx).fadeOut();
			$("#caption"+idx).hide();
			cambiarImgGaleria(idx++);
    	},5000);
	}

	$("#galeria #pause").on("click",function(){
        window.clearTimeout(loopGaleria);
        $("#galeria #pause").hide();
		$("#galeria #play").show();

	});

	$("#galeria #play").on("click",function(){
		cambiarImgGaleria(idx++);
		$("#galeria #pause").show();
		$("#galeria #play").hide();
	});	
    
    $("#controlesNB #next").on("click",function(){
        window.clearTimeout(loopGaleria);
		cambiarImgGaleria(idx++);
		$("#galeria #pause").show();
		$("#galeria #play").hide();
	});	
    
    $("#controlesNB #back").on("click",function(){
        window.clearTimeout(loopGaleria);
		cambiarImgGaleria(idx--);
		$("#galeria #pause").show();
		$("#galeria #play").hide();

	});	
	
	//vaca
	

    var mujido = new Audio("sounds/COW2.mp3");

    //$("#vaca").show(1000,function(){vacaMuje()});

	$("#vaca").on("mouseover", function(){
		vacaMuje();
	});

    $("#vaca").on("click", function(){
    	mujido.play();
       $(this).hide(1000);
    });
	function vacaMuje (){
		var hoy = new Date();
		hoy=hoy.getDay()+"/"+hoy.getMonth()+"/"+hoy.getFullYear();
		
		if(!localStorage.getItem("fchaVacaMuje"))
			localStorage.setItem("fchaVacaMuje",hoy);

		if(localStorage.getItem("fchaVacaMuje")!=hoy){
			localStorage.setItem("fchaVacaMuje",hoy);
			//mujido.play();
		}

	}
    //Productos 

    
    // $(".mostrarOcular").append(" [Ver mas]");
    var swRadius=0;
    $(".mostrarOcular").on("click",function(){

        if($(this).next().css('display')=="none")
        	$(this).css({'border-radius' : '25px 25px 0px 0px'});
    	else
	    	$(this).css({'border-radius' : '20px'});
        	

        $(this).next().slideToggle(500);
    });

//Zoom a imagenes  
    var imageZoom;
    $(".zoom").click(function(){
        imageZoom=$(this);
        $(".msgImage").remove();
        var div=$("#cargando");
        div.fadeIn(100);
        var altoVentana=$(window).height()*0.9;
        $(".msgImage").remove();
        div.html("<div class='cerrar'></div><img id='zoom' height='"+altoVentana+"' style='position: absolute;top:5% ' src='"+this.src+"'>");
        $(".cerrar").click(function(){
           $("#cargando").fadeOut(100);
        });
        $('#zoom').css('left',($(window).width()-($('#zoom').width()))/2);
        $('#zoom').click(function(){
            //$(this).parent().hide();
             var imageZoomA=imageZoom.next("img");
            $(this).attr("src",imageZoom.next("img").attr("src"));
            imageZoom=imageZoomA;
        })
    });
    
    //$("#zoom").attr("src",imageZoom.next("img").attr("src"));
    
     $(".zoom").on("mouseenter",function(){
        var imagen=$(this);
         $(".msgImage").remove();
        imagen.before("<span class='msgImage'></span>");
         
         $(".msgImage").click(function(){
           $(this).siblings('.zoom').trigger('click');                      
        });
     });
    
    
    
    //Tecla Escape
    $(document).bind('keydown',function(e){
         if ( e.which == 27 ) {
            $("#cargando").fadeOut(100);
         }
    });
	
	
/*envio Mail*/

	$("#contactoMail").submit(function(event){
		event.preventDefault();
		var datos=$("#contactoMail").serialize();

		$.post(
			'mail.php',
			datos,
			"text"
		).done(function( msg ) {
			$("#contactoMail").reset();
			alert("Mensaje Enviado!");
		}).fail(function( jqXHR, textStatus ) {
		  alert( "Request failed: " + textStatus );
		});

	});

	jQuery.fn.reset = function () {
	  $(this).each (function() { this.reset(); });
	}
    
//manejo de errores
	window.onerror =function(e, fileName, lineNumber){
		alert("Error: "+e+"\nFile: "+fileName+"\nLine: "+lineNumber);
	}
    
	
//Quitar div Cargando
	$("#cargando img").animate({opacity:'0.8'},'slow');
    $("#cargando").slideUp(1500,function(){
		 $("#cargando").css({'background-color':"rgba(0 ,0 ,0, 0.8)"})
		$(window).scrollTop(0);
	});
	
	
	

});



//------------------------------------------------------------Pruebas


//Notacion Clasica objeto de unica instancia
var objPruebaClase = new (function(){//Objeto autoinstanciado
    
    //Variables Publicas
    this.propiedadPublica="x";

    //variables privadas
    var propiedadPrivada="name";

    //metodo Publico
    this.metodoPublico=function(){

        metodoPrivado.call(this);//Metodo privado que tendra acceso a propiedades publicas del objeto
    };

    //metodo Privado
    var metodoPrivado=function(){
        this.propiedadPublica="y";//Acceso a variable publica del objeto
        console.log(this.propiedadPublica);
    };

})();

//Notacion JSON

var objPruebaClase2={
    propiedadPublica:"x",
    metodoPublico:function(){
         console.log(this.propiedadPublica);
         return true;
    },
    metodoPrivado:function(){
         console.log(this.propiedadPublica);
         return true;
    }
}







//alert.hola();
