/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.Ptsv1pushfundstransferAggregatorInformationSubMerchant();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Ptsv1pushfundstransferAggregatorInformationSubMerchant', function() {
    it('should create an instance of Ptsv1pushfundstransferAggregatorInformationSubMerchant', function() {
      // uncomment below and update the code to test Ptsv1pushfundstransferAggregatorInformationSubMerchant
      //var instane = new CyberSource.Ptsv1pushfundstransferAggregatorInformationSubMerchant();
      //expect(instance).to.be.a(CyberSource.Ptsv1pushfundstransferAggregatorInformationSubMerchant);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CyberSource.Ptsv1pushfundstransferAggregatorInformationSubMerchant();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CyberSource.Ptsv1pushfundstransferAggregatorInformationSubMerchant();
      //expect(instance).to.be();
    });

    it('should have the property address1 (base name: "address1")', function() {
      // uncomment below and update the code to test the property address1
      //var instane = new CyberSource.Ptsv1pushfundstransferAggregatorInformationSubMerchant();
      //expect(instance).to.be();
    });

    it('should have the property locality (base name: "locality")', function() {
      // uncomment below and update the code to test the property locality
      //var instane = new CyberSource.Ptsv1pushfundstransferAggregatorInformationSubMerchant();
      //expect(instance).to.be();
    });

    it('should have the property administrativeArea (base name: "administrativeArea")', function() {
      // uncomment below and update the code to test the property administrativeArea
      //var instane = new CyberSource.Ptsv1pushfundstransferAggregatorInformationSubMerchant();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new CyberSource.Ptsv1pushfundstransferAggregatorInformationSubMerchant();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new CyberSource.Ptsv1pushfundstransferAggregatorInformationSubMerchant();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new CyberSource.Ptsv1pushfundstransferAggregatorInformationSubMerchant();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instane = new CyberSource.Ptsv1pushfundstransferAggregatorInformationSubMerchant();
      //expect(instance).to.be();
    });

  });

}));
