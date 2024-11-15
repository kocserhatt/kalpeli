"use client";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../component/Login';
import Register from '../component/Register';
import supabase from '../supabaseClient';
import '../styles/styles.css';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const handleShowModal = () => {
    setShowModal(true);
    document.body.classList.add('modal-open');
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    document.body.appendChild(backdrop);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.classList.remove('modal-open');
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) backdrop.remove();
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    } else {
      setUser(null);
      window.location.reload();
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then(() => {
          console.log('Bootstrap JS loaded');
        })
        .catch(err => console.error('Error loading Bootstrap JS:', err));
    }

    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription?.unsubscribe();
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) backdrop.remove();
    };
  }, []);

  return (
    <>
      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">KalpEli</a>
            <div className='d-flex align-items-center gap-3'>
            <div>
            {!user && (
              <button className="btn btn-success d-lg-none" onClick={() => { handleShowModal(); setIsLogin(true); }}>Kayıt/Giriş</button>)}
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            </div>
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
              <div className="d-flex gap-3 mail">
                <form className="d-flex mt" role="search">
                  <input className="form-control me-2" type="search" placeholder="Arama Yap" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Ara</button>
                </form>
                {user ? (
                  <div className="d-flex align-items-center gap-2 mt">
                    <span className="navbar-text">{user.email}</span>
                    <button className="btn btn-danger" onClick={handleLogout}>Çıkış Yap</button>
                  </div>
                ) : (
                  <button className="btn btn-success d-none d-lg-block" onClick={() => { handleShowModal(); setIsLogin(true); }}>Kayıt/Giriş</button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</h5>
              <button type="button" className="btn-close" onClick={handleCloseModal}></button>
            </div>
            <div className="modal-body">
              {isLogin ? (
                <>
                  <Login />
                  <div className="mt-3">
                    <p className='modal-footer'>Hesabınız yok mu? <button className="btn btn-link" onClick={() => setIsLogin(false)}>Kayıt Ol</button></p>
                  </div>
                </>
              ) : (
                <>
                  <Register />
                  <div className="mt-3">
                    <p className='modal-footer'>Zaten bir hesabın var mı? <button className="btn btn-link" onClick={() => setIsLogin(true)}>Giriş Yap</button></p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}