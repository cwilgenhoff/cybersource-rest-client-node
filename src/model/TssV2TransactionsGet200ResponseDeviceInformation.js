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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponseDeviceInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseDeviceInformation model module.
   * @module model/TssV2TransactionsGet200ResponseDeviceInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseDeviceInformation</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseDeviceInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseDeviceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseDeviceInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseDeviceInformation} The populated <code>TssV2TransactionsGet200ResponseDeviceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ipAddress')) {
        obj['ipAddress'] = ApiClient.convertToType(data['ipAddress'], 'String');
      }
      if (data.hasOwnProperty('hostName')) {
        obj['hostName'] = ApiClient.convertToType(data['hostName'], 'String');
      }
      if (data.hasOwnProperty('cookiesAccepted')) {
        obj['cookiesAccepted'] = ApiClient.convertToType(data['cookiesAccepted'], 'String');
      }
    }
    return obj;
  }

  /**
   * IP address of the customer.  #### Used by **Authorization, Capture, and Credit** Optional field. 
   * @member {String} ipAddress
   */
  exports.prototype['ipAddress'] = undefined;
  /**
   * DNS resolved hostname from `ipAddress`.
   * @member {String} hostName
   */
  exports.prototype['hostName'] = undefined;
  /**
   * Whether the customer’s browser accepts cookies. This field can contain one of the following values: - `yes`: The customer’s browser accepts cookies. - `no`: The customer’s browser does not accept cookies. 
   * @member {String} cookiesAccepted
   */
  exports.prototype['cookiesAccepted'] = undefined;



  return exports;
}));


