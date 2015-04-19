/**
 * Created by esra on 19/04/15.
 */

/* Singleton with Private Members, step 3. */
MyNamespace.Singleton = (function() {
    // Private members.
    var privateAttribute1 = false;
    var privateAttribute2 = [1, 2, 3];
    function privateMethod1() {

    }
    function privateMethod2(args) {
    }
    return { // Public members.
        publicAttribute1: true,
        publicAttribute2: 10,
        publicMethod1: function() {

        },

        publicMethod2: function(args) {

        } };
})();