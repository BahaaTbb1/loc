import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const secret = process.env.NEXTAUTH_SECRET;

export default NextAuth({
  secret: secret,
  providers: [
    CredentialsProvider({
      id: 'Credentials',
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Email', type: 'email', placeholder: 'email@example.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const data = {
          email: credentials?.username,
          password: credentials?.password
        };
        const res = await fetch('https://dev-api.leaguesofcode.com/api/v1/std/login', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
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
  }
  //   pages: {
  //     signIn: '/login' //Need to define custom login page (if using)
  //   },
});
