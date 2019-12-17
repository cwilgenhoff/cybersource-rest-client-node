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
    define(['ApiClient', 'model/Ptsv2paymentsProcessingInformationAuthorizationOptions', 'model/Ptsv2paymentsProcessingInformationBankTransferOptions', 'model/Ptsv2paymentsProcessingInformationCaptureOptions', 'model/Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer', 'model/Ptsv2paymentsProcessingInformationPurchaseOptions', 'model/Ptsv2paymentsProcessingInformationRecurringOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsProcessingInformationAuthorizationOptions'), require('./Ptsv2paymentsProcessingInformationBankTransferOptions'), require('./Ptsv2paymentsProcessingInformationCaptureOptions'), require('./Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer'), require('./Ptsv2paymentsProcessingInformationPurchaseOptions'), require('./Ptsv2paymentsProcessingInformationRecurringOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsProcessingInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsProcessingInformationAuthorizationOptions, root.CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions, root.CyberSource.Ptsv2paymentsProcessingInformationCaptureOptions, root.CyberSource.Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer, root.CyberSource.Ptsv2paymentsProcessingInformationPurchaseOptions, root.CyberSource.Ptsv2paymentsProcessingInformationRecurringOptions);
  }
}(this, function(ApiClient, Ptsv2paymentsProcessingInformationAuthorizationOptions, Ptsv2paymentsProcessingInformationBankTransferOptions, Ptsv2paymentsProcessingInformationCaptureOptions, Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer, Ptsv2paymentsProcessingInformationPurchaseOptions, Ptsv2paymentsProcessingInformationRecurringOptions) {
  'use strict';




  /**
   * The Ptsv2paymentsProcessingInformation model module.
   * @module model/Ptsv2paymentsProcessingInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsProcessingInformation</code>.
   * @alias module:model/Ptsv2paymentsProcessingInformation
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>Ptsv2paymentsProcessingInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsProcessingInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsProcessingInformation} The populated <code>Ptsv2paymentsProcessingInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('capture')) {
        obj['capture'] = ApiClient.convertToType(data['capture'], 'Boolean');
      }
      if (data.hasOwnProperty('processorId')) {
        obj['processorId'] = ApiClient.convertToType(data['processorId'], 'String');
      }
      if (data.hasOwnProperty('businessApplicationId')) {
        obj['businessApplicationId'] = ApiClient.convertToType(data['businessApplicationId'], 'String');
      }
      if (data.hasOwnProperty('commerceIndicator')) {
        obj['commerceIndicator'] = ApiClient.convertToType(data['commerceIndicator'], 'String');
      }
      if (data.hasOwnProperty('paymentSolution')) {
        obj['paymentSolution'] = ApiClient.convertToType(data['paymentSolution'], 'String');
      }
      if (data.hasOwnProperty('reconciliationId')) {
        obj['reconciliationId'] = ApiClient.convertToType(data['reconciliationId'], 'String');
      }
      if (data.hasOwnProperty('linkId')) {
        obj['linkId'] = ApiClient.convertToType(data['linkId'], 'String');
      }
      if (data.hasOwnProperty('purchaseLevel')) {
        obj['purchaseLevel'] = ApiClient.convertToType(data['purchaseLevel'], 'String');
      }
      if (data.hasOwnProperty('reportGroup')) {
        obj['reportGroup'] = ApiClient.convertToType(data['reportGroup'], 'String');
      }
      if (data.hasOwnProperty('visaCheckoutId')) {
        obj['visaCheckoutId'] = ApiClient.convertToType(data['visaCheckoutId'], 'String');
      }
      if (data.hasOwnProperty('industryDataType')) {
        obj['industryDataType'] = ApiClient.convertToType(data['industryDataType'], 'String');
      }
      if (data.hasOwnProperty('authorizationOptions')) {
        obj['authorizationOptions'] = Ptsv2paymentsProcessingInformationAuthorizationOptions.constructFromObject(data['authorizationOptions']);
      }
      if (data.hasOwnProperty('captureOptions')) {
        obj['captureOptions'] = Ptsv2paymentsProcessingInformationCaptureOptions.constructFromObject(data['captureOptions']);
      }
      if (data.hasOwnProperty('recurringOptions')) {
        obj['recurringOptions'] = Ptsv2paymentsProcessingInformationRecurringOptions.constructFromObject(data['recurringOptions']);
      }
      if (data.hasOwnProperty('bankTransferOptions')) {
        obj['bankTransferOptions'] = Ptsv2paymentsProcessingInformationBankTransferOptions.constructFromObject(data['bankTransferOptions']);
      }
      if (data.hasOwnProperty('purchaseOptions')) {
        obj['purchaseOptions'] = Ptsv2paymentsProcessingInformationPurchaseOptions.constructFromObject(data['purchaseOptions']);
      }
      if (data.hasOwnProperty('electronicBenefitsTransfer')) {
        obj['electronicBenefitsTransfer'] = Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer.constructFromObject(data['electronicBenefitsTransfer']);
      }
    }
    return obj;
  }

  /**
   * Flag that specifies whether to also include capture service in the submitted request or not.  Possible values: - **true** - **false** (default). 
   * @member {Boolean} capture
   * @default false
   */
  exports.prototype['capture'] = false;
  /**
   * Value that identifies the processor/acquirer to use for the transaction. This value is supported only for **CyberSource through VisaNet**.  Contact CyberSource Customer Support to get the value for this field. 
   * @member {String} processorId
   */
  exports.prototype['processorId'] = undefined;
  /**
   * Payouts transaction type. Required for OCT transactions. This field is a pass-through, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. **Note** When the request includes this field, this value overrides the information in your CyberSource account.  For valid values, see the `invoiceHeader_businessApplicationID` field description in [Payouts Using the Simple Order API.](http://apps.cybersource.com/library/documentation/dev_guides/payouts_SO/Payouts_SO_API.pdf) 
   * @member {String} businessApplicationId
   */
  exports.prototype['businessApplicationId'] = undefined;
  /**
   * Type of transaction. Some payment card companies use this information when determining discount rates.  #### Ingenico ePayments Ingenico ePayments was previously called _Global Collect_. When you omit this field for Ingenico ePayments, the processor uses the default transaction type they have on file for you instead of the default value listed in \"Commerce Indicators\" section of [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  #### Payer Authentication Transactions For the possible values and requirements, see \"Payer Authentication\" in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  #### Payouts OCT (Original Credit Transaction) Value for an OCT transaction: - `internet` For details, see the `e_commerce_indicator` field description in [Payouts Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/payouts_SCMP/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  #### Other Types of Transactions For details, see \"Commerce Indicators\" in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} commerceIndicator
   */
  exports.prototype['commerceIndicator'] = undefined;
  /**
   * Type of digital payment solution for the transaction. Possible Values:   - `visacheckout`: Visa Checkout. This value is required for Visa Checkout transactions. For details, see `payment_solution` field description in [Visa Checkout Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/VCO_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  - `001`: Apple Pay.  - `004`: Cybersource In-App Solution.  - `005`: Masterpass. This value is required for Masterpass transactions on OmniPay Direct. For details, see \"Masterpass\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  - `006`: Android Pay.  - `007`: Chase Pay.  - `008`: Samsung Pay.  - `012`: Google Pay. 
   * @member {String} paymentSolution
   */
  exports.prototype['paymentSolution'] = undefined;
  /**
   * Please check with Cybersource customer support to see if your merchant account is configured correctly so you can include this field in your request. * For Payouts: max length for FDCCompass is String (22). 
   * @member {String} reconciliationId
   */
  exports.prototype['reconciliationId'] = undefined;
  /**
   * Value that links the current authorization request to the original authorization request. Set this value to the ID that was returned in the reply message from the original authorization request.  This value is used for:  - Partial authorizations - Split shipments  For details, see `link_to_request` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} linkId
   */
  exports.prototype['linkId'] = undefined;
  /**
   * Set this field to 3 to indicate that the request includes Level III data.
   * @member {String} purchaseLevel
   */
  exports.prototype['purchaseLevel'] = undefined;
  /**
   * Attribute that lets you define custom grouping for your processor reports. This field is supported only for **Worldpay VAP**.  For details, see `report_group` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} reportGroup
   */
  exports.prototype['reportGroup'] = undefined;
  /**
   * Identifier for the **Visa Checkout** order. Visa Checkout provides a unique order ID for every transaction in the Visa Checkout **callID** field.  For details, see the `vc_order_id` field description in [Visa Checkout Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/VCO_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} visaCheckoutId
   */
  exports.prototype['visaCheckoutId'] = undefined;
  /**
   * Flag that indicates whether the transaction includes airline or restaurant data.  To send the data in a transaction request to the processor, you must set this field to `airline` or `restaurant`.  **Note** If you do not set this field to one of the possible values, CyberSource does not send any data to the processor.  Possible Values: - `airline` - `restaurant` 
   * @member {String} industryDataType
   */
  exports.prototype['industryDataType'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationAuthorizationOptions} authorizationOptions
   */
  exports.prototype['authorizationOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationCaptureOptions} captureOptions
   */
  exports.prototype['captureOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationRecurringOptions} recurringOptions
   */
  exports.prototype['recurringOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationBankTransferOptions} bankTransferOptions
   */
  exports.prototype['bankTransferOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationPurchaseOptions} purchaseOptions
   */
  exports.prototype['purchaseOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer} electronicBenefitsTransfer
   */
  exports.prototype['electronicBenefitsTransfer'] = undefined;



  return exports;
}));


