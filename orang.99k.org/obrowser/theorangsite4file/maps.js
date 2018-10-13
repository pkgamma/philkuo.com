submitted = false;
global_markers = new Array;
global_locations = new Array;

function addStore(a, c, e) {
	var d = new GIcon(G_DEFAULT_ICON);
	d.image = "http://images.apple.com/retail/images/icons/letter_a-black.png";
	d.iconSize = new GSize(21, 35);
	d.iconAnchor = new GPoint(6, 21);
	d.infoWindowAnchor = new GPoint(9, 5);
	var b = new GMarker(a, d);
	b.tabContent = new Object();
	b.tabContent.address = '<div class="vcard"><div class="hcard"><h3 class="fn n org">' + unescape(c.getAttribute("name")) + "</h3>";
	b.tabContent.address = b.tabContent.address + '<span class="adr"><span class="street-address">' + c.getAttribute("address") + '</span><span class="locality">' + c.getAttribute("city") + '</span>, <span class="region">' + c.getAttribute("state") + '</span> <span class="postal-code">' + c.getAttribute("zip") + '</span></span><span class="tel">' + c.getAttribute("phone") + "</span></div></div>";
	b.tabContent.address = b.tabContent.address + "<p class='get_directions'><a href=\"#\" onclick=\"$('directions_subtab').style.display = 'block';$('gmap-directions').style.display = 'none';position_window($('overlay'), $('overlay').marker);$('to_addr').focus(); return false;\" id=\"gmap-directions\">Get driving directions</a></p>";
	b.tabContent.address = b.tabContent.address + "<p id='directions_subtab' style='display:none'>Starting address:<br ><input id='to_addr' type='text' style='width:95%'><br ><button type='submit' class='cancel' onclick=\"$('directions_subtab').style.display = 'none';$('gmap-directions').style.display = 'inline';position_window($('overlay'), $('overlay').marker);\">Cancel</button><button type='submit' class='directions' onclick=\"submit_gmap_form($('to_addr').value,'" + c.getAttribute("address") + " , " + c.getAttribute("city") + ", " + c.getAttribute("state") + " " + c.getAttribute("zip") + "');\">Get Directions</button></p>";
	//b.tabContent.services = "<p>" + c.getElementsByTagName("services")[0].firstChild.nodeValue + "</p>";
	b.internal_id = e;
	GEvent.addListener(b, "click_action", function () {
		show_custom_info_window(b)
	});
	GEvent.addListener(b, "click", function () {
		_activate_marker(global_markers[b.internal_id])
	});
	global_markers[e] = b;
	return b
}
first_load = true;
map = false;

function load_map(a, b) {
	if (GBrowserIsCompatible()) {
		Element.show("gmap", "map_legend");
		map = new GMap2(document.getElementById("map"));
		map.addControl(new GSmallMapControl());
		map.addControl(new GScaleControl());
		(function () {
			var e = GXml.parse(a);
			if (e.getElementsByTagName("store_xml").length > 0) {
				var k = e.documentElement.getElementsByTagName("default_location")[0];
				map.setCenter(new GLatLng(k.getAttribute("lat"), k.getAttribute("lng")));
				var j = e.documentElement.getElementsByTagName("store");
				var g = new GLatLngBounds;
				if (j.length <= 8 || (b + 8) >= j.length) {
					end = j.length
				} else {
					end = b + 8
				}
				var h = 0;
				for (var f = b; f < end; f++) {
					var c = new GLatLng(parseFloat(j[f].getAttribute("lat")), parseFloat(j[f].getAttribute("lng")));
					var d = addStore(c, j[f], h++);
					map.addOverlay(d);
					if (f === 0) {
						show_custom_info_window(d)
					}
					g.extend(c)
				}
				map.setCenter(new GLatLng((g.getSouthWest().lat() + g.getNorthEast().lat()) / 2, (g.getSouthWest().lng() + g.getNorthEast().lng()) / 2));
				map.setZoom(15)
			}
			submitted = false
		})()
	} else {}
}
function load_map_initial() {
	first_load = false;
	if (GBrowserIsCompatible()) {
		Element.show("gmap", "map_legend");
		map = new GMap2(document.getElementById("map"));
		map.addControl(new GLargeMapControl());
		map.addControl(new GScaleControl());
		map.setCenter(new GLatLng(37.926868, -97.294922));
		map.setZoom(3)
	}
}
Event.observe(window, "unload", GUnload, false);
selected_location = false;

function highlight_locations() {
	var a = $("results_list").getElementsByTagName("li");
	for (i = 0; i < a.length; i++) {
		var b = a[i];
		b.onmouseover = function () {
			Element.addClassName(this, "hover")
		};
		b.onmouseout = function () {
			Element.removeClassName(this, "hover")
		};
		b.onclick = function () {
			activate_marker(this)
		}
	}
}
function _activate_marker(a) {
	GEvent.trigger(a, "click_action")
}
function activate_marker(a) {
	if (selected_location == a) {
		return false
	}
	Element.addClassName(a, "selected");
	GEvent.trigger(global_markers[a.internal_id], "click_action");
	if (selected_location) {
		Element.removeClassName(selected_location, "selected")
	}
	selected_location = a
}
function deactivate_marker(a) {
	Element.removeClassName(a, "selected");
	selected_location = false
}
function change_tab(c, d) {
	var a = $("overlay");
	var f = $("overlay_tab");
	var e = a.getElementsByTagName("ul")[0];
	var b = c.parentNode.parentNode.getElementsByTagName("a");
	for (i = 0; i < b.length; i++) {
		tab = b[i];
		Element.removeClassName(tab, "selected")
	}
	Element.addClassName(c, "selected");
	if (d == "services") {
		Element.removeClassName(e, "tabs");
		Element.addClassName(e, "tabs2");
		//f.innerHTML = a.marker.tabContent.services
	} else {
		Element.removeClassName(e, "tabs2");
		Element.addClassName(e, "tabs");
		f.innerHTML = a.marker.tabContent.address
	}
	position_window(a, a.marker);
	return false
}
function close_window() {
	$("overlay").style.display = "none";
	deactivate_marker($("location_" + $("overlay").marker.internal_id));
	return false
}
function show_custom_info_window(b) {
	map_point = map.fromLatLngToDivPixel(b.getPoint());
	if (!$("overlay")) {
		var f = document.createElement("div");
		f.style.display = "none";
		f.innerHTML = $("overlay_temp").innerHTML;
		f.getElementsByTagName("div")[0].id = "overlay_tab";
		f.id = "overlay";
		document.body.appendChild(f)
	}
	var a = $("overlay");
	a.marker = b;
	var d = a.getElementsByTagName("ul")[0];
	Element.removeClassName(d, "tabs2");
	Element.addClassName(d, "tabs");
	var c = d.getElementsByTagName("a");
	for (i = 0; i < c.length;
	i++) {
		tab = c[i];
		Element.removeClassName(tab, "selected")
	}
	Element.addClassName(c[0], "selected");
	var e = $("overlay_tab");
	e.innerHTML = b.tabContent.address;
	map.getPane(G_MAP_MARKER_PANE).appendChild(a);
	a.style.display = "block";
	position_window(a, b)
}
function position_window(c, b) {
	var a = parseInt(map_point.y) - c.offsetHeight - 15;
	c.style.top = a + "px";
	var d = parseInt(map_point.x) - 50;
	c.style.left = d + "px";
	var e = new GLatLng(b.getPoint().lat(), b.getPoint().lng());
	map.panTo(e)
}
function submit_gmap_form(a, c) {
	var b = "from: " + a + " to: " + c;
	$("gmaps_form_query").value = b;
	$("gmaps_form").submit();
	return false
};