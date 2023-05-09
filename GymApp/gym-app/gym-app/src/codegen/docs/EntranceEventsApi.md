# GymApp.EntranceEventsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiEntranceEventsGet**](EntranceEventsApi.md#apiEntranceEventsGet) | **GET** /api/EntranceEvents | 
[**apiEntranceEventsIdDelete**](EntranceEventsApi.md#apiEntranceEventsIdDelete) | **DELETE** /api/EntranceEvents/{id} | 
[**apiEntranceEventsIdGet**](EntranceEventsApi.md#apiEntranceEventsIdGet) | **GET** /api/EntranceEvents/{id} | 
[**apiEntranceEventsIdPut**](EntranceEventsApi.md#apiEntranceEventsIdPut) | **PUT** /api/EntranceEvents/{id} | 
[**apiEntranceEventsPost**](EntranceEventsApi.md#apiEntranceEventsPost) | **POST** /api/EntranceEvents | 

<a name="apiEntranceEventsGet"></a>
# **apiEntranceEventsGet**
> [EntranceEvent] apiEntranceEventsGet()



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.EntranceEventsApi();
apiInstance.apiEntranceEventsGet((error, data, response) => {
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

[**[EntranceEvent]**](EntranceEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiEntranceEventsIdDelete"></a>
# **apiEntranceEventsIdDelete**
> apiEntranceEventsIdDelete(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.EntranceEventsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiEntranceEventsIdDelete(id, (error, data, response) => {
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

<a name="apiEntranceEventsIdGet"></a>
# **apiEntranceEventsIdGet**
> EntranceEvent apiEntranceEventsIdGet(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.EntranceEventsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiEntranceEventsIdGet(id, (error, data, response) => {
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

[**EntranceEvent**](EntranceEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiEntranceEventsIdPut"></a>
# **apiEntranceEventsIdPut**
> apiEntranceEventsIdPut(id, opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.EntranceEventsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new GymApp.EntranceEvent() // EntranceEvent | 
};
apiInstance.apiEntranceEventsIdPut(id, opts, (error, data, response) => {
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
 **body** | [**EntranceEvent**](EntranceEvent.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiEntranceEventsPost"></a>
# **apiEntranceEventsPost**
> EntranceEvent apiEntranceEventsPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.EntranceEventsApi();
let opts = { 
  'body': new GymApp.EntranceEvent() // EntranceEvent | 
};
apiInstance.apiEntranceEventsPost(opts, (error, data, response) => {
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
 **body** | [**EntranceEvent**](EntranceEvent.md)|  | [optional] 

### Return type

[**EntranceEvent**](EntranceEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

