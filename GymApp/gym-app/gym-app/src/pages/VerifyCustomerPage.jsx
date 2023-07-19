import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClientsApi } from '../codegen/src/api/ClientsApi';
import { SectorsApi } from '../codegen/src/api/SectorsApi';

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
      let newAccessInfo =[]
      // Use Promise.all to wait for all promises to resolve
      await Promise.all(data.map(async (datapoint) => {
        const clientId = datapoint.id;
        // Wrap hasAccessToSector in a Promise 
        newAccessInfo[clientId] = await new Promise((resolve) => {
          hasAccessToSector(clientId, (access) => {
            resolve(access);
          });
        });
      }));
      setAccessInfo(newAccessInfo);
    });
  }, []);
  
  

  const sectorsApi = new SectorsApi(apiClient);

  const hasAccessToSector = (clientId, callback) => {
    sectorsApi.apiSectorsCheckIfActiveGet({ clientId, sectorId }, (error, response) => {
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
