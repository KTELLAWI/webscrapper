import ClientProvider from "../components/ClientProvider";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TopDiv from "../components/TopDiv";
import '../styles/globals.css'

export const metadata = {
  title: 'Amazone Scraper',
  description: 'Web Scraper',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* h-screen  */}
      <body dir='rtl' className="flex bg-[#f7fbff] ">
        <ClientProvider>
        {/* <Sidebar/> */}
        <main className="p-3 max-w-7xl w-full mx-auto overflow-y-auto">
         <TopDiv/>
        {children}
        </main>
        </ClientProvider>
        </body>
    </html>
  )
}
