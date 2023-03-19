'use client';

import {ReactNode} from 'react';
import ClientProvider from "../components/ClientProvider";
import Sidebar from "../components/Sidebar";
import '../styles/globals.css'

type Props = {
  children: ReactNode;
};

export default function RootLayout({children}: Props) {
  // TODO: Here's a problem: When there's no cookie yet, we can't use the locale
  // from the URL. Something like `require('next/navigation').usePathname()`
  // would be great, but that uses non-server context currently, so not an
  // option in server components. `params` is also not an option, since they are
  // only available from matched segments downwards.
  const lang = undefined;

  return (
    <html lang={lang}>
          <body  className="flex bg-[#f7fbff] ">
        <ClientProvider>
        {/* <Sidebar/> */}
        <main className="p-3 max-w-7xl w-full mx-auto overflow-y-auto">
          {/* <Header /> */}
        {children}
        </main>
        </ClientProvider>
        </body>
    </html>
  );
}
