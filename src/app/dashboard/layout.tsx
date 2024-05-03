export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Layout (everything that is in the dashboard folder will have this content)</div>
      {children}
    </>
  )
}