import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Como Funciona
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Processo simples e seguro para acessar seus resultados de exames
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 place-items-center">
                    <Card className="flex flex-col space-y-6">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-emerald-600">Para Pacientes</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold">
                                    1
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-medium">Login com Email e Senha</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Acesse com suas credenciais na página de login
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold">
                                    2
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-medium">Receba Código por Email</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Um código de verificação será enviado para seu email
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold">
                                    3
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-medium">Acesse seu Dashboard</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Visualize todos os seus exames em um só lugar
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col space-y-6">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-blue-600">Para Médicos</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                                    1
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-medium">Login com Email e Senha</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Acesse com suas credenciais na página de login
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                                    2
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-medium">Verificação TOTP</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Insira o código gerado pelo seu aplicativo autenticador
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                                    3
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-medium">Gerencie Exames</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Visualize, adicione e edite exames de seus pacientes
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
