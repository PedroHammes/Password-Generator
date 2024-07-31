import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Section from './components/Section/section'
import styles from './styles/app.module.css'

export default function App() {
  return (
    <div className={styles.app}>

      <Header />

      <Section />

      <Footer />
    </div>
  )
}