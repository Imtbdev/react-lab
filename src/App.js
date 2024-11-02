import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Cards />
      <FeedbackForm />
      <Footer />
    </div>
  );
};


export default App;
