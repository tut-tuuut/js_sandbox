var myfunctiononclick = function() {
    Element.show('showme');
}

var observer = function(evt) {
    console.log(evt);
    console.log(this);
    evt.stopPropagation();
    evt.preventDefault();
    Element.show('showme');
    window.location = this.href;
};
$('observed').observe('click', observer);
$('obs_touchstart').observe('touchstart', observer);
$('obs_touchend').observe('touchend', observer);