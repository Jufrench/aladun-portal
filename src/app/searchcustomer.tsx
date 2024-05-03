'use client';

export default function SearchCustomer() {
  return (
    <input
      onChange={e => {
        console.log(e.target.value)
      }}
    />
  )
}