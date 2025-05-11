import { FileTextIcon, LockIcon, ShieldCheckIcon } from 'lucide-react'
import React from 'react'

export default function Features() {
  return (
                <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                                    Recursos
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                    Tudo que você precisa em um só lugar
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Nossa plataforma oferece uma experiência completa para médicos e pacientes, com foco em segurança e facilidade de uso.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                                <div className="rounded-full bg-emerald-100 p-3">
                                    <ShieldCheckIcon className="h-6 w-6 text-emerald-700" />
                                </div>
                                <h3 className="text-xl font-bold">Autenticação Multi-Fator</h3>
                                <p className="text-center text-muted-foreground">
                                    Segurança reforçada com MFA para médicos (TOTP) e pacientes (código por email).
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                                <div className="rounded-full bg-blue-100 p-3">
                                    <FileTextIcon className="h-6 w-6 text-blue-700" />
                                </div>
                                <h3 className="text-xl font-bold">Gestão de Exames</h3>
                                <p className="text-center text-muted-foreground">
                                    Visualize, adicione e gerencie exames com facilidade, mantendo tudo organizado.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                                <div className="rounded-full bg-purple-100 p-3">
                                    <LockIcon className="h-6 w-6 text-purple-700" />
                                </div>
                                <h3 className="text-xl font-bold">Controle de Acesso</h3>
                                <p className="text-center text-muted-foreground">
                                    Permissões baseadas em papéis (RBAC) para garantir que cada usuário veja apenas o que deve.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
  )
}
