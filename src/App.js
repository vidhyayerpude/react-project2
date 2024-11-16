import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation'; 
import ContactHeader from './components/ContactHeader/contactHeader';
import ContactForm from './components/ContactForm/contactForm';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </main>
      </div>
  );
}
 
export default App;
