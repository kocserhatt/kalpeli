import React from 'react';

export default function Register() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="registerEmail" className="form-label">Email address</label>
        <input type="email" className="form-control" id="registerEmail" />
      </div>
      <div className="mb-3">
        <label htmlFor="registerPassword" className="form-label">Password</label>
        <input type="password" className="form-control" id="registerPassword" />
      </div>
      <button type="submit" className="btn btn-primary">Kayıt Ol</button>
    </form>
  );
}