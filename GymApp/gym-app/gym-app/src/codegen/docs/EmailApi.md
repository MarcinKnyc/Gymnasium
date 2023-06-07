# GymApp.EmailApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiEmailPost**](EmailApi.md#apiEmailPost) | **POST** /api/Email | 

<a name="apiEmailPost"></a>
# **apiEmailPost**
> apiEmailPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.EmailApi();
let opts = { 
  'body': new GymApp.EmailDto() // EmailDto | 
};
apiInstance.apiEmailPost(opts, (error, data, response) => {
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
 **body** | [**EmailDto**](EmailDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined

