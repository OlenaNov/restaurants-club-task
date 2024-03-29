import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import Layout from '../Layout';
import Home from '../../pages/Home';

function App() {

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="funzioni" element={<div>funzioni</div> } />
          <Route path="login" element={<div>LOGIN</div> } />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
