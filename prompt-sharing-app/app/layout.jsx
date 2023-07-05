import '@styles/globals.css'
import { Children } from 'react'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
export const metadata = {
    title: "Prompt Sharing App",
    description: "Discover & Share ChatGPT Prompts"
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <body>
        <div className="main">
            <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav></Nav>
            {children}
        </main>
    </body>
    </html>
  )
}

export default RootLayout;