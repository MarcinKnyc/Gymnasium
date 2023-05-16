/*
 * GymApp
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {Receptionist} from './Receptionist';
import {Sector} from './Sector';

/**
 * The Gym model module.
 * @module model/Gym
 * @version 1.0
 */
export class Gym {
  /**
   * Constructs a new <code>Gym</code>.
   * @alias module:model/Gym
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Gym</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Gym} obj Optional instance to populate.
   * @return {module:model/Gym} The populated <code>Gym</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Gym();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('ownerId'))
        obj.ownerId = ApiClient.convertToType(data['ownerId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('sectors'))
        obj.sectors = ApiClient.convertToType(data['sectors'], [Sector]);
      if (data.hasOwnProperty('receptionists'))
        obj.receptionists = ApiClient.convertToType(data['receptionists'], [Receptionist]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Gym.prototype.id = undefined;

/**
 * @member {String} ownerId
 */
Gym.prototype.ownerId = undefined;

/**
 * @member {String} name
 */
Gym.prototype.name = undefined;

/**
 * @member {String} city
 */
Gym.prototype.city = undefined;

/**
 * @member {String} address
 */
Gym.prototype.address = undefined;

/**
 * @member {Array.<module:model/Sector>} sectors
 */
Gym.prototype.sectors = undefined;

/**
 * @member {Array.<module:model/Receptionist>} receptionists
 */
Gym.prototype.receptionists = undefined;
