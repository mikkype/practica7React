import './assets/css/App.css';
import HeaderComponent from './components/header';
import LibraryComponent from './components/library';

import FooterComponent from './components/footer';
import BookComponent from './components/book';

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

      </div>

      <div>
        <FooterComponent />
      </div>
    </div>

  )

}

export default App;
