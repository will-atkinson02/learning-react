// Gives us access to the WelcomeMessage component
import Article from "./components/Article"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import WelcomeMessage from "./components/WelcomeMessage"

function App() {
  return (
    <div>
      <Nav />

      <WelcomeMessage />

      <Article />

      <ContactForm />

      <Footer />
      
    </div>
  )
}

export default App
