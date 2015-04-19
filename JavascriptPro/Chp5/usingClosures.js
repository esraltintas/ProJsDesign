/**
 * Created by esra on 19/04/15.
 */

/* Singleton as an Object Literal. */
MyNamespace.Singleton = {};
    /* Singleton with Private Members, step 1. */
    MyNamespace.Singleton = function() {
        return {};
    }();

/* Singleton with Private Members, step 1. */
MyNamespace.Singleton = (function() {
    return {};
})();

/* Singleton with Private Members, step 2. */
MyNamespace.Singleton = (function() {
    return { // Public members.
        publicAttribute1: true,
        publicAttribute2: 10,
        publicMethod1: function() {

        },
        publicMethod2: function(args) {

        } };
})();

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
            }
    }; })();

/* DataParser singleton, converts character delimited strings into arrays. */
/*   Now using true private methods. */
GiantCorp.DataParser = (function() {
    // Private attributes.
    var whitespaceRegex = /\s+/;
    // Private methods.
    function stripWhitespace(str) {
        return str.replace(whitespaceRegex, '');
    }
    function stringSplit(str, delimiter) {
        return str.split(delimiter);
    }
    // Everything returned in the object literal is public, but can access the
    // members in the closure created above.
    return {
        // Public method.
        stringToArray: function(str, delimiter, stripWS) {
            if(stripWS) {
                str = stripWhitespace(str);
            }
            var outputArray = stringSplit(str, delimiter);
            return outputArray;
        } };
})(); // Invoke the function and assign the returned object literal to
// GiantCorp.DataParser.
