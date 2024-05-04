'use client'

import Link from 'next/link';
// import Customer from "@/app."

interface CustomerItemProps {
  // firstName: string;
  // customer: {};
  customer: Customer;
}

type Customer = {
  id: string;
  givenName: string;
  familyName: string;
}

export default function CustomerItem(props: CustomerItemProps) {
  const { customer } = props;

  // console.log('%cprops:', 'color:deepskyblue', customer)

  return (
    <li>
      {/* <Link style={{textDecoration: 'underline'}} href={`/dashboard/customers/customer/${customer.givenName}${customer.familyName}`}> */}
      {/* <Link style={{textDecoration: 'underline'}} href={`/dashboard/customers/customer`}> */}
      {/* <Link style={{textDecoration: 'underline'}} href={`/dashboard/customers/${customer.givenName}_${customer.familyName}`}> */}
      {/* <Link style={{textDecoration: 'underline'}}
        href={{
          pathname: `/dashboard/customers/${customer.givenName}_${customer.familyName}`,
          query: customer
        }}
      > */}
      <Link style={{textDecoration: 'underline'}} href={`/dashboard/customers/${customer.id}`}>
        <span>{customer.givenName}</span>
        <span> {customer.familyName}</span>
      </Link>
    </li>
  )
}