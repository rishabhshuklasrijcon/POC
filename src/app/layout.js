import './globals.css'
import Navbar from '@/app/components/navbar/Navbar'
import Footer from '@/app/components/footer/Footer'

export const metadata = {
    title: 'Srijcon POC', description: 'POC for the upload content page',
}

export default function RootLayout({children}) {
    return (<html lang="en">
    <body>
    <div className="flex h-screen flex-col">
        <Navbar/>
        <main className="flex-grow">{children}</main>
        <Footer/>
    </div>
    </body>
    </html>)
}