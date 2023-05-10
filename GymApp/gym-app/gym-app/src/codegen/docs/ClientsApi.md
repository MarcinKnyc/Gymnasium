# GymApp.ClientsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiClientsGet**](ClientsApi.md#apiClientsGet) | **GET** /api/Clients | 
[**apiClientsIdDelete**](ClientsApi.md#apiClientsIdDelete) | **DELETE** /api/Clients/{id} | 
[**apiClientsIdGet**](ClientsApi.md#apiClientsIdGet) | **GET** /api/Clients/{id} | 
[**apiClientsIdPut**](ClientsApi.md#apiClientsIdPut) | **PUT** /api/Clients/{id} | 
[**apiClientsPost**](ClientsApi.md#apiClientsPost) | **POST** /api/Clients | 

<a name="apiClientsGet"></a>
# **apiClientsGet**
> [Client] apiClientsGet()



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.ClientsApi();
apiInstance.apiClientsGet((error, data, response) => {
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

[**[Client]**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiClientsIdDelete"></a>
# **apiClientsIdDelete**
> apiClientsIdDelete(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.ClientsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiClientsIdDelete(id, (error, data, response) => {
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

<a name="apiClientsIdGet"></a>
# **apiClientsIdGet**
> Client apiClientsIdGet(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.ClientsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiClientsIdGet(id, (error, data, response) => {
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

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiClientsIdPut"></a>
# **apiClientsIdPut**
> apiClientsIdPut(id, opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.ClientsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new GymApp.Client() // Client | 
};
apiInstance.apiClientsIdPut(id, opts, (error, data, response) => {
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
 **body** | [**Client**](Client.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiClientsPost"></a>
# **apiClientsPost**
> Client apiClientsPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.ClientsApi();
let opts = { 
  'body': new GymApp.Client() // Client | 
};
apiInstance.apiClientsPost(opts, (error, data, response) => {
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
 **body** | [**Client**](Client.md)|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

