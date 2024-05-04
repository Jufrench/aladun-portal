import { retrieveCustomer } from "@/app/lib/data";

export default async function CustomerId({ params }: { params: { id: string } }) {
  const customer = await retrieveCustomer(params.id).then(result => result);
  const { givenName, familyName } = customer;

  // console.log('%cnames:', 'color:tomato', givenName, familyName);
  
  return (
    <h3>{givenName} {familyName}</h3>
  )
}