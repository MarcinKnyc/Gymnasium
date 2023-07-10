/*
 * GymApp
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {GymUserDAO} from '../model/GymUserDAO';

/**
* Register service.
* @module api/RegisterApi
* @version 1.0
*/
export class RegisterApi {

    /**
    * Constructs a new RegisterApi. 
    * @alias module:api/RegisterApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiRegisterAddRolePost operation.
     * @callback moduleapi/RegisterApi~apiRegisterAddRolePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.userEmail 
     * @param {String} opts.roleName 
     * @param {module:api/RegisterApi~apiRegisterAddRolePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiRegisterAddRolePost(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'userEmail': opts['userEmail'],'roleName': opts['roleName']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/Register/AddRole', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiRegisterAddRoleToSystemPost operation.
     * @callback moduleapi/RegisterApi~apiRegisterAddRoleToSystemPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.roleName 
     * @param {module:api/RegisterApi~apiRegisterAddRoleToSystemPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiRegisterAddRoleToSystemPost(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'roleName': opts['roleName']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/Register/AddRoleToSystem', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiRegisterConfirmEmailPost operation.
     * @callback moduleapi/RegisterApi~apiRegisterConfirmEmailPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.email 
     * @param {String} opts.emailCode 
     * @param {module:api/RegisterApi~apiRegisterConfirmEmailPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiRegisterConfirmEmailPost(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'email': opts['email'],'email_code': opts['emailCode']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/Register/ConfirmEmail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiRegisterPost operation.
     * @callback moduleapi/RegisterApi~apiRegisterPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/GymUserDAO} opts.body 
     * @param {module:api/RegisterApi~apiRegisterPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiRegisterPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/Register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiRegisterRemoveRolePost operation.
     * @callback moduleapi/RegisterApi~apiRegisterRemoveRolePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.userEmail 
     * @param {String} opts.roleName 
     * @param {module:api/RegisterApi~apiRegisterRemoveRolePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiRegisterRemoveRolePost(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'userEmail': opts['userEmail'],'roleName': opts['roleName']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/Register/RemoveRole', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}