import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
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
        <Footer />
      </>
    </>
  );
}

export default App;
