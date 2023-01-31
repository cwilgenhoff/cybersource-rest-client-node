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
    root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationPaymentType = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponsePaymentInformationPaymentType model module.
   * @module model/TssV2TransactionsGet200ResponsePaymentInformationPaymentType
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponsePaymentInformationPaymentType</code>.
   * @alias module:model/TssV2TransactionsGet200ResponsePaymentInformationPaymentType
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponsePaymentInformationPaymentType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponsePaymentInformationPaymentType} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponsePaymentInformationPaymentType} The populated <code>TssV2TransactionsGet200ResponsePaymentInformationPaymentType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
    }
    return obj;
  }

  /**
   * A Payment Type is an agreed means for a payee to receive legal tender from a payer. The way one pays for a commercial financial transaction. Examples: Card, Bank Transfer, Digital, Direct Debit. Possible values: - `CARD` (use this for a PIN debit transaction) - `CHECK` (use this for all eCheck payment transactions - ECP Debit, ECP Follow-on Credit, ECP StandAlone Credit) - `bankTransfer` (use for Online Bank Transafer for methods such as P24, iDeal, Estonia Bank, KCP) - `localCard` (KCP Local card via Altpay) - `carrierBilling` (KCP Carrier Billing via Altpay) 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Indicates the payment type used in this payment transaction. Example: credit card, check
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Indicates the payment method used in this payment transaction.
   * @member {String} method
   */
  exports.prototype['method'] = undefined;



  return exports;
}));


