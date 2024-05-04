import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  // console.log('window.history:', window.history)
  return (
    <>
      <Link href='/dashboard/customers'>Go to Customers List</Link>
      {children}
    </>
    
  )
}