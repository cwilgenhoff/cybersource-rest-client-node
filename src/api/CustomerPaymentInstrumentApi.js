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
    define(['ApiClient', 'model/InlineResponse400', 'model/PatchCustomerPaymentInstrumentRequest', 'model/PaymentInstrumentListForCustomer', 'model/PostCustomerPaymentInstrumentRequest', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrument'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse400'), require('../model/PatchCustomerPaymentInstrumentRequest'), require('../model/PaymentInstrumentListForCustomer'), require('../model/PostCustomerPaymentInstrumentRequest'), require('../model/Tmsv2customersEmbeddedDefaultPaymentInstrument'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CustomerPaymentInstrumentApi = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse400, root.CyberSource.PatchCustomerPaymentInstrumentRequest, root.CyberSource.PaymentInstrumentListForCustomer, root.CyberSource.PostCustomerPaymentInstrumentRequest, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrument);
  }
}(this, function(ApiClient, InlineResponse400, PatchCustomerPaymentInstrumentRequest, PaymentInstrumentListForCustomer, PostCustomerPaymentInstrumentRequest, Tmsv2customersEmbeddedDefaultPaymentInstrument) {
  'use strict';

  /**
   * CustomerPaymentInstrument service.
   * @module api/CustomerPaymentInstrumentApi
   * @version 0.0.1
   */

  /**
   * Constructs a new CustomerPaymentInstrumentApi. 
   * @alias module:api/CustomerPaymentInstrumentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the deleteCustomerPaymentInstrument operation.
     * @callback module:api/CustomerPaymentInstrumentApi~deleteCustomerPaymentInstrumentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Customer Payment Instrument
     * @param {String} customerTokenId The TokenId of a customer.
     * @param {String} paymentInstrumentTokenId The TokenId of a payment instrument.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {module:api/CustomerPaymentInstrumentApi~deleteCustomerPaymentInstrumentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomerPaymentInstrument = function(customerTokenId, paymentInstrumentTokenId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerTokenId' is set
      if (customerTokenId === undefined || customerTokenId === null) {
        throw new Error("Missing the required parameter 'customerTokenId' when calling deleteCustomerPaymentInstrument");
      }

      // verify the required parameter 'paymentInstrumentTokenId' is set
      if (paymentInstrumentTokenId === undefined || paymentInstrumentTokenId === null) {
        throw new Error("Missing the required parameter 'paymentInstrumentTokenId' when calling deleteCustomerPaymentInstrument");
      }


      var pathParams = {
        'customerTokenId': customerTokenId,
        'paymentInstrumentTokenId': paymentInstrumentTokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tms/v2/customers/{customerTokenId}/payment-instruments/{paymentInstrumentTokenId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerPaymentInstrument operation.
     * @callback module:api/CustomerPaymentInstrumentApi~getCustomerPaymentInstrumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Customer Payment Instrument
     * @param {String} customerTokenId The TokenId of a customer.
     * @param {String} paymentInstrumentTokenId The TokenId of a payment instrument.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {module:api/CustomerPaymentInstrumentApi~getCustomerPaymentInstrumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument}
     */
    this.getCustomerPaymentInstrument = function(customerTokenId, paymentInstrumentTokenId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerTokenId' is set
      if (customerTokenId === undefined || customerTokenId === null) {
        throw new Error("Missing the required parameter 'customerTokenId' when calling getCustomerPaymentInstrument");
      }

      // verify the required parameter 'paymentInstrumentTokenId' is set
      if (paymentInstrumentTokenId === undefined || paymentInstrumentTokenId === null) {
        throw new Error("Missing the required parameter 'paymentInstrumentTokenId' when calling getCustomerPaymentInstrument");
      }


      var pathParams = {
        'customerTokenId': customerTokenId,
        'paymentInstrumentTokenId': paymentInstrumentTokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Tmsv2customersEmbeddedDefaultPaymentInstrument;

      return this.apiClient.callApi(
        '/tms/v2/customers/{customerTokenId}/payment-instruments/{paymentInstrumentTokenId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerPaymentInstrumentsList operation.
     * @callback module:api/CustomerPaymentInstrumentApi~getCustomerPaymentInstrumentsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentInstrumentListForCustomer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payment Instruments for a Customer
     * @param {String} customerTokenId The TokenId of a customer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {Number} opts.offset Starting record in zero-based dataset that should be returned as the first object in the array. Default is 0. (default to 0)
     * @param {Number} opts.limit The maximum number that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. (default to 20)
     * @param {module:api/CustomerPaymentInstrumentApi~getCustomerPaymentInstrumentsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentInstrumentListForCustomer}
     */
    this.getCustomerPaymentInstrumentsList = function(customerTokenId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerTokenId' is set
      if (customerTokenId === undefined || customerTokenId === null) {
        throw new Error("Missing the required parameter 'customerTokenId' when calling getCustomerPaymentInstrumentsList");
      }


      var pathParams = {
        'customerTokenId': customerTokenId
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PaymentInstrumentListForCustomer;

      return this.apiClient.callApi(
        '/tms/v2/customers/{customerTokenId}/payment-instruments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchCustomersPaymentInstrument operation.
     * @callback module:api/CustomerPaymentInstrumentApi~patchCustomersPaymentInstrumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Customer Payment Instrument
     * @param {String} customerTokenId The TokenId of a customer.
     * @param {String} paymentInstrumentTokenId The TokenId of a payment instrument.
     * @param {module:model/PatchCustomerPaymentInstrumentRequest} patchCustomerPaymentInstrumentRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {String} opts.ifMatch Contains an ETag value from a GET request to make the request conditional.
     * @param {module:api/CustomerPaymentInstrumentApi~patchCustomersPaymentInstrumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument}
     */
    this.patchCustomersPaymentInstrument = function(customerTokenId, paymentInstrumentTokenId, patchCustomerPaymentInstrumentRequest, opts, callback) {
      opts = opts || {};
      var postBody = patchCustomerPaymentInstrumentRequest;

      // verify the required parameter 'customerTokenId' is set
      if (customerTokenId === undefined || customerTokenId === null) {
        throw new Error("Missing the required parameter 'customerTokenId' when calling patchCustomersPaymentInstrument");
      }

      // verify the required parameter 'paymentInstrumentTokenId' is set
      if (paymentInstrumentTokenId === undefined || paymentInstrumentTokenId === null) {
        throw new Error("Missing the required parameter 'paymentInstrumentTokenId' when calling patchCustomersPaymentInstrument");
      }

      // verify the required parameter 'patchCustomerPaymentInstrumentRequest' is set
      if (patchCustomerPaymentInstrumentRequest === undefined || patchCustomerPaymentInstrumentRequest === null) {
        throw new Error("Missing the required parameter 'patchCustomerPaymentInstrumentRequest' when calling patchCustomersPaymentInstrument");
      }


      var pathParams = {
        'customerTokenId': customerTokenId,
        'paymentInstrumentTokenId': paymentInstrumentTokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId'],
        'if-match': opts['ifMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Tmsv2customersEmbeddedDefaultPaymentInstrument;

      return this.apiClient.callApi(
        '/tms/v2/customers/{customerTokenId}/payment-instruments/{paymentInstrumentTokenId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postCustomerPaymentInstrument operation.
     * @callback module:api/CustomerPaymentInstrumentApi~postCustomerPaymentInstrumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Customer Payment Instrument
     * Include an existing TMS Customer &amp; Instrument Identifier token id in the request. * A Customer token can be created by calling: **POST *_/tms/v2/customers*** * An Instrument Identifier token can be created by calling: **POST *_/tms/v1/instrumentidentifiers*** 
     * @param {String} customerTokenId The TokenId of a customer.
     * @param {module:model/PostCustomerPaymentInstrumentRequest} postCustomerPaymentInstrumentRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {module:api/CustomerPaymentInstrumentApi~postCustomerPaymentInstrumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument}
     */
    this.postCustomerPaymentInstrument = function(customerTokenId, postCustomerPaymentInstrumentRequest, opts, callback) {
      opts = opts || {};
      var postBody = postCustomerPaymentInstrumentRequest;

      // verify the required parameter 'customerTokenId' is set
      if (customerTokenId === undefined || customerTokenId === null) {
        throw new Error("Missing the required parameter 'customerTokenId' when calling postCustomerPaymentInstrument");
      }

      // verify the required parameter 'postCustomerPaymentInstrumentRequest' is set
      if (postCustomerPaymentInstrumentRequest === undefined || postCustomerPaymentInstrumentRequest === null) {
        throw new Error("Missing the required parameter 'postCustomerPaymentInstrumentRequest' when calling postCustomerPaymentInstrument");
      }


      var pathParams = {
        'customerTokenId': customerTokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Tmsv2customersEmbeddedDefaultPaymentInstrument;

      return this.apiClient.callApi(
        '/tms/v2/customers/{customerTokenId}/payment-instruments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
