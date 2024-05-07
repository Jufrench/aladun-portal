import { listGiftCardActivities } from "@/app/lib/data";

// interface GiftCardActivityProps {
//   id: string;
// }

// export default function GiftCardActivity({ id }: GiftCardActivityProps) {
// export default function GiftCardActivity({ id }: { id: string }) {
export default function GiftCardActivityData({ giftCardId }: { giftCardId: string }) {
  console.log('%cgiftCardId:', 'color:tomato', giftCardId)

  // const giftCardActivities = await listGiftCardActivities(giftCardId)
  //   .then(result => {
  //     return result;
  //   })
  //   .catch(error => console.log('error:', error));

  // console.log('=== giftCardActivities ===', giftCardActivities)

  return (
    <div>gift card activity</div>
  )
}