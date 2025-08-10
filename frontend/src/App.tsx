import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import '@mantine/core/styles.css';
import { Button, Group, Text, TextInput } from '@mantine/core';
import { Route, Routes } from 'react-router';
import LoginPage from './routes/LoginPage';

function App() {
  const [value, setValue] = useState<string | undefined>();
  const [allCustomers, setAllCustomers] = useState<Record<string, any>[]>([]);
  const [customer, setCustomer] = useState<Record<string, any>>();

  async function getCustomers() {
    try {
      const response = await fetch("http://localhost:3000/customers");
      const data = await response.json();
      setAllCustomers(data);
      // return data;
    } catch(error) {
      console.error("ERROR:", error);
    }
  }

  async function retrieveCustomer(customerId: string) {
    try {
      const response = await fetch(`http://localhost:3000/customer/${customerId}`);
      const data = await response.json();
      setCustomer(data);
      return response;
    } catch(error) {
      console.error("ERROR:", error);
    }
  }

  async function searchCustomer(filterValue: string) {
    try {
      const response = await fetch(`http://localhost:3000/customer/search/${filterValue}`);
      const data = await response.json();
      setCustomer(data);
      return response;
    } catch(error) {
      console.error("ERROR:", error);
    }
  }

  // console.log('%callCustomers:', 'color:tomato', allCustomers);

  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
    </Routes>
  );

  // return (
  //   <>
  //     <TextInput
  //       value={value}
  //       onChange={(e) => {
  //         setValue(e.target.value);
  //       }}
  //     />
  //     <Button
  //       onClick={() => {
  //         if (value) {
  //           retrieveCustomer(value);
  //         }
  //       }}
  //     >
  //       Get Customer
  //     </Button>
  //     {customer &&
  //       <Group>
  //         <Text>{customer.givenName}</Text>
  //         <Text>{customer.familyName}</Text>
  //       </Group>
  //     }
  //     <Button
  //       onClick={() => {
  //         if (value) {
  //           searchCustomer(value);
  //         }
  //       }}
  //     >
  //       Search Customer
  //     </Button>
  //   </>
    
  // );


}

export default App
