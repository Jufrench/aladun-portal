import Link from 'next/link';
import CustomerContent from "@/app/ui/customers/customercontent"

export default function CustomerPage() {
  // const { customer } = props;

  // console.log('%cprops:', 'color:deepskyblue', customer)
  const customer = {
    givenName: "julian"
  }

  return (
    // 'Customer Page'
    <CustomerContent customerInfo={customer} />
  )
}