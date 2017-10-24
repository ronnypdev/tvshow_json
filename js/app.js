$(function() {
    var url = '../data/data.json';

    $.getJSON(url, function(data) {

    	var htmlList = '<ul>';

    	$.each(data, function(i, show) {
    		htmlList += '<li>' + show.title;
    		htmlList += '<p>' + show.startTile + '</p>';
    		htmlList += '<p>' + show.description + '</p>';
            htmlList += '<p>' + show.genres + '</p></li>';
    	});
        
    	htmlList += '</ul>';
    	$('#linklist').html(htmlList);
    });
});