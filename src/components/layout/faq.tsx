import React from 'react'

export default function Faq() {
    return (
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Perguntas Frequentes
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Tire suas dúvidas sobre o Portal de Resultados de Exames
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                    <div className="rounded-lg border p-6">
                        <h3 className="text-lg font-bold">O que é autenticação multi-fator (MFA)?</h3>
                        <p className="mt-2 text-muted-foreground">
                            É um método de segurança que exige duas ou mais formas de verificação para confirmar a identidade do usuário, tornando o acesso muito mais seguro.
                        </p>
                    </div>
                    <div className="rounded-lg border p-6">
                        <h3 className="text-lg font-bold">Como funciona o TOTP para médicos?</h3>
                        <p className="mt-2 text-muted-foreground">
                            TOTP (Time-based One-Time Password) gera códigos temporários em um aplicativo autenticador como Google Authenticator ou Microsoft Authenticator.
                        </p>
                    </div>
                    <div className="rounded-lg border p-6">
                        <h3 className="text-lg font-bold">Posso acessar meus exames de qualquer dispositivo?</h3>
                        <p className="mt-2 text-muted-foreground">
                            Sim, o portal é responsivo e pode ser acessado de qualquer dispositivo com conexão à internet, mantendo a segurança com MFA.
                        </p>
                    </div>
                    <div className="rounded-lg border p-6">
                        <h3 className="text-lg font-bold">Como são protegidos meus dados médicos?</h3>
                        <p className="mt-2 text-muted-foreground">
                            Utilizamos criptografia avançada, autenticação multi-fator e controle de acesso baseado em papéis para garantir a segurança dos seus dados.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
