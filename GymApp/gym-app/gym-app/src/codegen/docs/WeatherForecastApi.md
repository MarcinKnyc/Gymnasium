# GymApp.WeatherForecastApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWeatherForecast**](WeatherForecastApi.md#getWeatherForecast) | **GET** /WeatherForecast | 

<a name="getWeatherForecast"></a>
# **getWeatherForecast**
> [WeatherForecast] getWeatherForecast()



### Example
```javascript
import {GymApp} from 'gym_app';
let defaultClient = GymApp.ApiClient.instance;

// Configure API key authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//oauth2.apiKeyPrefix = 'Token';

let apiInstance = new GymApp.WeatherForecastApi();
apiInstance.getWeatherForecast((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[WeatherForecast]**](WeatherForecast.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

