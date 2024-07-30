import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import styles from './styles/app.module.css'

export default function App() {
  return (
    <div className={styles.app}>

      <Header avatar="https://i.pinimg.com/736x/47/e9/8c/47e98c2e2f37c11e18952afdeaf86791.jpg"/>

      <main>
        <div>
          <p>strength</p>
          <p>o o o o o</p>
        </div>

        <div>
        <p>New Password</p>
        <button>Copy</button>
        </div>

        <p>size</p>

        <div>
          <button>Uppercase</button>
          <button>Lowercase</button>
          <button>Number</button>
          <button>Special</button>
        </div>
      </main>

      <Footer />
    </div>
  )
}