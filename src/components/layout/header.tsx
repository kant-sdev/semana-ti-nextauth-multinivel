import { StethoscopeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { OptionsButton } from './button/options-button'

export default function Header() {
    return (
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
                <div className="container flex h-16 items-center justify-between mx-auto">
                    <div className="flex items-center gap-2 font-bold text-xl">
                        <StethoscopeIcon className="h-6 w-6 text-emerald-600" />
                        <span>MediExam</span>
                    </div>
                    <nav className="hidden md:flex gap-6 items-center">
                        <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                            Recursos
                        </Link>
                        <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                            Como Funciona
                        </Link>
                        <Link href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                            FAQ
                        </Link>
                    </nav>
                    <OptionsButton/>
                </div>
            </header>
    )
}
