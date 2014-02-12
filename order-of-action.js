$(document).on("mobileinit", function() {
     alert('Mobileinit fired');
});

$(document).on('pagecreate','#first_page', function() {
      alert('Pagecreate fired');
});

$(document).on('pageinit','#first_page',function() {
      alert('Pageinit fired');
});

$(document).on('pageinit','#first_page',function() {
      alert('Pageinit fired');
});

$(document).on('pagebeforeshow','#first_page',function(event, ui)
{
	alert('Pagebeforeshow fired');
});
$(document).on('pageshow','#first_page',function(event, ui)
{
	alert('Pageshow fired');
});
$(document).on('pagebeforehide','#first_page',function(event, ui)
{
	alert('Pagebeforehide fired');
});
$(document).on('pagehide','#first_page',function(event, ui)
{
	alert('page fired');
});