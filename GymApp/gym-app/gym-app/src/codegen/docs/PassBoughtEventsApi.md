# GymApp.PassBoughtEventsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPassBoughtEventsGet**](PassBoughtEventsApi.md#apiPassBoughtEventsGet) | **GET** /api/PassBoughtEvents | 
[**apiPassBoughtEventsIdDelete**](PassBoughtEventsApi.md#apiPassBoughtEventsIdDelete) | **DELETE** /api/PassBoughtEvents/{id} | 
[**apiPassBoughtEventsIdGet**](PassBoughtEventsApi.md#apiPassBoughtEventsIdGet) | **GET** /api/PassBoughtEvents/{id} | 
[**apiPassBoughtEventsIdPut**](PassBoughtEventsApi.md#apiPassBoughtEventsIdPut) | **PUT** /api/PassBoughtEvents/{id} | 
[**apiPassBoughtEventsPost**](PassBoughtEventsApi.md#apiPassBoughtEventsPost) | **POST** /api/PassBoughtEvents | 

<a name="apiPassBoughtEventsGet"></a>
# **apiPassBoughtEventsGet**
> [PassBoughtEvent] apiPassBoughtEventsGet()



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.PassBoughtEventsApi();
apiInstance.apiPassBoughtEventsGet((error, data, response) => {
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

[**[PassBoughtEvent]**](PassBoughtEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiPassBoughtEventsIdDelete"></a>
# **apiPassBoughtEventsIdDelete**
> apiPassBoughtEventsIdDelete(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.PassBoughtEventsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiPassBoughtEventsIdDelete(id, (error, data, response) => {
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

<a name="apiPassBoughtEventsIdGet"></a>
# **apiPassBoughtEventsIdGet**
> PassBoughtEvent apiPassBoughtEventsIdGet(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.PassBoughtEventsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiPassBoughtEventsIdGet(id, (error, data, response) => {
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

[**PassBoughtEvent**](PassBoughtEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiPassBoughtEventsIdPut"></a>
# **apiPassBoughtEventsIdPut**
> apiPassBoughtEventsIdPut(id, opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.PassBoughtEventsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new GymApp.PassBoughtEvent() // PassBoughtEvent | 
};
apiInstance.apiPassBoughtEventsIdPut(id, opts, (error, data, response) => {
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
 **body** | [**PassBoughtEvent**](PassBoughtEvent.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiPassBoughtEventsPost"></a>
# **apiPassBoughtEventsPost**
> PassBoughtEvent apiPassBoughtEventsPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.PassBoughtEventsApi();
let opts = { 
  'body': new GymApp.PassBoughtEvent() // PassBoughtEvent | 
};
apiInstance.apiPassBoughtEventsPost(opts, (error, data, response) => {
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
 **body** | [**PassBoughtEvent**](PassBoughtEvent.md)|  | [optional] 

### Return type

[**PassBoughtEvent**](PassBoughtEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

