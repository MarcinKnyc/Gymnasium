# GymApp.ReceptionistsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiReceptionistsGet**](ReceptionistsApi.md#apiReceptionistsGet) | **GET** /api/Receptionists | 
[**apiReceptionistsIdDelete**](ReceptionistsApi.md#apiReceptionistsIdDelete) | **DELETE** /api/Receptionists/{id} | 
[**apiReceptionistsIdGet**](ReceptionistsApi.md#apiReceptionistsIdGet) | **GET** /api/Receptionists/{id} | 
[**apiReceptionistsIdPut**](ReceptionistsApi.md#apiReceptionistsIdPut) | **PUT** /api/Receptionists/{id} | 
[**apiReceptionistsPost**](ReceptionistsApi.md#apiReceptionistsPost) | **POST** /api/Receptionists | 

<a name="apiReceptionistsGet"></a>
# **apiReceptionistsGet**
> [Receptionist] apiReceptionistsGet()



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.ReceptionistsApi();
apiInstance.apiReceptionistsGet((error, data, response) => {
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

[**[Receptionist]**](Receptionist.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiReceptionistsIdDelete"></a>
# **apiReceptionistsIdDelete**
> apiReceptionistsIdDelete(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.ReceptionistsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiReceptionistsIdDelete(id, (error, data, response) => {
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

<a name="apiReceptionistsIdGet"></a>
# **apiReceptionistsIdGet**
> Receptionist apiReceptionistsIdGet(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.ReceptionistsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiReceptionistsIdGet(id, (error, data, response) => {
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

[**Receptionist**](Receptionist.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiReceptionistsIdPut"></a>
# **apiReceptionistsIdPut**
> apiReceptionistsIdPut(id, opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.ReceptionistsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new GymApp.Receptionist() // Receptionist | 
};
apiInstance.apiReceptionistsIdPut(id, opts, (error, data, response) => {
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
 **body** | [**Receptionist**](Receptionist.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiReceptionistsPost"></a>
# **apiReceptionistsPost**
> Receptionist apiReceptionistsPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.ReceptionistsApi();
let opts = { 
  'body': new GymApp.Receptionist() // Receptionist | 
};
apiInstance.apiReceptionistsPost(opts, (error, data, response) => {
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
 **body** | [**Receptionist**](Receptionist.md)|  | [optional] 

### Return type

[**Receptionist**](Receptionist.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

