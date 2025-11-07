// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import '@mantine/core/styles.css';
import { Route, Routes } from 'react-router';
// import LoginPage from './routes/LoginPage';
import AuthProvider from './contexts/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import UserHomePage from './routes/UserHomePage';
import LandingPage from './routes/LandingPage';
import LoginPage from './routes/LoginPage';

function App() {
  // const [value, setValue] = useState<string | undefined>();
  // const [allCustomers, setAllCustomers] = useState<Record<string, any>[]>([]);
  // const [customer, setCustomer] = useState<Record<string, any>>();

  // async function getCustomers() {
  //   try {
  //     const response = await fetch("http://localhost:3000/customers/list");
  //     const data = await response.json();
  //     setAllCustomers(data);
  //     // return data;
  //   } catch(error) {
  //     console.error("ERROR:", error);
  //   }
  // }

  // async function retrieveCustomer(customerId: string) {
  //   try {
  //     const response = await fetch(`http://localhost:3000/customers/${customerId}`);
  //     const data = await response.json();
  //     setCustomer(data);
  //     return response;
  //   } catch(error) {
  //     console.error("ERROR:", error);
  //   }
  // }

  // async function searchCustomer(filterValue: string) {
  //   try {
  //     const response = await fetch(`http://localhost:3000/customers/search/${filterValue}`);
  //     const data = await response.json();
  //     setCustomer(data);
  //     return response;
  //   } catch(error) {
  //     console.error("ERROR:", error);
  //   }
  // }

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/info' element={<LandingPage />} />
        <Route path='/portal' element={<LoginPage />} />
        <Route
          element={
            <ProtectedRoute>
              <UserHomePage />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<UserHomePage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App
