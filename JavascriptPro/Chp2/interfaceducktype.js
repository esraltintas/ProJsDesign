/**
 * Created by esra on 16/04/15.
 */

// Interfaces.

var Interface = function(name, methods) {
    if(arguments.length != 2) {
        throw new Error("Interface constructor called with " + arguments.length +
            "arguments, but expected exactly 2.");
    }
    this.name = name;
    this.methods = [];
    for(var i = 0, len = methods.length; i < len; i++) {
        if(typeof methods[i] !== 'string') {
            throw new Error("Interface constructor expects method names to be "
                + "passed in as a string.");
        }
        this.methods.push(methods[i]);
    }
};

var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
var FormItem = new Interface('FormItem', ['save']);
// CompositeForm class
var CompositeForm = function(id, method, action) {
    alert("comp")
};

function addForm(formInstance) {
    ensureImplements(formInstance, Composite, FormItem);
    // This function will throw an error if a required method is not implemented.

}


