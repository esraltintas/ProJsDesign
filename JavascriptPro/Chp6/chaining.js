/**
 * Created by esra on 19/04/15.
 */

// Without chaining:
addEvent($('example'), 'click', function() {
    setStyle(this, 'color', 'green');
    show(this);
});
// With chaining:
$('example').addEvent('click', function() {
    $(this).setStyle('color', 'green').show();
});

function $() {
    var elements = [];
    for (var i = 0, len = arguments.length; i < len; ++i) {
        var element = arguments[i];
        if (typeof element === 'string') {
            element = document.getElementById(element);
        }
        if (arguments.length === 1) {
            return element;
        }
        elements.push(element);
    }
    return elements;
}

(function() {
    // Use a private class.
    function _$(els) {
        this.elements = [];
        for (var i = 0, len = els.length; i < len; ++i) {
            var element = els[i];
            if (typeof element === 'string') {
                element = document.getElementById(element);
            }
            this.elements.push(element);
        }
    }
    // The public interface remains the same.
    window.$ = function() {
        return new _$(arguments);
    };
})();


