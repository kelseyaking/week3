var counter;

$(document).on('pagecreate','#first_page', function() {
//     alert('Pagecreate fired');
});

$(document).on('pageinit','#first_page',function() {
     counter = 1;
});

$(document).on('pagebeforeshow','#first_page',function(event, ui)
{
	if (counter >1){
		$('#pageonetextline').append(' and forth');
	}
});
$(document).on('pageshow','#first_page',function(event, ui)
{
	alert('Pageshow fired and counter is ' + counter);
	counter = counter + 1;
});
$(document).on('pagebeforehide','#first_page',function(event, ui)
{
//	alert('Pagebeforehide fired');
});
$(document).on('pagehide','#first_page',function(event, ui)
{
	$('#pageonetextline').append(' and back');
});