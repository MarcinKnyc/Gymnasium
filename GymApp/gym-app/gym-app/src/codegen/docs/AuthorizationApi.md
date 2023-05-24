# GymApp.AuthorizationApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthorizationLoginPost**](AuthorizationApi.md#apiAuthorizationLoginPost) | **POST** /api/Authorization/login | 
[**apiAuthorizationRegisterClientPost**](AuthorizationApi.md#apiAuthorizationRegisterClientPost) | **POST** /api/Authorization/registerClient | 

<a name="apiAuthorizationLoginPost"></a>
# **apiAuthorizationLoginPost**
> &#x27;String&#x27; apiAuthorizationLoginPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.AuthorizationApi();
let opts = { 
  'body': new GymApp.ClientDto() // ClientDto | 
};
apiInstance.apiAuthorizationLoginPost(opts, (error, data, response) => {
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
 **body** | [**ClientDto**](ClientDto.md)|  | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiAuthorizationRegisterClientPost"></a>
# **apiAuthorizationRegisterClientPost**
> Client apiAuthorizationRegisterClientPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.AuthorizationApi();
let opts = { 
  'body': new GymApp.ClientDto() // ClientDto | 
};
apiInstance.apiAuthorizationRegisterClientPost(opts, (error, data, response) => {
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
 **body** | [**ClientDto**](ClientDto.md)|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

