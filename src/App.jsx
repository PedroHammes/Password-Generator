import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Section from './components/Section/section'
import styles from './styles/app.module.css'

export default function App() {
  return (
    <div className={styles.app}>

      <Header avatar="https://i.pinimg.com/236x/db/a3/dd/dba3dd4e1e37ec9243d543bd6763f02a.jpg"/>

      <Section />

      <Footer />
    </div>
  )
}