import React from 'react';
import './App.css';

import CoursesGrid from './components/courses-grid';
import Modal from './components/modal';
import SearchBar from './components/search-bar';
import SideBar from './components/side-bar';
import SortFilter from './components/sort-filter';
import Title from './components/title';

function App() {
  return (
    <div className="flex">
      <div className="float-left">
        <SideBar />
      </div>
      <div className="float-left flex-1 px-20 pt-6">
        <Title />
        <div className="mt-10">
          <SearchBar />
        </div>
        <div className="mt-3">
          <SortFilter />
        </div>
        <div className="mt-10">
          <CoursesGrid />
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default App;
