'use client'

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function CheckMFA() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'authenticated') {
            const { role, mfaType } = session.user

            if (mfaType === 'email') {
                router.push('/auth/verify-email')
            } else if (mfaType === 'totp') {
                router.push('/auth/verify-totp')
            } else {
                router.push(`/${role}/dashboard`)
            }
        }
    }, [status, session, router])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
            <motion.div
                className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Verificando autenticação...
            </motion.p>
        </div>
    )
}
