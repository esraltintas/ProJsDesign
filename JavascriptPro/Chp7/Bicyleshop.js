/**
 * Created by esra on 19/04/15.
 */

/* BicycleShop class. */
var BicycleShop = function() {};
BicycleShop.prototype = {
    sellBicycle: function(model) {
        var bicycle;
        switch(model) {
            case 'The Speedster':
                bicycle = new Speedster();
                break;
            case 'The Lowrider':
                bicycle = new Lowrider();
                break;
            case 'The Comfort Cruiser':
            default:
                bicycle = new ComfortCruiser();
        }
        Interface.ensureImplements(bicycle, Bicycle);
        bicycle.assemble();
        bicycle.wash();
        return bicycle;
    }
};
/* The Bicycle interface. */
var Bicycle = new Interface('Bicycle', ['assemble', 'wash', 'ride', 'repair']);
/* Speedster class. */
var Speedster = function() { // implements Bicycle

};
Speedster.prototype = {
    assemble: function() {

    },
    wash: function() {
         },
    ride: function() {

    },
    repair: function() {
        }
};


var californiaCruisers = new BicycleShop();
var yourNewBike = californiaCruisers.sellBicycle('The Speedster');


/* BicycleFactory namespace. */
var BicycleFactory = {
    createBicycle: function(model) {
        var bicycle;
        switch(model) {
            case 'The Speedster':
                bicycle = new Speedster();
                break;
            case 'The Lowrider':
                bicycle = new Lowrider();
                break;
            case 'The Comfort Cruiser':
            default:
                bicycle = new ComfortCruiser();
        }
        Interface.ensureImplements(bicycle, Bicycle);
        return bicycle;
    }
};

/* BicycleShop class, improved. */
var BicycleShop = function() {};
BicycleShop.prototype = {
    sellBicycle: function(model) {
        var bicycle = BicycleFactory.createBicycle(model);
        bicycle.assemble();
        bicycle.wash();
        return bicycle;
    }
};

/* BicycleFactory namespace, with more models. */
var BicycleFactory = {
    createBicycle: function(model) {
        var bicycle;
        switch(model) {
            case 'The Speedster':
                bicycle = new Speedster();
                break;
            case 'The Lowrider':
                bicycle = new Lowrider();
                break;
            case 'The Flatlander':
                bicycle = new Flatlander();
                break;
            case 'The Comfort Cruiser':
            default:
                bicycle = new ComfortCruiser();
        }
        Interface.ensureImplements(bicycle, Bicycle);
        return bicycle;
    }
};

/* BicycleShop class (abstract). */
var BicycleShop = function() {};
BicycleShop.prototype = {
    sellBicycle: function(model) {
        var bicycle = this.createBicycle(model);
        bicycle.assemble();
        bicycle.wash();
        return bicycle;
    },
    createBicycle: function(model) {
        throw new Error('Unsupported operation on an abstract class.');
    } };


/* AcmeBicycleShop class. */
var AcmeBicycleShop = function() {};
extend(AcmeBicycleShop, BicycleShop);
AcmeBicycleShop.prototype.createBicycle = function(model) {
    var bicycle;
    switch(model) {
        case 'The Speedster':
            bicycle = new AcmeSpeedster();
            break;
        case 'The Lowrider':
            bicycle = new AcmeLowrider();
            break;
        case 'The Flatlander':
            bicycle = new AcmeFlatlander();
            break;
        case 'The Comfort Cruiser':
        default:
            bicycle = new AcmeComfortCruiser();
    }
    Interface.ensureImplements(bicycle, Bicycle);
    return bicycle;
};
/* GeneralProductsBicycleShop class. */
var GeneralProductsBicycleShop = function() {};
extend(GeneralProductsBicycleShop, BicycleShop);
GeneralProductsBicycleShop.prototype.createBicycle = function(model) {
    var bicycle;
    switch(model) {
        case 'The Speedster':
            bicycle = new GeneralProductsSpeedster();
            break;
        case 'The Lowrider':
            bicycle = new GeneralProductsLowrider();
            break;
        case 'The Flatlander':
            bicycle = new GeneralProductsFlatlander();
            break;
        case 'The Comfort Cruiser':
        default:
            bicycle = new GeneralProductsComfortCruiser();
    }
    Interface.ensureImplements(bicycle, Bicycle);
    return bicycle;
};

var alecsCruisers = new AcmeBicycleShop();
var yourNewBike = alecsCruisers.sellBicycle('The Lowrider');
var bobsCruisers = new GeneralProductsBicycleShop();
var yourSecondNewBike = bobsCruisers.sellBicycle('The Lowrider');
