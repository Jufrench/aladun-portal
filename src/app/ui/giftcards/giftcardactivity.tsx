'use client'

import { useState } from 'react'

// import { getActivity } from "@/app/api/route"

// export default function GiftCardActivity({ children }: { children: React.ReactNode }) {
//   console.log('====>', children)
//   return (
//     <>
//       <button>hello</button>
//       {children}
//     </>
//   )
// }

export default function GiftCardActivity({ giftCardActivity }: { giftCardActivity: any }) {
  const [showActivity, setShowActivity] = useState<boolean>(false);

  // console.log('giftCardActivity:', giftCardActivity)

  return (
    <>
      <button onClick={(event) => {
        setShowActivity(!showActivity)
        console.log('event:', event)
      }}>Show Gift Card Activity</button>
      {showActivity &&
        (giftCardActivity !== undefined ?
          giftCardActivity[0].type :
          'No activity')}
    </>
  )
}