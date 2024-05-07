// 'use client'

import GiftCard from "./giftcard"

export default function GiftCardsList(props: { giftCardsList: [] }) {
  // console.log('props:', props)

  return (
    <ul>
      {props.giftCardsList.map((card, index) => <GiftCard key={index} card={card} />)}
    </ul>
  )
}