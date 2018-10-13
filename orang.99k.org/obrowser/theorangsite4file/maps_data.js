Event.observe(window, 'load', function() {
	var store_xml = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><store_xml><default_location lat="37.782829" lng="-122.403281" city="Santa Clara" state="CA"/><store name="Moscone Center" address="826 Howard Street" city="San Francisco" state="CA" zip="94103" phone="(415) 974-1699" lat="37.782829" lng="-122.403281" url="http://www.moscone.com"></store></store_xml>';
	load_map(store_xml, 0);
});
