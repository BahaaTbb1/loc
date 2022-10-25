import * as React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface IWrapper {
  children: React.ReactNode;
}
export default function Wrapper({ children }: IWrapper) {
  const session = useSession();
  const router = useRouter();

  if ((session !== null && session?.status === 'authenticated') || router.pathname === '/register') {
    return <>{children}</>;
  } else {
    // typeof window !== 'undefined' && router.push("/api/auth/signin")
    return null;
  }
}
