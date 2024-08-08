import React from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import ArtworkList from '../src/ArtworkList';
import ArtworkDetail from '../src/ArtworkDetails';
import logo from '../src/logo2.png'
import '../src/Style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'


const App = () => {
  return (
    <BrowserRouter>
      <div className='container-fluid' style={{ backgroundColor: 'rgb(240, 202, 191)' }} >

        <nav className="navbar navbar-expand-lg" id='back' style={{ paddingTop: '30px' }}>
          <div className="container-fluid">

            <Link className="navbar-brand" to="/" id="logo">
              <span className='app-title'><b><i><img src={logo} style={{ width: '60px', height: '60px' }} /></i></b> </span>
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/ArtworkList">
                    <b> Art Institute of Chicago API</b>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ArtworkList />} />
          <Route path="/ArtworkList" element={<ArtworkList />} />
          <Route path="/artwork/:id" element={<ArtworkDetail />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;