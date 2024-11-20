import React, { useState } from 'react';
import supabase from '../supabaseClient';
import Swal from 'sweetalert2';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Kayıt Başarısız',
        text: error.message,
        confirmButtonText: 'Tamam'
      }).then(() => {
        window.location.reload();
      });
    } else {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{ id: data.user.id, email, name }]);
      if (profileError) {
        Swal.fire({
          icon: 'error',
          title: 'Profil Kaydı Başarısız',
          text: profileError.message,
          confirmButtonText: 'Tamam'
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Kayıt Başarılı',
          text: 'Kayıt işlemi başarıyla tamamlandı.',
          confirmButtonText: 'Tamam'
        }).then(() => {
          window.location.reload();
        });
      }
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="mb-3">
        <label htmlFor="registerName" className="form-label">İsim/Soyisim</label>
        <input type="text" className="form-control" id="registerName" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="registerEmail" className="form-label">Email Adresi</label>
        <input type="email" className="form-control" id="registerEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="registerPassword" className="form-label">Şifre</label>
        <input type="password" className="form-control" id="registerPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Kayıt Ol</button>
    </form>
  );
}