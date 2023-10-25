import './App.css';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Section from './Component/Section/Section';
import Article from './Component/Article/Article';
import Group from './Component/Group/Group';
import Carousel from './Component/Carousel/Carousel';
import Team from './Component/Team/Team';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Header />
      <br />
      <br />
      <Section />
      <br />
      <Article />
      <br />
      <br />
      <Group />
      <br />
      <br />
      <Carousel />
      <br />
      <Team />
      <br />
      <br />
      <Contact />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
