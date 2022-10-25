declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LOGIN_URL: string!;
      GRAPHQL_URL: string!;
      NEXTAUTH_URL: string!;
      NEXTAUTH_SECRET: string!;
    }
  }
}
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
