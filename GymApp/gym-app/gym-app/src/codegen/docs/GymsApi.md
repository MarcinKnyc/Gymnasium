# GymApp.GymsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiGymsGet**](GymsApi.md#apiGymsGet) | **GET** /api/Gyms | 
[**apiGymsIdDelete**](GymsApi.md#apiGymsIdDelete) | **DELETE** /api/Gyms/{id} | 
[**apiGymsIdGet**](GymsApi.md#apiGymsIdGet) | **GET** /api/Gyms/{id} | 
[**apiGymsIdPut**](GymsApi.md#apiGymsIdPut) | **PUT** /api/Gyms/{id} | 
[**apiGymsPost**](GymsApi.md#apiGymsPost) | **POST** /api/Gyms | 

<a name="apiGymsGet"></a>
# **apiGymsGet**
> [Gym] apiGymsGet()



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.GymsApi();
apiInstance.apiGymsGet((error, data, response) => {
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

[**[Gym]**](Gym.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiGymsIdDelete"></a>
# **apiGymsIdDelete**
> apiGymsIdDelete(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.GymsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiGymsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiGymsIdGet"></a>
# **apiGymsIdGet**
> Gym apiGymsIdGet(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.GymsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiGymsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**Gym**](Gym.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiGymsIdPut"></a>
# **apiGymsIdPut**
> apiGymsIdPut(id, opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.GymsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new GymApp.Gym() // Gym | 
};
apiInstance.apiGymsIdPut(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **body** | [**Gym**](Gym.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiGymsPost"></a>
# **apiGymsPost**
> Gym apiGymsPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.GymsApi();
let opts = { 
  'body': new GymApp.Gym() // Gym | 
};
apiInstance.apiGymsPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Gym**](Gym.md)|  | [optional] 

### Return type

[**Gym**](Gym.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

