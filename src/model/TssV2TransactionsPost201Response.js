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
    define(['ApiClient', 'model/PtsV2IncrementalAuthorizationPatch201ResponseLinks', 'model/TssV2TransactionsPost201ResponseEmbedded'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2IncrementalAuthorizationPatch201ResponseLinks'), require('./TssV2TransactionsPost201ResponseEmbedded'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsPost201Response = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponseLinks, root.CyberSource.TssV2TransactionsPost201ResponseEmbedded);
  }
}(this, function(ApiClient, PtsV2IncrementalAuthorizationPatch201ResponseLinks, TssV2TransactionsPost201ResponseEmbedded) {
  'use strict';




  /**
   * The TssV2TransactionsPost201Response model module.
   * @module model/TssV2TransactionsPost201Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsPost201Response</code>.
   * @alias module:model/TssV2TransactionsPost201Response
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>TssV2TransactionsPost201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsPost201Response} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsPost201Response} The populated <code>TssV2TransactionsPost201Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('searchId')) {
        obj['searchId'] = ApiClient.convertToType(data['searchId'], 'String');
      }
      if (data.hasOwnProperty('save')) {
        obj['save'] = ApiClient.convertToType(data['save'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('totalCount')) {
        obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('_embedded')) {
        obj['_embedded'] = TssV2TransactionsPost201ResponseEmbedded.constructFromObject(data['_embedded']);
      }
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = PtsV2IncrementalAuthorizationPatch201ResponseLinks.constructFromObject(data['_links']);
      }
    }
    return obj;
  }

  /**
   * An unique identification number assigned by CyberSource to identify each Search request.
   * @member {String} searchId
   */
  exports.prototype['searchId'] = undefined;
  /**
   * save or not save.
   * @member {Boolean} save
   */
  exports.prototype['save'] = undefined;
  /**
   * The description for this field is not available. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Time Zone in ISO format.
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * transaction search query string.
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * offset.
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * Limit on number of results.
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * A comma separated list of the following form - fieldName1 asc or desc, fieldName2 asc or desc, etc.
   * @member {String} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * Results for this page, this could be below the limit.
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * Total number of results.
   * @member {Number} totalCount
   */
  exports.prototype['totalCount'] = undefined;
  /**
   * The status of the submitted transaction.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` Example `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by authorization service. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbedded} _embedded
   */
  exports.prototype['_embedded'] = undefined;
  /**
   * @member {module:model/PtsV2IncrementalAuthorizationPatch201ResponseLinks} _links
   */
  exports.prototype['_links'] = undefined;



  return exports;
}));


