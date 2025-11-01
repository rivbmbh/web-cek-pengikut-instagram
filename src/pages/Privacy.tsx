import { SeoHead } from "@/components/SeoHead";
import { useChangeLanguage } from "@/features/language/components/ChangeLanguageContext";

const Privacy = () => {
  const { isEnglish } = useChangeLanguage();
  return (
    <>
      <SeoHead
        title="Privacy | InstaCik"
        description="Pelajari bagaimana InstaCik menjaga privasi dan keamanan datamu. Kami tidak menyimpan atau membagikan data yang kamu unggah — semua proses berlangsung secara lokal tanpa tersimpan di server mana pun."
      />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            {!isEnglish ? (
              <div className="text-start w-full text-base [&_p]:text-justify">
                <h2 className="font-bold text-3xl mb-5">
                  Selamat datang di{" "}
                  <span className="bg-linear-to-r from-accent via-teal-200 to-emerald-300 bg-clip-text font-extrabold text-transparent ...">
                    Insta
                    <span className="bg-linear-to-r bg-clip-text from-emerald-200 via-teal-200 to-accent">
                      Cik
                    </span>
                  </span>
                  . Privasi kamu adalah prioritas utama kami.
                </h2>
                <p className="mt-2">
                  Kami tidak menyimpan, merekam, atau membagikan data apa pun
                  yang kamu masukkan di situs ini. Semua proses analisis
                  dilakukan langsung di browser kamu (client-side) tanpa
                  mengirimkan data pribadi ke server mana pun.
                </p>
                <ul className="space-y-5 mt-5">
                  <li className="space-y-2">
                    <h3 className="font-semibold ">
                      🔒 Data yang kami proses Username
                    </h3>
                    <p className="">
                      Instagram yang kamu masukkan hanya digunakan sementara
                      untuk menampilkan hasil analisis. Tidak ada data login,
                      password, atau informasi pribadi yang kami simpan.
                    </p>
                  </li>
                  <li className="space-y-2">
                    <h3 className="font-semibold ">
                      🚫 Tidak ada penyimpanan data
                    </h3>
                    <p className="mt-2">
                      Kami tidak menyimpan: Foto atau konten akun kamu Daftar
                      followers atau following Aktivitas yang kamu lakukan di
                      situs ini Begitu kamu menutup halaman, semua data akan
                      hilang secara otomatis.
                    </p>
                  </li>
                  <li className="space-y-2">
                    <h3 className="font-semibold">🤝 Keamanan </h3>
                    <p>
                      Kami menggunakan koneksi aman (HTTPS) untuk memastikan
                      semua komunikasi antara browser kamu dan situs kami
                      terenkripsi dengan baik.
                    </p>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="text-justify w-full text-base [&_p]:text-justify">
                <h2 className="font-bold text-2xl">
                  Welcome to{" "}
                  <span className="bg-linear-to-r from-accent via-teal-200 to-emerald-300 bg-clip-text font-extrabold text-transparent ...">
                    Insta
                    <span className="bg-linear-to-r bg-clip-text from-emerald-200 via-teal-200 to-accent">
                      Cik
                    </span>
                  </span>
                  . Your privacy is our top priority.
                </h2>
                <p className="mt-2">
                  We do not store, record, or share any data that you enter on
                  this website. All analysis processes are performed directly in
                  your browser (client-side) without sending any personal data
                  to our servers.
                </p>
                <ul className="space-y-5 mt-5">
                  <li className="space-y-2">
                    <h3 className="font-semibold ">🔒 Data We Process</h3>
                    <p className="">
                      The Instagram username you provide is only used
                      temporarily to generate the analysis results. We do not
                      store any login credentials, passwords, or personal
                      information.
                    </p>
                  </li>
                  <li className="space-y-2">
                    <h3 className="font-semibold ">🚫 No Data Storage</h3>
                    <p className="mt-2">
                      We do not store: Your profile photos or Instagram content
                      Your followers or following list Any activity you perform
                      on this website Once you close the page, all data is
                      automatically deleted.
                    </p>
                  </li>
                  <li className="space-y-2">
                    <h3 className="font-semibold"> 🤝 Security </h3>
                    <p>
                      We use a secure (HTTPS) connection to ensure that all
                      communications between your browser and our website are
                      fully encrypted.
                    </p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
