import { users } from '@/lib/data';
import { AppUser } from '@/types/AppUser';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { User } from 'next-auth'; // Importa o tipo User estendido

const authenticationOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/signin',
        signOut: '/'
    },
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            authorize: async (credentials): Promise<User | null> => {
                if (!credentials) return null;

                const user = users.find(
                    u => u.email === credentials.email && u.password === credentials.password
                );

                console.log(user)

                if (!user) return null;

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    mfaType: user.role === 'doctor' ? 'totp' : 'email'
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, trigger }) {
            // Atualizar token após verificação 2FA
            if (trigger === 'update') {
                token.is2FACompleted = true
            }

            if (user) {
                token.id = user.id
                token.role = user.role
                token.mfaType = (user as AppUser).mfaType
                token.is2FACompleted = false // Inicialmente false
            }
            return token
        },
        async session({ session, token }) {
            session.user = {
                ...session.user,
                id: token.id as string,
                role: token.role as string,
                mfaType: token.mfaType as 'email' | 'totp',
                is2FACompleted: token.is2FACompleted as boolean
            }
            return session
        }
    }

};

const handler = NextAuth(authenticationOptions);
export { handler as GET, handler as POST };
