import { getToken } from 'next-auth/jwt'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  // Obter token corretamente da requisição real
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  
  if (!token) {
    return NextResponse.json({ success: false }, { status: 401 })
  }

  // Atualizar resposta com cookie
  const response = NextResponse.json({ success: true })
  response.cookies.set('2fa-verified', 'true', {
    path: '/',
    maxAge: 60 * 60 * 2, // 2 horas
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })

  return response
}