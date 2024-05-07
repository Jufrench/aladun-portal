'use client'

export default function ShowGiftCardActivityButton() {
  const handleShowGiftCardActivity = () => {
    console.log('%cshow gift card activity!', 'color:gold')
  };

  return (
    <button
      onClick={handleShowGiftCardActivity}
    >Show Gift Card Activity</button>
  )
}