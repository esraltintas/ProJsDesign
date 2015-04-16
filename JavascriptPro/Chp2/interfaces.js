/**
 * Created by esra on 16/04/15.
 */

/*
 interface Composite {
 function add(child);
 function remove(child);
 function getChild(index);
 }
 interface FormItem {
 function save();
 }
 */
var CompositeForm = function(id, method, action) { // implements Composite, FormItem

};
// Implement the Composite interface.
CompositeForm.prototype.add = function(child) {

};
CompositeForm.prototype.remove = function(child) {
    };
CompositeForm.prototype.getChild = function(index) {

};
// Implement the FormItem interface.
CompositeForm.prototype.save = function() {

};

// Interfaces.
var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
var FormItem = new Interface('FormItem', ['save']);
// CompositeForm class
var CompositeForm = function(id, method, action) { // implements Composite, FormItem

};

function addForm(formInstance) {
    Interface.ensureImplements(formInstance, Composite, FormItem);
    // This function will throw an error if a required method is not implemented,
    // halting execution of the function.
    // All code beneath this line will be executed only if the checks pass.
}

// Constructor.
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
// Static class method.
Interface.ensureImplements = function(object) {
    if(arguments.length < 2) {
        throw new Error("Function Interface.ensureImplements called with " +
            arguments.length  + "arguments, but expected at least 2.");
    }
    for(var i = 1, len = arguments.length; i < len; i++) {
        var interface = arguments[i];
        if(interface.constructor !== Interface) {
            throw new Error("Function Interface.ensureImplements expects arguments"
                + "two and above to be instances of Interface.");
        }
        for(var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
            var method = interface.methods[j];
            if(!object[method] || typeof object[method] !== 'function') {
                throw new Error("Function Interface.ensureImplements: object "
                    + "does not implement the " + interface.name
                    + " interface. Method " + method + " was not found.");
            } }
    } };



var DynamicMap = new Interface('DynamicMap', ['centerOnPoint', 'zoom', 'draw']);
function displayRoute(mapInstance) {
    Interface.ensureImplements(mapInstace, DynamicMap);
    mapInstance.centerOnPoint(12, 34);
    mapInstance.zoom(5);
    mapInstance.draw();
}
