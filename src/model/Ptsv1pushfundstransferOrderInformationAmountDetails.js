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
    root.CyberSource.Ptsv1pushfundstransferOrderInformationAmountDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv1pushfundstransferOrderInformationAmountDetails model module.
   * @module model/Ptsv1pushfundstransferOrderInformationAmountDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv1pushfundstransferOrderInformationAmountDetails</code>.
   * @alias module:model/Ptsv1pushfundstransferOrderInformationAmountDetails
   * @class
   * @param totalAmount {String} Grand total for the order. This value cannot be negative. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places.  The disbursement amount. Numeric integer, 1-999999999999. The decimal point is implied based on the relevant currency exponent. For example, a US Dollar $53 amount is a value of 5300.  Processor Amount Ranges: Visa Platform Connect: .01-9999999999.99  Mastercard Send: 1-9999999999.99  FDC Compass: .01- 9999999999.99  Chase Paymentech: .01-9999999999.99 
   * @param currency {String} Use a 3-character alpha currency code for currency of the sender.  ISO standard currencies: http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf  Currency must be supported by the processor. 
   */
  var exports = function(totalAmount, currency) {
    var _this = this;

    _this['totalAmount'] = totalAmount;
    _this['currency'] = currency;
  };

  /**
   * Constructs a <code>Ptsv1pushfundstransferOrderInformationAmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv1pushfundstransferOrderInformationAmountDetails} obj Optional instance to populate.
   * @return {module:model/Ptsv1pushfundstransferOrderInformationAmountDetails} The populated <code>Ptsv1pushfundstransferOrderInformationAmountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
    }
    return obj;
  }

  /**
   * Grand total for the order. This value cannot be negative. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places.  The disbursement amount. Numeric integer, 1-999999999999. The decimal point is implied based on the relevant currency exponent. For example, a US Dollar $53 amount is a value of 5300.  Processor Amount Ranges: Visa Platform Connect: .01-9999999999.99  Mastercard Send: 1-9999999999.99  FDC Compass: .01- 9999999999.99  Chase Paymentech: .01-9999999999.99 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Use a 3-character alpha currency code for currency of the sender.  ISO standard currencies: http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf  Currency must be supported by the processor. 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;



  return exports;
}));

