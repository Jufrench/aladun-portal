// 'use client'

import { listGiftCardActivities } from "@/app/lib/data";

import ShowGiftCardActivityButton from "./showgiftcardactivity";
import GiftCardActivity from "./giftcardactivity";
import GiftCardActivityData from "./giftcardactivitydata";

import ClickToCopy from "./clicktocopy";
import ReloadCard from "./reloadcard";

// const formatBalance = (amount: bigint) => {
//   // let amountFormatted = JSON.parse(amount);
//   return amountFormatted;
// }

interface GiftCardProps {
  card: {
    id: string;
    gan: string;
    balanceMoney: {
      amount: string;
    };
    state: string;
    type: string;
  }
}

export default async function GiftCard({ card }: GiftCardProps) {
  console.log('=========> card:', card)
  const { id, gan, balanceMoney, state, type } = card;
  // console.log('%cid:', 'color:deepskyblue', id)

  const formattedBalance = (parseInt(balanceMoney.amount)/100).toFixed(2);

  const giftCardActivity = await listGiftCardActivities(id)
    .then(result => {
      // console.log('////////// result:', result)
      return result;
    })
    .catch(error => console.log('error:', error))

  return (
    <div style={{marginBottom: '6px'}}>
      <div>
        <span>Account Number: </span><span>{gan}</span>
        <span> | </span>
        <ClickToCopy gan={gan} />
      </div>
      <div>
        <span>Balance: </span><span>${formattedBalance}</span>
        <span> | </span>
        <ReloadCard />
      </div>
      <div><span>State: </span><span>{state}</span></div>
      <div><span>Type: </span><span>{type}</span></div>
      {/* <ShowGiftCardActivityButton /> */}
      {/* <GiftCardActivity>
        <GiftCardActivityData giftCardId={id} />
      </GiftCardActivity> */}
      <GiftCardActivity giftCardActivity={giftCardActivity} />
    </div>
  )
}