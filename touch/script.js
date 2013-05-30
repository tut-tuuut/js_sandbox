var myfunctiononclick = function() {
    Element.show('showme');
}

var observer = function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    Element.show('showme');
    var href=this.href;
    var toto = function() {
        window.location = href;
    }
    setTimeout(toto, 2000);
};


$('observed').observe('click', observer);
$('obs_touchstart').observe('touchstart', observer);
$('obs_touchend').observe('touchend', observer);