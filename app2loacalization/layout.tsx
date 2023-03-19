import ClientProvider from "../components/ClientProvider";
import Sidebar from "../components/Sidebar";
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
      <body className="flex bg-[#f7fbff] ">
        <ClientProvider>
        {/* <Sidebar/> */}
        <main className="p-3 max-w-7xl w-full mx-auto overflow-y-auto">
        {children}
        </main>
        </ClientProvider>
        </body>
    </html>
  )
}
