$(document).ready(function() {
	// Deal with add button
	var addButton = $('#add');
	var addTextarea = $('#guests_new');
	var guestList = [];
	if (localStorage.getItem('guests')) {
		guestList = localStorage.getItem('guests').split(',');
	}
	addButton.bind('click', function() {
		var value = addTextarea.val();
		if (value !== '') {
			var arr = value.split(/\n/);
			for (var i=0; i<arr.length; i++) {
				var subarr = arr[i].split(' ');
				var firstname = subarr.shift();
				var lastname = subarr.join(' ');
				guestList.push(firstname + ' <b>' + lastname + '</b>');
			}
			saveGuestList();
			addTextarea.val('');
		}
	});

	function saveGuestList()
	{
		localStorage.setItem('guests', guestList);
	}
});