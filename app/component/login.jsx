import React, { useState } from 'react';
import supabase from '../supabaseClient';
import Swal from 'sweetalert2';
import "../styles/styles.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Giriş Başarısız',
        text: error.message,
        confirmButtonText: 'Tamam'
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Giriş Başarılı',
        text: 'Giriş işlemi başarıyla tamamlandı.',
        confirmButtonText: 'Tamam'
      }).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label clr">Email Adresi</label>
        <input type="email" className="form-control" id="loginEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label">Şifre</label>
        <input type="password" className="form-control" id="loginPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Giriş Yap</button>
    </form>
  );
}