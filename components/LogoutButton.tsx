"use client";

import { Button } from './ui/button'
import { ArrowLeftCircleIcon } from 'lucide-react'
import { signOut } from '@/auth/auth-client'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { useState } from 'react'

const LogoutButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success('Déconnexion réussie');
            router.push('/');
            router.refresh();
          },
          onError: (error) => {
            console.error('Erreur de déconnexion:', error);
            toast.error('Erreur lors de la déconnexion');
          },
        },
      });
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
      toast.error('Erreur lors de la déconnexion');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      variant="ghost" 
      className="w-full justify-start gap-3" 
      onClick={handleSignOut}
      disabled={isLoading}
    >
      <ArrowLeftCircleIcon className="size-5" />
      <span className="text-sm font-medium">
        {isLoading ? 'Déconnexion...' : 'Déconnexion'}
      </span>
    </Button>
  )
}

export default LogoutButton
