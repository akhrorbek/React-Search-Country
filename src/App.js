import Header from './components/header/Header';
import Search from './components/sections/Search';
import Card from './components/sections/Card';
import './App.css';

function App() {
  return <>
    <header>
      <Header />
    </header>
    <main>
      <Search/>
      <Card/>
    </main>

  </>
}

export default App;
