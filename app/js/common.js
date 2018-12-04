$(document).ready(function() {
	var inputPos = $('.autopark_content_main .positions_container .position .input-radio');
	inputPos.click(function() {
		var pos = $('.autopark_content_main .positions_container .position');
		var year = $(this).parent().data('year');
		var capa = $(this).parent().data('capacity');
		var trans = $(this).parent().data('trans');
		var title = $(this).next().find('.title').text();
		var info = $('.autopark_position_content');
		pos.removeClass('active');
		$(this).parent().addClass('active');
		info.find('.year').find('.value').text(year);
		info.find('.capa').find('.value').text(capa);
		info.find('.trans').find('.value').text(trans);
		info.find('.btn').find('.value').text(title);
	});
	$('.autopark_content_main .positions_container .position').first().find('.input-radio').trigger('click');

	var listLength = $('.rates_content_container .position:last-child .list li').length;
	console.log(listLength)
});