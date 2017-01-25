$(document).ready(function (){
			$("#toAbout").click(function (){
				$('html, body').animate({
					scrollTop: $("#home").offset().top
				}, 1000);
			});
			
			$("#toProjects").click(function (){
                $('html, body').animate({
                    scrollTop: $("#projects").offset().top - 40
                }, 1000);
            });
			
			$("#toContact").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 1000);
            });
        });