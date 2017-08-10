// alert('Bonjour Gilles!');

$("a.rs-btn").mouseenter(function(){
	$(this).addClass("change").delay(1000).queue(function(){
		$(this).removeClass("change").dequeue();
	});
	
});


function main() {
 $('.jumbotron').hide();
 $('.jumbotron').fadeIn(1000);
 $('.divsonia').on('hover',
function() {
 $(this).next().slideToggle(400);
 })
}

$(document).ready(main);