/**
 * Created by esra on 17/04/15.
 */

/* Clone function. */
function clone(object) {
    function F() {}
    F.prototype = object;
    return new F;
}