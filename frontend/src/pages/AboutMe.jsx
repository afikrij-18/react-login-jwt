import React from "react";
import fotoProfil from "../assets/image.webp";

function AboutMe() {
  // Data latihan profil peserta
  const profile = {
    nama: "Fikri",
    pendidikan: "Full Stack Developer, BPVP Padang",
    hobi: "Coding, Membaca Buku Teknologi, dan Bermain Game",
    skills: ["React JS", "Node.js", "Express", "Tailwind CSS", "MySQL", "Sequelize"],
    kontak: "fikri@email.com",
  };

  return (
    <main className="min-h-screen bg-base-200 p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        
        {/* Card Utama Profil */}
        <section className="card bg-base-100 shadow-md">
          <div className="card-body items-center text-center">
            {/* Avatar / Foto Placeholder (Bisa diganti tag <img src="..." /> jika ada foto) */}
            <div className="avatar placeholder mb-2">
              <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                <img src={fotoProfil} alt="Foto Profil" className="object-cover w-full h-full" />
              </div>
            </div>

            <h1 className="card-title text-3xl font-bold">{profile.nama}</h1>
            <p className="text-base-content/70">{profile.pendidikan}</p>
          </div>
        </section>

        {/* Card Detail Informasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card Hobi & Kontak */}
          <section className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-xl mb-2">Informasi Lainnya</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold block text-sm opacity-70">Hobi:</span>
                  <p>{profile.hobi}</p>
                </div>
                <div>
                  <span className="font-semibold block text-sm opacity-70">Kontak:</span>
                  <p className="text-primary">{profile.kontak}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Card Skills */}
          <section className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-xl mb-3">Keahlian (Skills)</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span key={index} className="badge badge-primary badge-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

        </div>

      </div>
    </main>
  );
}

export default AboutMe;