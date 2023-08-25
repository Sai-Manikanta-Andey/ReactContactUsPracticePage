
import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import ContactUs from './components/ContactUs/ContactUs';
import Navigation from './components/Navigation/Navigation';

function App() {


  return (
    <div className="global-container">
      <div className="container">
        <Navigation />
        <ContactUs />
        <ContactForm/>
        
      </div>
    </div>
  );
}

export default App;
