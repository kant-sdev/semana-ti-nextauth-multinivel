import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Acesso seguro aos seus resultados de exames
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Plataforma com autenticação multi-fator para médicos e pacientes acessarem resultados de exames com
                                total segurança e privacidade.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button asChild size="lg">
                                <Link href="/login">
                                    Acessar Portal
                                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg">
                                Saiba Mais
                            </Button>
                        </div>
                    </div>
                    <Image
                        src="/images/doctor.jpg"
                        width="850"
                        height="750"
                        alt="Portal de Exames"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    />
                </div>
            </div>
        </section>)
}
