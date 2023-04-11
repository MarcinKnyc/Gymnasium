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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

