import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token

        if (!token) return NextResponse.next()

        const is2FACompleted = token.is2FACompleted

        const cookie2FA = req.cookies.get('2fa-verified')

        if (token.mfaType && !is2FACompleted && !cookie2FA) {
            const url = req.nextUrl.clone()
            url.pathname = token.mfaType === 'email' ? '/auth/verify-email' : '/auth/verify-totp'
            return NextResponse.redirect(url)
        }

        return NextResponse.next()
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
)

export const config = {
    matcher: [
        '/doctor/dashboard/:path*',
        '/patient/dashboard/:path*',
    ],
}
