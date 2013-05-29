var myfunctiononclick = function() {
    alert('myfunctiononclick');
}

$('observed').observe('click', function() {
    alert('click');
});
$('observed').observe('tap', function() {
    alert('tap');
});
$('observed').observe('touchdown', function() {
    alert('touchdown');
});
