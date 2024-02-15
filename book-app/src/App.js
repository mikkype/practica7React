import './assets/css/App.css';
import HeaderComponent from './components/header';
import LibraryComponent from './components/library';
import BookComponent from './components/book';
import FooterComponent from './components/footer';

function App() {

  return (

    <div className='container'>

      <div className="header">
        <HeaderComponent />
      </div>

      <div className='library'>
        <LibraryComponent />
      </div>

      <div className="books">
        <BookComponent />
      </div>

      <div>
        <FooterComponent />
      </div>
    </div>

  )

}

export default App;
