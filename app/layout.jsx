/**
 * layout of the root (a header or a footer is typical here)
 */
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'

export const metadata = {
  title: 'Promptopia',
  discription: 'Discover & Share AI prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Nav/>
          {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}
export default RootLayout