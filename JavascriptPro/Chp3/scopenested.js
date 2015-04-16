/**
 * Created by esra on 16/04/15.
 */

function foo() {
    var a = 10;
    function bar() {
        a *= 2;
        return a; }
    return bar;
}

var baz = foo(); // baz is now a reference to function bar.
baz(); // returns 20.
baz(); // returns 40.
baz(); // returns 80.

var baz = foo(); // baz is now a reference to function bar.
baz(); // returns 20.
baz(); // returns 40.
baz(); // returns 80.
