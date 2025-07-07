import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Specials from './Sections/Specials';

function App() {
  return (
    <>
      <div class="container">
        <div class="flex-container"><Header  /><Nav /></div>
      </div>
      <>
        <div class="mainpage">
          <Main />
        </div>

      </>
      <>
          <div className ='special-section-container container'>
          <Specials />
        </div>
      </>
      <>
        <Footer />
      </>
    </>
  );
}

export default App;
