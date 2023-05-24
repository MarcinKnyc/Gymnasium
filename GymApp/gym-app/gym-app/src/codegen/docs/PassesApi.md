# GymApp.PassesApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPassesGet**](PassesApi.md#apiPassesGet) | **GET** /api/Passes | 
[**apiPassesIdDelete**](PassesApi.md#apiPassesIdDelete) | **DELETE** /api/Passes/{id} | 
[**apiPassesIdGet**](PassesApi.md#apiPassesIdGet) | **GET** /api/Passes/{id} | 
[**apiPassesIdPut**](PassesApi.md#apiPassesIdPut) | **PUT** /api/Passes/{id} | 
[**apiPassesPost**](PassesApi.md#apiPassesPost) | **POST** /api/Passes | 

<a name="apiPassesGet"></a>
# **apiPassesGet**
> [Pass] apiPassesGet()



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.PassesApi();
apiInstance.apiPassesGet((error, data, response) => {
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

[**[Pass]**](Pass.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiPassesIdDelete"></a>
# **apiPassesIdDelete**
> apiPassesIdDelete(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.PassesApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiPassesIdDelete(id, (error, data, response) => {
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

<a name="apiPassesIdGet"></a>
# **apiPassesIdGet**
> Pass apiPassesIdGet(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.PassesApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiPassesIdGet(id, (error, data, response) => {
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

[**Pass**](Pass.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiPassesIdPut"></a>
# **apiPassesIdPut**
> apiPassesIdPut(id, opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.PassesApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new GymApp.Pass() // Pass | 
};
apiInstance.apiPassesIdPut(id, opts, (error, data, response) => {
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
 **body** | [**Pass**](Pass.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiPassesPost"></a>
# **apiPassesPost**
> Pass apiPassesPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.PassesApi();
let opts = { 
  'body': new GymApp.Pass() // Pass | 
};
apiInstance.apiPassesPost(opts, (error, data, response) => {
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
 **body** | [**Pass**](Pass.md)|  | [optional] 

### Return type

[**Pass**](Pass.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

