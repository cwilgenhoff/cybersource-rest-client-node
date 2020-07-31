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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Tmsv2customersEmbeddedDefaultShippingAddressLinks', 'model/Tmsv2customersEmbeddedDefaultShippingAddressMetadata', 'model/Tmsv2customersEmbeddedDefaultShippingAddressShipTo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tmsv2customersEmbeddedDefaultShippingAddressLinks'), require('./Tmsv2customersEmbeddedDefaultShippingAddressMetadata'), require('./Tmsv2customersEmbeddedDefaultShippingAddressShipTo'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PostCustomerShippingAddressRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Tmsv2customersEmbeddedDefaultShippingAddressLinks, root.CyberSource.Tmsv2customersEmbeddedDefaultShippingAddressMetadata, root.CyberSource.Tmsv2customersEmbeddedDefaultShippingAddressShipTo);
  }
}(this, function(ApiClient, Tmsv2customersEmbeddedDefaultShippingAddressLinks, Tmsv2customersEmbeddedDefaultShippingAddressMetadata, Tmsv2customersEmbeddedDefaultShippingAddressShipTo) {
  'use strict';




  /**
   * The PostCustomerShippingAddressRequest model module.
   * @module model/PostCustomerShippingAddressRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PostCustomerShippingAddressRequest</code>.
   * @alias module:model/PostCustomerShippingAddressRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PostCustomerShippingAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCustomerShippingAddressRequest} obj Optional instance to populate.
   * @return {module:model/PostCustomerShippingAddressRequest} The populated <code>PostCustomerShippingAddressRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Tmsv2customersEmbeddedDefaultShippingAddressLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('shipTo')) {
        obj['shipTo'] = Tmsv2customersEmbeddedDefaultShippingAddressShipTo.constructFromObject(data['shipTo']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = Tmsv2customersEmbeddedDefaultShippingAddressMetadata.constructFromObject(data['metadata']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultShippingAddressLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * The id of the Shipping Address Token.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultShippingAddressShipTo} shipTo
   */
  exports.prototype['shipTo'] = undefined;
  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultShippingAddressMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;



  return exports;
}));


