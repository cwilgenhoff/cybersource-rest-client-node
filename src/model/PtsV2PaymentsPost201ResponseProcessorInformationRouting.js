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
    root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationRouting = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseProcessorInformationRouting model module.
   * @module model/PtsV2PaymentsPost201ResponseProcessorInformationRouting
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseProcessorInformationRouting</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseProcessorInformationRouting
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseProcessorInformationRouting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseProcessorInformationRouting} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseProcessorInformationRouting} The populated <code>PtsV2PaymentsPost201ResponseProcessorInformationRouting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('network')) {
        obj['network'] = ApiClient.convertToType(data['network'], 'String');
      }
      if (data.hasOwnProperty('networkName')) {
        obj['networkName'] = ApiClient.convertToType(data['networkName'], 'String');
      }
      if (data.hasOwnProperty('customerSignatureRequired')) {
        obj['customerSignatureRequired'] = ApiClient.convertToType(data['customerSignatureRequired'], 'String');
      }
    }
    return obj;
  }

  /**
   * Indicates whether the transaction was routed on a credit network, a debit network, or the STAR signature debit network.  Possible values: - `C`: Credit network - `D`: Debit network (without signature) - `S`: STAR signature debit network  This field is supported only on FDC Nashville Global. 
   * @member {String} network
   */
  exports.prototype['network'] = undefined;
  /**
   * Name of the network on which the transaction was routed.  This reply field is supported only on FDC Nashville Global. 
   * @member {String} networkName
   */
  exports.prototype['networkName'] = undefined;
  /**
   * Indicates whether you need to obtain the cardholder's signature.  Possible values: - `Y`: You need to obtain the cardholder's signature. - `N`: You do not need to obtain the cardholder's signature.  This field is supported only on FDC Nashville Global. 
   * @member {String} customerSignatureRequired
   */
  exports.prototype['customerSignatureRequired'] = undefined;



  return exports;
}));


