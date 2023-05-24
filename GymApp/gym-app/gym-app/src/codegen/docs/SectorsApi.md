# GymApp.SectorsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiSectorsGet**](SectorsApi.md#apiSectorsGet) | **GET** /api/Sectors | 
[**apiSectorsIdDelete**](SectorsApi.md#apiSectorsIdDelete) | **DELETE** /api/Sectors/{id} | 
[**apiSectorsIdGet**](SectorsApi.md#apiSectorsIdGet) | **GET** /api/Sectors/{id} | 
[**apiSectorsIdPut**](SectorsApi.md#apiSectorsIdPut) | **PUT** /api/Sectors/{id} | 
[**apiSectorsPost**](SectorsApi.md#apiSectorsPost) | **POST** /api/Sectors | 

<a name="apiSectorsGet"></a>
# **apiSectorsGet**
> [Sector] apiSectorsGet()



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.SectorsApi();
apiInstance.apiSectorsGet((error, data, response) => {
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

[**[Sector]**](Sector.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiSectorsIdDelete"></a>
# **apiSectorsIdDelete**
> apiSectorsIdDelete(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.SectorsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiSectorsIdDelete(id, (error, data, response) => {
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

<a name="apiSectorsIdGet"></a>
# **apiSectorsIdGet**
> Sector apiSectorsIdGet(id)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.SectorsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiSectorsIdGet(id, (error, data, response) => {
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

[**Sector**](Sector.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiSectorsIdPut"></a>
# **apiSectorsIdPut**
> apiSectorsIdPut(id, opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.SectorsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new GymApp.Sector() // Sector | 
};
apiInstance.apiSectorsIdPut(id, opts, (error, data, response) => {
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
 **body** | [**Sector**](Sector.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiSectorsPost"></a>
# **apiSectorsPost**
> Sector apiSectorsPost(opts)



### Example
```javascript
import {GymApp} from 'gym_app';

let apiInstance = new GymApp.SectorsApi();
let opts = { 
  'body': new GymApp.Sector() // Sector | 
};
apiInstance.apiSectorsPost(opts, (error, data, response) => {
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
 **body** | [**Sector**](Sector.md)|  | [optional] 

### Return type

[**Sector**](Sector.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

