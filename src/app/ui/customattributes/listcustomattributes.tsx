'use client'

import CustomAttribute from "./customattribute"

export default function ListCustomAttributes({ listCustomAttributes }: any) {
  // console.log('props custom attributes:', listCustomAttributes)

  return (
    <ul>
      {listCustomAttributes &&
        listCustomAttributes.map((item: any, index: number) => {
          // console.log('item:', item.definition)
          return <CustomAttribute key={index} customAttribute={item} />
        })
      }
    </ul>
  )
}