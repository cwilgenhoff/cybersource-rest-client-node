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
    root.CyberSource.Riskv1decisionsTravelInformationLegs = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1decisionsTravelInformationLegs model module.
   * @module model/Riskv1decisionsTravelInformationLegs
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1decisionsTravelInformationLegs</code>.
   * @alias module:model/Riskv1decisionsTravelInformationLegs
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Riskv1decisionsTravelInformationLegs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1decisionsTravelInformationLegs} obj Optional instance to populate.
   * @return {module:model/Riskv1decisionsTravelInformationLegs} The populated <code>Riskv1decisionsTravelInformationLegs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('origination')) {
        obj['origination'] = ApiClient.convertToType(data['origination'], 'String');
      }
      if (data.hasOwnProperty('destination')) {
        obj['destination'] = ApiClient.convertToType(data['destination'], 'String');
      }
      if (data.hasOwnProperty('carrierCode')) {
        obj['carrierCode'] = ApiClient.convertToType(data['carrierCode'], 'String');
      }
      if (data.hasOwnProperty('departureDate')) {
        obj['departureDate'] = ApiClient.convertToType(data['departureDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * Use to specify the airport code for the origin of the leg of the trip, which is designated by the pound (#) symbol in the field name. This code is usually three digits long, for example: SFO = San Francisco. Do not use the colon (:) or the dash (-). For airport codes, see the IATA Airline and Airport Code Search. The leg number can be a positive integer from 0 to N. For example: `travelInformation.legs.0.origination=SFO` `travelInformation.legs.1.origination=SFO`  **Note** In your request, send either the complete route or the individual legs (`legs.0.origination` and `legs.n.destination`). If you send all the fields, the complete route takes precedence over the individual legs.  For details, see the `decision_manager_travel_leg#_orig` field description in _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link). 
   * @member {String} origination
   */
  exports.prototype['origination'] = undefined;
  /**
   * Use to specify the airport code for the destination of the leg of the trip, which is designated by the pound (#) symbol in the field name. This code is usually three digits long, for example: SFO = San Francisco. Do not use the colon (:) or the dash (-). For airport codes, see [IATA Airline and Airport Code Search](https://www.iata.org/publications/Pages/code-search.aspx). The leg number can be a positive integer from 0 to N. For example:  `travelInformation.legs.0.destination=SFO` `travelInformation.legs.1.destination=SFO`  **Note** In your request, send either the complete route or the individual legs (`legs.0.origination` and `legs.n.destination`). If you send all the fields, the complete route takes precedence over the individual legs.  For details, see the `decision_manager_travel_leg#_dest` field description in _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link). 
   * @member {String} destination
   */
  exports.prototype['destination'] = undefined;
  /**
   * International Air Transport Association (IATA) code for the carrier for this leg of the trip. Required for each leg. Required for American Express SafeKey (U.S.) for travel-related requests.  For details, see `airline_leg#_carrier_code` in [Airline Processing Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Airline_SCMP_API/Airline_SCMP_API.pdf) 
   * @member {String} carrierCode
   */
  exports.prototype['carrierCode'] = undefined;
  /**
   * Departure date for the first leg of the trip. Format: YYYYMMDD. Required for American Express SafeKey (U.S.) for travel-related requests.  For details, see `airline_leg#_leg_departure_date` in [Airline Processing Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Airline_SCMP_API/Airline_SCMP_API.pdf) 
   * @member {String} departureDate
   */
  exports.prototype['departureDate'] = undefined;



  return exports;
}));


