var myfunctiononclick = function() {
    Element.show('showme');
}

$('observed').observe('click', function() {
    Element.show('showme');
});
$('observed').observe('tap', function() {
    Element.show('showme');
});
$('observed').observe('touchdown', function() {
    Element.show('showme');
});
$('obs_touchstart').observe('touchstart', function() {
    Element.show('showme');
});
$('obs_touchend').observe('touchend', function() {
    Element.show('showme');
});