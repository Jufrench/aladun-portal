'use client'

export default function ClickToCopy({ gan }: { gan: string }) {
  return (
    <button
      onClick={() => {
        // Copy the text inside the text field
        navigator.clipboard.writeText(gan);
      }}
    >Copy Number</button>
  )
}