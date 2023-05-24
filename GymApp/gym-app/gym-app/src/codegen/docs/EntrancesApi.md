# GymApp.EntrancesApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiEntrancesGet**](EntrancesApi.md#apiEntrancesGet) | **GET** /api/Entrances | 
[**apiEntrancesIdDelete**](EntrancesApi.md#apiEntrancesIdDelete) | **DELETE** /api/Entrances/{id} | 
[**apiEntrancesIdGet**](EntrancesApi.md#apiEntrancesIdGet) | **GET** /api/Entrances/{id} | 
[**apiEntrancesIdPut**](EntrancesApi.md#apiEntrancesIdPut) | **PUT** /api/Entrances/{id} | 
[**apiEntrancesPost**](EntrancesApi.md#apiEntrancesPost) | **POST** /api/Entrances | 

<a name="apiEntrancesGet"></a>
# **apiEntrancesGet**
> [Entrance] apiEntrancesGet()



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.EntrancesApi();
apiInstance.apiEntrancesGet((error, data, response) => {
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

[**[Entrance]**](Entrance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiEntrancesIdDelete"></a>
# **apiEntrancesIdDelete**
> apiEntrancesIdDelete(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.EntrancesApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiEntrancesIdDelete(id, (error, data, response) => {
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

<a name="apiEntrancesIdGet"></a>
# **apiEntrancesIdGet**
> Entrance apiEntrancesIdGet(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.EntrancesApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiEntrancesIdGet(id, (error, data, response) => {
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

[**Entrance**](Entrance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiEntrancesIdPut"></a>
# **apiEntrancesIdPut**
> apiEntrancesIdPut(id, opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.EntrancesApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new GymApp.Entrance() // Entrance | 
};
apiInstance.apiEntrancesIdPut(id, opts, (error, data, response) => {
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
 **body** | [**Entrance**](Entrance.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiEntrancesPost"></a>
# **apiEntrancesPost**
> Entrance apiEntrancesPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.EntrancesApi();
let opts = { 
  'body': new GymApp.Entrance() // Entrance | 
};
apiInstance.apiEntrancesPost(opts, (error, data, response) => {
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
 **body** | [**Entrance**](Entrance.md)|  | [optional] 

### Return type

[**Entrance**](Entrance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

