import { StethoscopeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto">
                <div className="flex items-center gap-2 font-bold">
                    <StethoscopeIcon className="h-5 w-5 text-emerald-600" />
                    <span>MediExam</span>
                </div>
                <p className="text-center text-sm text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} MediExam. Todos os direitos reservados.
                </p>
                <div className="flex gap-4">
                    <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
                        Termos
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
                        Privacidade
                    </Link>
                </div>
            </div>
        </footer>
    )
}

