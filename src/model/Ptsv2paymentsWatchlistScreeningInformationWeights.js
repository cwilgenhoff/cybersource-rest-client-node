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
    root.CyberSource.Ptsv2paymentsWatchlistScreeningInformationWeights = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsWatchlistScreeningInformationWeights model module.
   * @module model/Ptsv2paymentsWatchlistScreeningInformationWeights
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsWatchlistScreeningInformationWeights</code>.
   * @alias module:model/Ptsv2paymentsWatchlistScreeningInformationWeights
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Ptsv2paymentsWatchlistScreeningInformationWeights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsWatchlistScreeningInformationWeights} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsWatchlistScreeningInformationWeights} The populated <code>Ptsv2paymentsWatchlistScreeningInformationWeights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Degree of correlation between a customer’s address and an entry in the DPL before a match occurs. This field can contain one of the following values: - exact: The address must be identical to the entry in the DPL. - high: (default) The address cannot differ significantly from the entry in the DPL. - medium: The address can differ slightly more from the entry in the DPL. - low: The address can differ significantly from the entry in the DPL. 
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * Degree of correlation between a company address and an entry in the DPL before a match occurs. This field can contain one of the following values: - exact: The company name must be identical to the entry in the DPL. - high: (default) The company name cannot differ significantly from the entry in the DPL. - medium: The company name can differ slightly more from the entry in the DPL. - low: The company name can differ significantly from the entry in the DPL. 
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * Degree of correlation between a customer’s name and an entry in the DPL before a match occurs. This field can contain one of the following values: - exact: The name must be identical to the entry in the DPL. - high: (default) The name cannot differ significantly from the entry in the DPL. - medium: The name can differ slightly more from the entry in the DPL. - low: The name can differ significantly the entry in the DPL. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));

