"use client";
import { useState, useEffect } from "react";
import supabase from "../supabaseClient";
import Swal from "sweetalert2";

export default function Hesabim() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    email: "",
    name: "",
    phone: "",
    city: "",
    district: "",
    address: "",
  });

  useEffect(() => {
    const getProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        const { data: profileData, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error.message);
        } else if (profileData) {
          setProfile({
            email: profileData.email || "",
            name: profileData.name || "",
            phone: profileData.phone || "",
            city: profileData.city || "",
            district: profileData.district || "",
            address: profileData.address || "",
          });
        }
      }
    };

    getProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value || "",
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("profiles")
      .update({
        phone: profile.phone,
        city: profile.city,
        district: profile.district,
        address: profile.address,
      })
      .eq("id", user.id);

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Güncelleme Başarısız",
        text: error.message,
        confirmButtonText: "Tamam",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Güncelleme Başarılı",
        text: "Bilgileriniz başarıyla güncellendi.",
        confirmButtonText: "Tamam",
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h1>Hesabım</h1>
              <p>Hesap bilgilerinizi tamamlayın ya da güncelleyin.</p>
              <form onSubmit={handleSave}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={profile.name}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={profile.email}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Telefon Numarası
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={profile.phone || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    İl
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    value={profile.city || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="district" className="form-label">
                    İlçe
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="district"
                    name="district"
                    value={profile.district || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Açık Adres
                  </label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    value={profile.address || ""}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Kaydet
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
