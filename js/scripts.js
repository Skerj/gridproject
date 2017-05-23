$(document).ready(function () {

	function newGrid() {
		var askGrid = prompt("Enter dimension for grid", 16);
		var b=askGrid;
		var c=b*b;
		for (var a=0; a<c; a++) {
			$('#container').append("<div class='box'></div>")
		}
		$('.box').on('mouseenter', function() {
				$(this).addClass('hover');
		});
	}

	$('#clearall').on('click', function() {
		$('.box').remove()
		$(newGrid)
	});

});

