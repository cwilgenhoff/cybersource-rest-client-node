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
    root.CyberSource.Ptsv1pushfundstransferSenderInformationPersonalIdentification = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv1pushfundstransferSenderInformationPersonalIdentification model module.
   * @module model/Ptsv1pushfundstransferSenderInformationPersonalIdentification
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv1pushfundstransferSenderInformationPersonalIdentification</code>.
   * @alias module:model/Ptsv1pushfundstransferSenderInformationPersonalIdentification
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Ptsv1pushfundstransferSenderInformationPersonalIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv1pushfundstransferSenderInformationPersonalIdentification} obj Optional instance to populate.
   * @return {module:model/Ptsv1pushfundstransferSenderInformationPersonalIdentification} The populated <code>Ptsv1pushfundstransferSenderInformationPersonalIdentification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('personalIdType')) {
        obj['personalIdType'] = ApiClient.convertToType(data['personalIdType'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Visa Platform Connect(35) This tag will contain an acquirer-populated value associated with the API : senderInformation.personalIdType which will identify the personal ID type of the sender.  Mastercard Send(80) 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Visa Platform Connect This tag will denote whether the tax ID is a business or individual tax ID when personal ID Type contains the value of TXIN (Tax identification).  The valid values are: • B (Business) • I (Individual) 
   * @member {String} personalIdType
   */
  exports.prototype['personalIdType'] = undefined;
  /**
   * This tag will contain the type of sender identification. The valid values are:  Visa Platform Connect: - `BTHD`: (Date of birth) - `CUID`: (Customer identification (unspecified)) - `NTID`: (National identification) - `PASN`: (Passport number) - `DRLN`: (Driver license) - `TXIN`: (Tax identification) - `CPNY`: (Company registration number) - `PRXY`: (Proxy identification) - `SSNB`: (Social security number) - `ARNB`: (Alien registration number) - `LAWE`: (Law enforcement identification) - `MILI`: (Military identification) - `TRVL`: (Travel identification (non-passport)) - `EMAL`: (Email) - `PHON`: (Phone number)  Mastercard Send: - `CUID`: (Customer identification (unspecified)) - `NTID`: (National identification) - `PASN`: (Passport number) - `DRLN`: (Driver license) - `TXIN`: (Tax identification) - `SSNB`: (Social security number) - `ARNB`: (Alien registration number) - `EIDN`: (Employer Identification Number) - `IDNB`: (Identity Card Number) 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


