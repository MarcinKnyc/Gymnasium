# GymApp.RegisterApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiRegisterAddRolePost**](RegisterApi.md#apiRegisterAddRolePost) | **POST** /api/Register/AddRole | 
[**apiRegisterAddRoleToSystemPost**](RegisterApi.md#apiRegisterAddRoleToSystemPost) | **POST** /api/Register/AddRoleToSystem | 
[**apiRegisterConfirmEmailPost**](RegisterApi.md#apiRegisterConfirmEmailPost) | **POST** /api/Register/ConfirmEmail | 
[**apiRegisterPost**](RegisterApi.md#apiRegisterPost) | **POST** /api/Register | 
[**apiRegisterRemoveRolePost**](RegisterApi.md#apiRegisterRemoveRolePost) | **POST** /api/Register/RemoveRole | 

<a name="apiRegisterAddRolePost"></a>
# **apiRegisterAddRolePost**
> apiRegisterAddRolePost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.RegisterApi();
let opts = { 
  'userEmail': "userEmail_example", // String | 
  'roleName': "roleName_example" // String | 
};
apiInstance.apiRegisterAddRolePost(opts, (error, data, response) => {
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
 **userEmail** | **String**|  | [optional] 
 **roleName** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiRegisterAddRoleToSystemPost"></a>
# **apiRegisterAddRoleToSystemPost**
> apiRegisterAddRoleToSystemPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.RegisterApi();
let opts = { 
  'roleName': "roleName_example" // String | 
};
apiInstance.apiRegisterAddRoleToSystemPost(opts, (error, data, response) => {
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
 **roleName** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiRegisterConfirmEmailPost"></a>
# **apiRegisterConfirmEmailPost**
> apiRegisterConfirmEmailPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.RegisterApi();
let opts = { 
  'email': "email_example", // String | 
  'emailCode': "emailCode_example" // String | 
};
apiInstance.apiRegisterConfirmEmailPost(opts, (error, data, response) => {
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
 **email** | **String**|  | [optional] 
 **emailCode** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiRegisterPost"></a>
# **apiRegisterPost**
> apiRegisterPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.RegisterApi();
let opts = { 
  'body': new GymApp.GymUserDAO() // GymUserDAO | 
};
apiInstance.apiRegisterPost(opts, (error, data, response) => {
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
 **body** | [**GymUserDAO**](GymUserDAO.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiRegisterRemoveRolePost"></a>
# **apiRegisterRemoveRolePost**
> apiRegisterRemoveRolePost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.RegisterApi();
let opts = { 
  'userEmail': "userEmail_example", // String | 
  'roleName': "roleName_example" // String | 
};
apiInstance.apiRegisterRemoveRolePost(opts, (error, data, response) => {
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
 **userEmail** | **String**|  | [optional] 
 **roleName** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

