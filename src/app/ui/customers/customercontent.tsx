'use client'

interface CustomerContentProps {
  customerInfo: {
    givenName: string;
  }
  // familyName: string;
}

export default function CustomerContent(props: CustomerContentProps) {
  console.log('props:', props)
  return (
    <>
      <h3>Customer Content Page</h3>
      <div>ui/customers/customercontent.tsx</div>
    </>
  )
}