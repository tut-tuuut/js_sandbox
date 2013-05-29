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
