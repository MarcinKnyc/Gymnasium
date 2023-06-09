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
import {ApiClient} from './ApiClient';
import {Client} from './model/Client';
import {EmailDto} from './model/EmailDto';
import {Entrance} from './model/Entrance';
import {EntranceEvent} from './model/EntranceEvent';
import {Gym} from './model/Gym';
import {GymUserDAO} from './model/GymUserDAO';
import {Pass} from './model/Pass';
import {PassBoughtEvent} from './model/PassBoughtEvent';
import {Receptionist} from './model/Receptionist';
import {Sector} from './model/Sector';
import {WeatherForecast} from './model/WeatherForecast';
import {ClientsApi} from './api/ClientsApi';
import {EmailApi} from './api/EmailApi';
import {EntranceEventsApi} from './api/EntranceEventsApi';
import {EntrancesApi} from './api/EntrancesApi';
import {GymsApi} from './api/GymsApi';
import {LoginApi} from './api/LoginApi';
import {PassBoughtEventsApi} from './api/PassBoughtEventsApi';
import {PassesApi} from './api/PassesApi';
import {ReceptionistsApi} from './api/ReceptionistsApi';
import {RegisterApi} from './api/RegisterApi';
import {SectorsApi} from './api/SectorsApi';
import {WeatherForecastApi} from './api/WeatherForecastApi';

/**
* Object.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GymApp = require('index'); // See note below*.
* var xxxSvc = new GymApp.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GymApp.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GymApp.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GymApp.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Client model constructor.
     * @property {module:model/Client}
     */
    Client,

    /**
     * The EmailDto model constructor.
     * @property {module:model/EmailDto}
     */
    EmailDto,

    /**
     * The Entrance model constructor.
     * @property {module:model/Entrance}
     */
    Entrance,

    /**
     * The EntranceEvent model constructor.
     * @property {module:model/EntranceEvent}
     */
    EntranceEvent,

    /**
     * The Gym model constructor.
     * @property {module:model/Gym}
     */
    Gym,

    /**
     * The GymUserDAO model constructor.
     * @property {module:model/GymUserDAO}
     */
    GymUserDAO,

    /**
     * The Pass model constructor.
     * @property {module:model/Pass}
     */
    Pass,

    /**
     * The PassBoughtEvent model constructor.
     * @property {module:model/PassBoughtEvent}
     */
    PassBoughtEvent,

    /**
     * The Receptionist model constructor.
     * @property {module:model/Receptionist}
     */
    Receptionist,

    /**
     * The Sector model constructor.
     * @property {module:model/Sector}
     */
    Sector,

    /**
     * The WeatherForecast model constructor.
     * @property {module:model/WeatherForecast}
     */
    WeatherForecast,

    /**
    * The ClientsApi service constructor.
    * @property {module:api/ClientsApi}
    */
    ClientsApi,

    /**
    * The EmailApi service constructor.
    * @property {module:api/EmailApi}
    */
    EmailApi,

    /**
    * The EntranceEventsApi service constructor.
    * @property {module:api/EntranceEventsApi}
    */
    EntranceEventsApi,

    /**
    * The EntrancesApi service constructor.
    * @property {module:api/EntrancesApi}
    */
    EntrancesApi,

    /**
    * The GymsApi service constructor.
    * @property {module:api/GymsApi}
    */
    GymsApi,

    /**
    * The LoginApi service constructor.
    * @property {module:api/LoginApi}
    */
    LoginApi,

    /**
    * The PassBoughtEventsApi service constructor.
    * @property {module:api/PassBoughtEventsApi}
    */
    PassBoughtEventsApi,

    /**
    * The PassesApi service constructor.
    * @property {module:api/PassesApi}
    */
    PassesApi,

    /**
    * The ReceptionistsApi service constructor.
    * @property {module:api/ReceptionistsApi}
    */
    ReceptionistsApi,

    /**
    * The RegisterApi service constructor.
    * @property {module:api/RegisterApi}
    */
    RegisterApi,

    /**
    * The SectorsApi service constructor.
    * @property {module:api/SectorsApi}
    */
    SectorsApi,

    /**
    * The WeatherForecastApi service constructor.
    * @property {module:api/WeatherForecastApi}
    */
    WeatherForecastApi
};
