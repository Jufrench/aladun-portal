'use client';

import { useState } from "react";
import { getAllCustomers2 } from "./api/route";

export default function GetAllCustomersButton() {
  // const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // console.log('%cGetAllCustomersButton', 'color:deepskyblue')
    // const allCustomers = getAllCustomers2();
    // console.log('%callCustomers:', 'color:tomato', allCustomers);

    // try {
    //   return getAllCustomers2()
    //     .then(response => {
    //       return response;
    //     })
    //     .then(response => {
    //       console.log('%callCustomers:', 'color:gold', response);
    //     })
    // } catch(error) {
    //   console.log('%cerror:', 'background:indianred', error)
    // }

    getAllCustomers2()
      .then(response => response)
      .then(response => {
        console.log('response:', response);
      })
      .catch(error => console.log('error:', error));
  }

  return (
    <button
      style={{ marginBottom: "10px", padding: "6px" }}
      onClick={handleClick}>List Customers</button>
  )
}