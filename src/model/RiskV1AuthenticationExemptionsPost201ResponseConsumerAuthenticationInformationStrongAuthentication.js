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
    root.CyberSource.RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformationStrongAuthentication = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformationStrongAuthentication model module.
   * @module model/RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformationStrongAuthentication
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformationStrongAuthentication</code>.
   * @alias module:model/RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformationStrongAuthentication
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformationStrongAuthentication</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformationStrongAuthentication} obj Optional instance to populate.
   * @return {module:model/RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformationStrongAuthentication} The populated <code>RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformationStrongAuthentication</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('acquirerReferenceFraudRateThresholdExceeded')) {
        obj['acquirerReferenceFraudRateThresholdExceeded'] = ApiClient.convertToType(data['acquirerReferenceFraudRateThresholdExceeded'], 'Boolean');
      }
      if (data.hasOwnProperty('issuerReferenceFraudRateThresholdExceeded')) {
        obj['issuerReferenceFraudRateThresholdExceeded'] = ApiClient.convertToType(data['issuerReferenceFraudRateThresholdExceeded'], 'Boolean');
      }
      if (data.hasOwnProperty('issuerReferenceFraudRateExceeded')) {
        obj['issuerReferenceFraudRateExceeded'] = ApiClient.convertToType(data['issuerReferenceFraudRateExceeded'], 'Boolean');
      }
      if (data.hasOwnProperty('totalAmountValueExceeded')) {
        obj['totalAmountValueExceeded'] = ApiClient.convertToType(data['totalAmountValueExceeded'], 'Boolean');
      }
      if (data.hasOwnProperty('eeaDomesticInd')) {
        obj['eeaDomesticInd'] = ApiClient.convertToType(data['eeaDomesticInd'], 'Boolean');
      }
      if (data.hasOwnProperty('acquirerReferenceFraudRateExceeded')) {
        obj['acquirerReferenceFraudRateExceeded'] = ApiClient.convertToType(data['acquirerReferenceFraudRateExceeded'], 'Boolean');
      }
      if (data.hasOwnProperty('riskAttributesPresent')) {
        obj['riskAttributesPresent'] = ApiClient.convertToType(data['riskAttributesPresent'], 'Boolean');
      }
      if (data.hasOwnProperty('authenticationExemptionsId')) {
        obj['authenticationExemptionsId'] = ApiClient.convertToType(data['authenticationExemptionsId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Indicates if the Acquirer has exceeded the RFR for 180 consecutive days. (E.g. “true” if has exceeded, “false” otherwise). 
   * @member {Boolean} acquirerReferenceFraudRateThresholdExceeded
   */
  exports.prototype['acquirerReferenceFraudRateThresholdExceeded'] = undefined;
  /**
   * Indicates if the Issuer has exceeded the RFR for 180 consecutive days. (E.g. “True” if has exceeded, “False” otherwise). 
   * @member {Boolean} issuerReferenceFraudRateThresholdExceeded
   */
  exports.prototype['issuerReferenceFraudRateThresholdExceeded'] = undefined;
  /**
   * Indicates if the Issuer’s RFR exceeds the allowable level based on the amount in the request (E.g. “true” if has exceeded, “false” otherwise). 
   * @member {Boolean} issuerReferenceFraudRateExceeded
   */
  exports.prototype['issuerReferenceFraudRateExceeded'] = undefined;
  /**
   * Indicates if the request amount has exceeded the maximum ETV rate. (E.g. “true” if exceeded, “false” otherwise). 
   * @member {Boolean} totalAmountValueExceeded
   */
  exports.prototype['totalAmountValueExceeded'] = undefined;
  /**
   * Indicates if the input qualifies as an EEA domestic transaction where both the Acquirer Country and Issuer Country are located in the EEA. (E.g. “1” if transaction qualifies, “0” otherwise). 
   * @member {Boolean} eeaDomesticInd
   */
  exports.prototype['eeaDomesticInd'] = undefined;
  /**
   * Indicates if the Acquirer’s Reference Fraud Rate (RFR) exceeds the allowable level based on the amount in the request (E.g. “True” if has exceeded, “False” otherwise). 
   * @member {Boolean} acquirerReferenceFraudRateExceeded
   */
  exports.prototype['acquirerReferenceFraudRateExceeded'] = undefined;
  /**
   * Risk Attribute Indicator based on required elements from Articles 2 & 18 of the European Banking Authority (EBA) Guidelines (E.g. “True” if risk attributes present, “False” otherwise). 
   * @member {Boolean} riskAttributesPresent
   */
  exports.prototype['riskAttributesPresent'] = undefined;
  /**
   * CYBS generated UUID used to identify the transaction. Note: 36 with hashes. 
   * @member {String} authenticationExemptionsId
   */
  exports.prototype['authenticationExemptionsId'] = undefined;



  return exports;
}));


