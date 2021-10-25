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
    define(['ApiClient', 'model/ReportingV3ChargebackDetailsGet200ResponseChargebackDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportingV3ChargebackDetailsGet200ResponseChargebackDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportingV3ChargebackDetailsGet200Response = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails);
  }
}(this, function(ApiClient, ReportingV3ChargebackDetailsGet200ResponseChargebackDetails) {
  'use strict';




  /**
   * The ReportingV3ChargebackDetailsGet200Response model module.
   * @module model/ReportingV3ChargebackDetailsGet200Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3ChargebackDetailsGet200Response</code>.
   * @alias module:model/ReportingV3ChargebackDetailsGet200Response
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ReportingV3ChargebackDetailsGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3ChargebackDetailsGet200Response} obj Optional instance to populate.
   * @return {module:model/ReportingV3ChargebackDetailsGet200Response} The populated <code>ReportingV3ChargebackDetailsGet200Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
      }
      if (data.hasOwnProperty('endTime')) {
        obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
      }
      if (data.hasOwnProperty('chargebackDetails')) {
        obj['chargebackDetails'] = ApiClient.convertToType(data['chargebackDetails'], [ReportingV3ChargebackDetailsGet200ResponseChargebackDetails]);
      }
    }
    return obj;
  }

  /**
   * Organization Id
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * Report Start Date (ISO 8601 Extended)
   * @member {Date} startTime
   */
  exports.prototype['startTime'] = undefined;
  /**
   * Report Start Date (ISO 8601 Extended)
   * @member {Date} endTime
   */
  exports.prototype['endTime'] = undefined;
  /**
   * List of Chargeback Details list.
   * @member {Array.<module:model/ReportingV3ChargebackDetailsGet200ResponseChargebackDetails>} chargebackDetails
   */
  exports.prototype['chargebackDetails'] = undefined;



  return exports;
}));


