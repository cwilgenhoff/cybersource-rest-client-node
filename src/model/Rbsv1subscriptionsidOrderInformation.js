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
    define(['ApiClient', 'model/Rbsv1subscriptionsidOrderInformationAmountDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rbsv1subscriptionsidOrderInformationAmountDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Rbsv1subscriptionsidOrderInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Rbsv1subscriptionsidOrderInformationAmountDetails);
  }
}(this, function(ApiClient, Rbsv1subscriptionsidOrderInformationAmountDetails) {
  'use strict';




  /**
   * The Rbsv1subscriptionsidOrderInformation model module.
   * @module model/Rbsv1subscriptionsidOrderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Rbsv1subscriptionsidOrderInformation</code>.
   * @alias module:model/Rbsv1subscriptionsidOrderInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Rbsv1subscriptionsidOrderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rbsv1subscriptionsidOrderInformation} obj Optional instance to populate.
   * @return {module:model/Rbsv1subscriptionsidOrderInformation} The populated <code>Rbsv1subscriptionsidOrderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amountDetails')) {
        obj['amountDetails'] = Rbsv1subscriptionsidOrderInformationAmountDetails.constructFromObject(data['amountDetails']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Rbsv1subscriptionsidOrderInformationAmountDetails} amountDetails
   */
  exports.prototype['amountDetails'] = undefined;



  return exports;
}));

