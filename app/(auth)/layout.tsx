
export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='shrink-0 w-full max-w-md'>
            {children}
        </div>
    </div>
  )
}
