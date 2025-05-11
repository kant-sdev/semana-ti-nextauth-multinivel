'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function VerifyEmail() {
    const route = useRouter()
    const { data: session } = useSession()
    const [code, setCode] = useState('')
    const [verificationCode, setVerificationCode] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        // Gera o código de verificação uma vez
        const generated = Array.from({ length: 6 }, () =>
            Math.floor(Math.random() * 10)
        ).join('')
        setVerificationCode(generated)
    }, [])

    console.log(session?.user)

const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        const isValidCode = code === verificationCode
        const isPatientOrEmailMFA =
            session?.user.role === 'patient' || session?.user.mfaType === 'email'

        if (isValidCode && isPatientOrEmailMFA) {
            await fetch('/api/auth/mfa-complete', { method: 'POST' })
            route.replace('/patient/dashboard')
            return // evita o setIsLoading após o redirect
        }

        setError('Código incorreto. Tente novamente.')
        setIsLoading(false)
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Verifique seu e-mail</CardTitle>
                    <CardDescription className="text-center">
                        Digite o código de verificação enviado ao seu e-mail
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleVerify} className="space-y-4">
                        {error && (
                            <Alert variant="destructive">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        <Alert>
                            <AlertDescription>
                                <span className="font-semibold">Modo Demo:</span> Seu código é: {verificationCode}
                            </AlertDescription>
                        </Alert>

                        <div className="space-y-2">
                            <Label htmlFor="code">Código de Verificação</Label>
                            <Input
                                id="code"
                                placeholder="Digite os 6 dígitos"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            {isLoading ? 'Verificando...' : 'Verificar'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
