import Link from 'next/link';

export default function DashboardPage() {
  return (
    <>
      <h2>Dashboard Page</h2>
      <Link href='/dashboard/customers' style={{textDecoration: 'underline'}}>
        Customers
      </Link>
    </>
  )
}