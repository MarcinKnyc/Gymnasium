import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClientsApi } from '../codegen/src/api/ClientsApi';
import { PassBoughtEventsApi } from '../codegen/src/api/PassBoughtEventsApi';

const VerifyCustomerPage = ({ apiClient }) => {
  const { sectorId } = useParams();
  const customersApi = new ClientsApi(apiClient);
  const [customers, setCustomers] = useState([]);
  const [accessInfo, setAccessInfo] = useState({});

  useEffect(() => {
    customersApi.apiClientsGet(async (error, data) => {
      if (error) {
        console.error('Error fetching customers:', error);
        return;
      }
      setCustomers(data);
      const accessPromises = data.map((customer) =>
        new Promise((resolve) => {
          hasAccessToSector(customer.id, (access) => {
            resolve({ id: customer.id, access });
          });
        })
      );
      const accessResults = await Promise.all(accessPromises);
      const newAccessInfo = accessResults.reduce((acc, { id, access }) => {
        acc[id] = access;
        return acc;
      }, {});
      setAccessInfo(newAccessInfo);
    });
  }, []);
  
  

  const passesApi = new PassBoughtEventsApi(apiClient);

  const hasAccessToSector = (clientId, callback) => {
    passesApi.apiSectorsCheckIfActiveGet({ clientId, sectorId }, (error, response) => {
      if (error) {
        console.error('Error checking if active:', error);
        callback(false);
      } else {
        callback(response);
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
