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
import {Entrance} from './Entrance';
import {Gym} from './Gym';

/**
 * The Sector model module.
 * @module model/Sector
 * @version 1.0
 */
export class Sector {
  /**
   * Constructs a new <code>Sector</code>.
   * @alias module:model/Sector
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Sector</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Sector} obj Optional instance to populate.
   * @return {module:model/Sector} The populated <code>Sector</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Sector();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('ownerId'))
        obj.ownerId = ApiClient.convertToType(data['ownerId'], 'String');
      if (data.hasOwnProperty('sectorName'))
        obj.sectorName = ApiClient.convertToType(data['sectorName'], 'String');
      if (data.hasOwnProperty('gymId'))
        obj.gymId = ApiClient.convertToType(data['gymId'], 'String');
      if (data.hasOwnProperty('gym'))
        obj.gym = Gym.constructFromObject(data['gym']);
      if (data.hasOwnProperty('entrances'))
        obj.entrances = ApiClient.convertToType(data['entrances'], [Entrance]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Sector.prototype.id = undefined;

/**
 * @member {String} ownerId
 */
Sector.prototype.ownerId = undefined;

/**
 * @member {String} sectorName
 */
Sector.prototype.sectorName = undefined;

/**
 * @member {String} gymId
 */
Sector.prototype.gymId = undefined;

/**
 * @member {module:model/Gym} gym
 */
Sector.prototype.gym = undefined;

/**
 * @member {Array.<module:model/Entrance>} entrances
 */
Sector.prototype.entrances = undefined;
