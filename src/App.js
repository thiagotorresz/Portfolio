import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
