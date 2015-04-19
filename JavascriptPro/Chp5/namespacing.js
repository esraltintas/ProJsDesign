/**
 * Created by esra on 19/04/15.
 */

/* Declared globally. */
function findProduct(id) {

}

// Later in your page, another programmer adds...
var resetProduct = $('reset-product-button');
var findProduct = $('find-product-button'); // The findProduct function just got
// overwritten.


/* Using a namespace. */
var MyNamespace = {
    findProduct: function(id) {

    }
    // Other methods can go here as well.
}

// Later in your page, another programmer adds...
var resetProduct = $('reset-product-button');
var findProduct = $('find-product-button'); // Nothing was overwritten.

/* GiantCorp namespace. */
var GiantCorp = {};

GiantCorp.Common = {
    // A singleton with common methods used by all objects and modules.
};
GiantCorp.ErrorCodes = {
    // An object literal used to store data.
};
GiantCorp.PageHandler = {
    // A singleton with page specific methods and attributes.
};

/* Generic Page Object. */
Namespace.PageName = {
    // Page constants.
    CONSTANT_1: true,
    CONSTANT_2: 10,
    // Page methods.
    method1: function() {

    },
    method2: function() {
    },
    // Initialization method.
    init: function() {
    }
}

// Invoke the initialization method after the page loads.
addLoadEvent(Namespace.PageName.init);

