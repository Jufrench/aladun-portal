// 'use client';

import Image from "next/image";
import styles from "./page.module.css";

import { useState } from 'react';
import ListCustomers from "./listcustomers";
import GetAllCustomersButton from "./getallcustomersbutton";
import SearchCustomer from "./searchcustomer";

// const { Client, Environment, ApiError } = require("square")

// const client = new Client({
//   bearerAuthCredentials: {
//     // accessToken: process.env.SQUARE_ACCESS_TOKEN
//   },
//   // environment: Environment.Sandbox,
//   environment: Environment.Production,
// });

// const { customersApi } = client;

// async function getCustomers() {
//   try {
//     const response = await customersApi.listCustomers();

//     console.log(response.result);
//   } catch(error) {
//     console.log('error:', error)
//   }
// }
// import { getCustomers } from "@/app/lib/data";
// async function Customers() {
//   const customers = await getCustomers();
//   return (
//     <>
//       <button>Get Customers</button>
//       <hr style={{width: "100%", margin: "10px 0"}} />
//       <ul>
//         {customers.map((customer: any) => {
//           return (
//             <li>{customer.givenName}</li>
//           )
//         })}
//       </ul>
//     </>
//   )
// }
// let canGetCustomers = false;


// const handleClick = (value: boolean) => {
//   canGetCustomers = value;
// }

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <GetAllCustomersButton /> */}
      {/* <SearchCustomer /> */}
      <ListCustomers />
      {/* <button onClick={handleGetCustomers}>Get Customers</button> */}
    </main>
  );
}
