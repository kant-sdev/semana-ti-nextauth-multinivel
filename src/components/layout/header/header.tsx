'use client'

import { Button } from '@/components/ui/button'
import { signOut, useSession } from 'next-auth/react'
import Cookies from 'js-cookie' // ✅ Correta
import React from 'react'

export default function Header() {
    const { data: session } = useSession();

    const handleLogout = () => {
        // Remove o cookie 2FA antes de fazer logout
        Cookies.remove('2fa-verified');
        // Faz logout normalmente
        signOut({ callbackUrl: '/' });
    };

    return (
        <header className={`w-full p-4 ${session?.user?.role === "doctor" ? "bg-blue-600" : "bg-green-600"} text-white`}>
            <div className="container mx-auto flex justify-between items-center">
                <h2>Medical System</h2>
                <div className='flex items-center gap-4'>
                    <p>{session?.user?.email}</p>
                    <Button
                        onClick={handleLogout}
                        className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                    >
                        Sair
                    </Button>
                </div>
            </div>
        </header>
    )
}
