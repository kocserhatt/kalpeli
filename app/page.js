"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import './styles/styles.css';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then((bootstrap) => {
          const carouselElement = document.querySelector('#carouselExampleIndicators');
          const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 5000,
            ride: 'carousel'
          });
        })
        .catch(err => console.error('Bootstrap JS yüklenirken hata oluştu:', err));
    }
  }, []);

  return (
    <>
      <div className="container mt-2">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/format_webp.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="format_webp (1).jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="format_webp (2).jpg" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <h2 className="mt-3">Öne Çıkan Ürünler</h2>

        <div className="row mt-3 ">
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <div className="card">
              <img src="urun1.jpg" className="card-img" alt="Ürün 1"/>
              <div className="card-body">
                <h5 className="card-title">Philips EP5547/90 5500 Serisi Tam Otomatik Espresso Makinesi</h5>
                <p className="card-text">21.999,00 TL</p>
                <a href="#" className="btn btn-primary">Satın Al</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <div className="card">
              <img src="urun2.jpg" className="card-img" alt="Ürün 2"/>
              <div className="card-body">
                <h5 className="card-title">Klassegear Pro 90X40 cm Gaming Oyuncu MousePad </h5>
                <p className="card-text">404,90 TL</p>
                <a href="#" className="btn btn-primary">Satın Al</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <div className="card">
              <img src="urun3.jpg" className="card-img" alt="Ürün 3"/>
              <div className="card-body">
                <h5 className="card-title">Spigen 45W GaN USB-C 2 Port Mini Adaptör</h5>
                <p className="card-text">499,00 TL</p>
                <a href="#" className="btn btn-primary">Satın Al</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <div className="card">
              <img src="urun4.jpg" className="card-img" alt="Ürün 1"/>
              <div className="card-body">
                <h5 className="card-title">Xiaomi Redmi Watch 5 Active Akıllı Saat</h5>
                <p className="card-text">1.300,00 TL</p>
                <a href="#" className="btn btn-primary">Satın Al</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <div className="card">
              <img src="urun5.jpg" className="card-img" alt="Ürün 2"/>
              <div className="card-body">
                <h5 className="card-title">MSI THIN 15 Intel Core i5 12450H 16GB 512GB SSD RTX305015.6" FHD 144Hz</h5>
                <p className="card-text">26.999,00 TL</p>
                <a href="#" className="btn btn-primary">Satın Al</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <div className="card">
              <img src="urun6.jpg" className="card-img" alt="Ürün 3"/>
              <div className="card-body">
                <h5 className="card-title">English Home Blare 6'lı Organizer Set Pudra</h5>
                <p className="card-text">469,99 TL</p>
                <a href="#" className="btn btn-primary">Satın Al</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}