import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';

function App() {
  const [searchContent, setSearchContent] = useState();

  const onChangeSearch = (searchText) => {
    setSearchContent(searchText);
  }

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section className="news-section">
        {/* <SourceList /> */}
        <SearchBar search={onChangeSearch}/>
        <NewsList searchContent={searchContent}/>
      </section>

    </div>
  );
}

export default App;
