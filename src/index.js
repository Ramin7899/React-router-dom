import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Books from './components/Books';
import About from './components/About';
import Book from './components/book';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<App />} />
        <Route path='/books' element={<Books />} />
        <Route path='/about' element={<About />} />
      </Routes> */}

      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Books />}>
            <Route index element={
              <main style={{ padding: '1rem', width: '100%' }}>
                <p>
                  کتاب مورد نظر خود را انتخاب کنید
                </p>
              </main>
            }>

            </Route>
            <Route path=':bookId' element={<Book />} />
          </Route>
        </Route>
        <Route path='*' element={
          <main style={{ padding: "1rem", width: '100%' }}>
            <p style={{textAlign:'center'}}>
              Not Found
            </p>
          </main>
        }>

        </Route>
      </Routes>
    </BrowserRouter >
  </React.StrictMode >
);