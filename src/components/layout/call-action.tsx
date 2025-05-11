import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

export default function CallAction() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Pronto para começar?
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Acesse seus resultados de exames com segurança e praticidade
                        </p>
                    </div>
                    <Button asChild size="lg" className="mt-4">
                        <Link href="/login">
                            Acessar Portal
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
