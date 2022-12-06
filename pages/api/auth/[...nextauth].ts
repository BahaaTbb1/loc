/* eslint-disable @typescript-eslint/no-non-null-assertion */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const secret = process.env.NEXTAUTH_SECRET;

export default NextAuth({
  secret: secret,
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'email@example.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const data = {
          email: credentials?.email,
          password: credentials?.password
        };
        const res = await fetch(process.env.LOGIN_URL!, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        } else if (res?.status !== 200) {
          throw new Error('Something went wrong');
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      session.user = token.user; // Setting token in session
      return session;
    }
  },
  pages: {
    signIn: '/login', //Need to define custom login page (if using),
    signOut: '/auth/signout',
    error: '/auth/error' // Error code passed in query string as ?error=
  }
});
