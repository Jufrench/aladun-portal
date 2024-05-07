import AdminCustomAttributes from "@/app/ui/customers/admincustomattributes";

import { retrieveCustomer, listGiftCards, listCustomerCustomAttributes } from "@/app/lib/data";
import GiftCardsList from "@/app/ui/giftcards/giftcardslist";
import ListCustomAttributes from "@/app/ui/customattributes/listcustomattributes";

export default async function CustomerId({ params }: { params: { id: string } }) {

  const customer = await retrieveCustomer(params.id)
    .then(result => result)
    .catch(error => console.log('error:', error));

  const giftCardsList = await listGiftCards(params.id)
    .then(result => result)
    .catch(error => console.log('error:', error));

  const customerCustomAttributes = await listCustomerCustomAttributes(params.id)
    .then(result => result)
    .catch(error => console.log('error:', error));

  // Promise.all([])

  const { givenName, familyName } = customer;

  // console.log('=== customerCustomAttributes ===', customerCustomAttributes);
  // console.log('=== params.id ===', params.id);

  
  return (
    <>
      <AdminCustomAttributes />
      <hr style={{ margin: "6px 0"}} />
      <h3>{givenName} {familyName}</h3>
      {customerCustomAttributes &&
        <ListCustomAttributes listCustomAttributes={customerCustomAttributes} />
      }
      <hr style={{ margin: "6px 0"}} />
      {giftCardsList
        ?
        <GiftCardsList giftCardsList={giftCardsList} />
        :
        <div>No Gift Cards Found</div>
      }
    </>
  )
}