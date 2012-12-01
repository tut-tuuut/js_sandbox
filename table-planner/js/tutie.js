$(document).ready(function() {
	// Deal with add button
	var addButton = $('#add');
	var addTextarea = $('#guests_new');
	var guestList = [];
	if (localStorage.getItem('guests')) {
		guestList = localStorage.getItem('guests').split(',');
	}
	var guestPool = [];
	if (localStorage.guestPool) {
		guestPool = localStorage.guestPool.split(',');
	}

	var view = {};
	view.guestPool = $('#guestPool');
	var control = {};
	control.dropGuest = function(event, ui) {
		console.log('dropped');
	}


	updatePoolDisplay();

	addButton.bind('click', function() {
		var value = addTextarea.val();
		if (value !== '') {
			var arr = value.split(/\n/);
			for (var i=0; i<arr.length; i++) {
				var subarr = arr[i].split(' ');
				var firstname = subarr.shift();
				var lastname = subarr.join(' ');
				guestList.push(firstname + ' <b>' + lastname + '</b>');
				guestPool.push(guestList.length - 1);
			}
			saveGuestList();
			updatePoolDisplay();
			addTextarea.val('');
		}
	});

	function saveGuestList()
	{
		localStorage.setItem('guests', guestList);
		localStorage.setItem('guestPool', guestPool);
	}

	function updatePoolDisplay()
	{
		for(var i = 0; i<guestPool.length; i++) {
			var guestNumber = guestPool[i];
			console.log(guestNumber);
			var guestSelector = '#guest-' + guestNumber;
			if (!view.guestPool.children(guestSelector).length) {
				var viewGuest = $('<li id="guest-'+guestNumber+'">'+guestList[guestNumber]+'</li>');
				viewGuest.draggable({snap: ".table", stack: '.table > li', revert: true});
				view.guestPool.append(viewGuest);
			}
		}
	}


});