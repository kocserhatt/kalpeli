"use client";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './Login';
import Register from './Register';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
    <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">KalpEli</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Tüm Ürünler</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Özel ürünler
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Sevgiliye Özel</a></li>
                        <li><a className="dropdown-item" href="#">Anneye Özel</a></li>
                        <li><a className="dropdown-item" href="#">Babaya Özel</a></li>
                    </ul>
                    </li>
                </ul>
                <div className="d-flex gap-3">
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Arama Yap" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Ara</button>
                    </form>
                    <button className="btn btn-primary" onClick={handleShowModal}>Kayıt/Giriş</button>
                </div>
                </div>
            </div>
        </nav>
    </div>

      {/* Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Kayıt/Giriş</h5>
              <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Giriş Yap</h5>
                      <Login />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Kayıt Ol</h5>
                      <Register />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}