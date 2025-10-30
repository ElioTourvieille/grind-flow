import { Card, CardTitle, CardHeader, CardFooter } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'
import SignupForm from './signin-form'
import Link from 'next/link'
import { ClubIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SignupPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-3xl font-bold mb-8 text-center'>Se connecter à Poker Analyzer</h1>
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle className='flex items-center justify-center gap-2'>
                    <ClubIcon className="w-8 h-8 text-white bg-primary rounded-full p-1" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <SignupForm />
            </CardContent>
            <CardFooter>
                <p className='text-sm text-muted-foreground'>Vous n&apos;avez pas de compte ?{" "}
                    <Link href="/auth/signup" className='hover:underline'>
                        <Button variant="link" className='p-0 text-sm text-primary'>Inscription</Button>
                    </Link>
                </p>
            </CardFooter>
        </Card>
    </div>
  )
}
