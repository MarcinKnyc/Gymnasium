import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClientsApi } from '../codegen/src/api/ClientsApi';
import { PassBoughtEventsApi } from '../codegen/src/api/PassBoughtEventsApi';

const VerifyCustomerPage = ({ apiClient }) => {
  const { sectorId } = useParams();
  const customersApi = new ClientsApi(apiClient);
  const [customers, setCustomers] = useState([]);
  const [accessInfo, setAccessInfo] = useState({});
  // console.log('sectorId: {sectorId}')
  // console.log(sectorId)

  useEffect(() => {
    customersApi.apiClientsGet((error, data) => {
      if (error) {
        console.error('Error fetching customers:', error);
        return;
      }
      setCustomers(data);
      data.forEach((customer) => {
        hasAccessToSector(customer.id, (access) => {
          setAccessInfo((prevAccessInfo) => ({ ...prevAccessInfo, [customer.id]: access }));
        });
      });
    });
  }, []);

  const passesApi = new PassBoughtEventsApi(apiClient);

  const hasAccessToSector = (customerGuid, callback) => {
    passesApi.apiPassBoughtEventsGetActivePassesClientIdGet(customerGuid, (error, response) => {
      console.log('function for client:')
      console.log(customerGuid)
      if (error) {
        console.error('Error fetching active passes:', error);
        callback(false);
      } else {
        console.log(response)
        console.log(typeof(response))
        if (Array.isArray(response)) {
          const hasAccess = response.some((event) => event.Pass.SectorId === sectorId);         
          console.log('returned:')
          console.log(hasAccess)
          callback(hasAccess);
        } else {
          console.error('Unexpected response format:', response);
          callback(false);
        }
      }
    });
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>GUID</th>
            <th>Name</th>
            <th>Access to Sector</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>
                  {accessInfo.hasOwnProperty(customer.id) ? (accessInfo[customer.id] ? 'Yes' : 'No') : 'Loading...'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VerifyCustomerPage;
