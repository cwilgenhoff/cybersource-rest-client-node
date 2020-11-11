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
    define(['ApiClient', 'model/InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Invoicingv2invoiceSettingsInvoiceSettingsInformation = factory(root.CyberSource.ApiClient, root.CyberSource.InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle);
  }
}(this, function(ApiClient, InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle) {
  'use strict';




  /**
   * The Invoicingv2invoiceSettingsInvoiceSettingsInformation model module.
   * @module model/Invoicingv2invoiceSettingsInvoiceSettingsInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Invoicingv2invoiceSettingsInvoiceSettingsInformation</code>.
   * @alias module:model/Invoicingv2invoiceSettingsInvoiceSettingsInformation
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Invoicingv2invoiceSettingsInvoiceSettingsInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Invoicingv2invoiceSettingsInvoiceSettingsInformation} obj Optional instance to populate.
   * @return {module:model/Invoicingv2invoiceSettingsInvoiceSettingsInformation} The populated <code>Invoicingv2invoiceSettingsInvoiceSettingsInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantLogo')) {
        obj['merchantLogo'] = ApiClient.convertToType(data['merchantLogo'], 'String');
      }
      if (data.hasOwnProperty('merchantDisplayName')) {
        obj['merchantDisplayName'] = ApiClient.convertToType(data['merchantDisplayName'], 'String');
      }
      if (data.hasOwnProperty('customEmailMessage')) {
        obj['customEmailMessage'] = ApiClient.convertToType(data['customEmailMessage'], 'String');
      }
      if (data.hasOwnProperty('enableReminders')) {
        obj['enableReminders'] = ApiClient.convertToType(data['enableReminders'], 'Boolean');
      }
      if (data.hasOwnProperty('headerStyle')) {
        obj['headerStyle'] = InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle.constructFromObject(data['headerStyle']);
      }
      if (data.hasOwnProperty('deliveryLanguage')) {
        obj['deliveryLanguage'] = ApiClient.convertToType(data['deliveryLanguage'], 'String');
      }
      if (data.hasOwnProperty('defaultCurrencyCode')) {
        obj['defaultCurrencyCode'] = ApiClient.convertToType(data['defaultCurrencyCode'], 'String');
      }
      if (data.hasOwnProperty('payerAuthenticationInInvoicing')) {
        obj['payerAuthenticationInInvoicing'] = ApiClient.convertToType(data['payerAuthenticationInInvoicing'], 'String');
      }
    }
    return obj;
  }

  /**
   * The image file, which must be encoded in Base64 format. Supported file formats are `png`, `jpg`, and `gif`. The image file size restriction is 1 MB.
   * @member {String} merchantLogo
   */
  exports.prototype['merchantLogo'] = undefined;
  /**
   * The merchant's display name shown on the invoice.
   * @member {String} merchantDisplayName
   */
  exports.prototype['merchantDisplayName'] = undefined;
  /**
   * The content of the email message that we send to your customers.
   * @member {String} customEmailMessage
   */
  exports.prototype['customEmailMessage'] = undefined;
  /**
   * Whether you would like us to send an auto-generated reminder email to your invoice recipients. Currently, this reminder email is sent five days before the invoice is due and one day after it is past due.
   * @member {Boolean} enableReminders
   */
  exports.prototype['enableReminders'] = undefined;
  /**
   * @member {module:model/InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle} headerStyle
   */
  exports.prototype['headerStyle'] = undefined;
  /**
   * The language of the email that we send to your customers. Possible values are `zh-CN`, `zh-TW`, `en-US`, `fr-FR`, `de-DE`, `ja-JP`, `pt-BR`, `ru-RU` and `es-419`.
   * @member {String} deliveryLanguage
   */
  exports.prototype['deliveryLanguage'] = undefined;
  /**
   * Currency used for the order. Use the three-character [ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)  #### Used by **Authorization** Required field.  **Authorization Reversal** For an authorization reversal (`reversalInformation`) or a capture (`processingOptions.capture` is set to `true`), you must use the same currency that you used in your payment authorization request.  #### PIN Debit Currency for the amount you requested for the PIN debit purchase. This value is returned for partial authorizations. The issuing bank can approve a partial amount if the balance on the debit card is less than the requested transaction amount. For the possible values, see the [ISO Standard Currency Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/currencies.pdf). Returned by PIN debit purchase.  For PIN debit reversal requests, you must use the same currency that was used for the PIN debit purchase or PIN debit credit that you are reversing. For the possible values, see the [ISO Standard Currency Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/currencies.pdf).  Required field for PIN Debit purchase and PIN Debit credit requests. Optional field for PIN Debit reversal requests.  #### GPX This field is optional for reversing an authorization or credit.  #### DCC for First Data Your local currency. For details, see the `currency` field description in [Dynamic Currency Conversion For First Data Using the SCMP API](http://apps.cybersource.com/library/documentation/dev_guides/DCC_FirstData_SCMP/DCC_FirstData_SCMP_API.pdf).  #### Tax Calculation Required for international tax and value added tax only. Optional for U.S. and Canadian taxes. Your local currency. 
   * @member {String} defaultCurrencyCode
   */
  exports.prototype['defaultCurrencyCode'] = undefined;
  /**
   * For a merchant's invoice payments, enable 3D Secure payer authentication version 1, update to 3D Secure version 2, or disable 3D Secure. Possible values are:  - `enable` - `update` - `disable`  
   * @member {String} payerAuthenticationInInvoicing
   */
  exports.prototype['payerAuthenticationInInvoicing'] = undefined;



  return exports;
}));


