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
    define(['ApiClient', 'model/CreateSubscriptionRequest', 'model/InlineResponse20010', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/InlineResponse2008', 'model/InlineResponse2009', 'model/InlineResponse2011', 'model/InlineResponse202', 'model/InlineResponse2021', 'model/InlineResponse4001', 'model/InlineResponse4002', 'model/InlineResponse404', 'model/PtsV2PaymentsPost502Response', 'model/UpdateSubscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateSubscriptionRequest'), require('../model/InlineResponse20010'), require('../model/InlineResponse2006'), require('../model/InlineResponse2007'), require('../model/InlineResponse2008'), require('../model/InlineResponse2009'), require('../model/InlineResponse2011'), require('../model/InlineResponse202'), require('../model/InlineResponse2021'), require('../model/InlineResponse4001'), require('../model/InlineResponse4002'), require('../model/InlineResponse404'), require('../model/PtsV2PaymentsPost502Response'), require('../model/UpdateSubscription'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.SubscriptionsApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreateSubscriptionRequest, root.CyberSource.InlineResponse20010, root.CyberSource.InlineResponse2006, root.CyberSource.InlineResponse2007, root.CyberSource.InlineResponse2008, root.CyberSource.InlineResponse2009, root.CyberSource.InlineResponse2011, root.CyberSource.InlineResponse202, root.CyberSource.InlineResponse2021, root.CyberSource.InlineResponse4001, root.CyberSource.InlineResponse4002, root.CyberSource.InlineResponse404, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.UpdateSubscription);
  }
}(this, function(ApiClient, CreateSubscriptionRequest, InlineResponse20010, InlineResponse2006, InlineResponse2007, InlineResponse2008, InlineResponse2009, InlineResponse2011, InlineResponse202, InlineResponse2021, InlineResponse4001, InlineResponse4002, InlineResponse404, PtsV2PaymentsPost502Response, UpdateSubscription) {
  'use strict';

  /**
   * Subscriptions service.
   * @module api/SubscriptionsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new SubscriptionsApi. 
   * @alias module:api/SubscriptionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the activateSubscription operation.
     * @callback module:api/SubscriptionsApi~activateSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate a Subscription
     * Activate a &#x60;CANCELLED&#x60; Or &#x60;SUSPENDED&#x60; Subscription 
     * @param {String} id Subscription Id
     * @param {module:api/SubscriptionsApi~activateSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2009}
     */
    this.activateSubscription = function(id, callback) {
      var postBody = null;
      if ('POST' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling activateSubscription");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/rbs/v1/subscriptions/{id}/activate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelSubscription operation.
     * @callback module:api/SubscriptionsApi~cancelSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse202} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a Subscription
     * Cancel a Subscription
     * @param {String} id Subscription Id
     * @param {module:api/SubscriptionsApi~cancelSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse202}
     */
    this.cancelSubscription = function(id, callback) {
      var postBody = null;
      if ('POST' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelSubscription");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = InlineResponse202;

      return this.apiClient.callApi(
        '/rbs/v1/subscriptions/{id}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createSubscription operation.
     * @callback module:api/SubscriptionsApi~createSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Subscription
     * Create a Recurring Billing Subscription
     * @param {module:model/CreateSubscriptionRequest} createSubscriptionRequest 
     * @param {module:api/SubscriptionsApi~createSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2011}
     */
    this.createSubscription = function(createSubscriptionRequest, callback) {
      var postBody = createSubscriptionRequest;

      // verify the required parameter 'createSubscriptionRequest' is set
      if (createSubscriptionRequest === undefined || createSubscriptionRequest === null) {
        throw new Error("Missing the required parameter 'createSubscriptionRequest' when calling createSubscription");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = InlineResponse2011;

      return this.apiClient.callApi(
        '/rbs/v1/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllSubscriptions operation.
     * @callback module:api/SubscriptionsApi~getAllSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a List of Subscriptions
     * Retrieve Subscriptions by Subscription Code &amp; Subscription Status. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Page offset number.
     * @param {Number} opts.limit Number of items to be returned. Default - &#x60;20&#x60;, Max - &#x60;100&#x60; 
     * @param {String} opts.code Filter by Subscription Code
     * @param {String} opts.status Filter by Subscription Status
     * @param {module:api/SubscriptionsApi~getAllSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    this.getAllSubscriptions = function(opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'code': opts['code'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/rbs/v1/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscription operation.
     * @callback module:api/SubscriptionsApi~getSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Subscription
     * Get a Subscription by Subscription Id
     * @param {String} id Subscription Id
     * @param {module:api/SubscriptionsApi~getSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */
    this.getSubscription = function(id, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubscription");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/rbs/v1/subscriptions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscriptionCode operation.
     * @callback module:api/SubscriptionsApi~getSubscriptionCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Subscription Code
     * Get a Unique Subscription Code
     * @param {module:api/SubscriptionsApi~getSubscriptionCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */
    this.getSubscriptionCode = function(callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = InlineResponse20010;

      return this.apiClient.callApi(
        '/rbs/v1/subscriptions/code', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suspendSubscription operation.
     * @callback module:api/SubscriptionsApi~suspendSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2021} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Suspend a Subscription
     * Suspend a Subscription
     * @param {String} id Subscription Id
     * @param {module:api/SubscriptionsApi~suspendSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2021}
     */
    this.suspendSubscription = function(id, callback) {
      var postBody = null;
      if ('POST' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling suspendSubscription");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = InlineResponse2021;

      return this.apiClient.callApi(
        '/rbs/v1/subscriptions/{id}/suspend', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSubscription operation.
     * @callback module:api/SubscriptionsApi~updateSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Subscription
     * Update a Subscription by Subscription Id
     * @param {String} id Subscription Id
     * @param {module:model/UpdateSubscription} updateSubscription Update Subscription
     * @param {module:api/SubscriptionsApi~updateSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2008}
     */
    this.updateSubscription = function(id, updateSubscription, callback) {
      var postBody = updateSubscription;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSubscription");
      }

      // verify the required parameter 'updateSubscription' is set
      if (updateSubscription === undefined || updateSubscription === null) {
        throw new Error("Missing the required parameter 'updateSubscription' when calling updateSubscription");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/rbs/v1/subscriptions/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
