Berikut ini adalah versi README.md *yang sudah disesuaikan dengan informasi proyekmu secara akurat* — *frontend-only, menggunakan **localStorage* (bukan Node.js/Express), model AI berbasis *TensorFlow\.js, dan ditujukan untuk membantu petani di **Sulawesi Selatan*.

---

markdown
# 🌶 ChiliDetect - Deteksi Penyakit Tanaman Cabai Berbasis AI

## 📄 Deskripsi
**ChiliDetect** adalah aplikasi web berbasis AI yang membantu petani dan masyarakat umum dalam mengidentifikasi penyakit daun cabai melalui gambar. Aplikasi ini dibuat dengan tujuan mendukung petani lokal — terutama di Sulawesi Selatan — dalam mencegah kerugian panen dan meningkatkan hasil pertanian secara efisien. Dilengkapi dengan fitur chatbot, aplikasi ini memberikan informasi interaktif dan edukatif seputar perawatan tanaman cabai.

## 🚀 Fitur Utama

- 📷 **Deteksi Penyakit Otomatis:** Analisis gambar daun cabai menggunakan model AI berbasis TensorFlow.js    
- 📱 **Antarmuka Responsif:** Dapat diakses dengan nyaman dari smartphone, tablet, maupun desktop  
- 🧠 **Penyimpanan Lokal:** Riwayat deteksi dan interaksi disimpan menggunakan localStorage (tanpa database)  
- 🌶 **Edukasi Pertanian:** Menyediakan informasi tentang jenis penyakit, gejala, dan penanganannya

## 🧪 Jenis Penyakit yang Dideteksi

- Bacterial Spot  
- Curl Virus  
- White Spot  
- Cercospora Leaf Spot  
- Nutrition Deficiency  
- Healthy (Tanaman Sehat)

## 🛠 Teknologi yang Digunakan

- **Frontend:** HTML, CSS, JavaScript  
- **Machine Learning:** TensorFlow.js (model klasifikasi gambar di sisi klien)  
- **Penyimpanan:** Local Storage (untuk menyimpan riwayat)  
- **Hosting:** Vercel / Netlify (direkomendasikan) dan Railway untuk Backend

## 💻 Persyaratan Sistem

- Browser modern (Chrome, Firefox, Edge, Safari)  
- Koneksi internet untuk memuat model dan mengakses halaman web  
- Kamera atau file gambar daun untuk dideteksi  

## ⚙ Cara Menjalankan Aplikasi

Tidak memerlukan backend atau server.

### Jalur 1: Langsung Buka di Browser
1. Download atau clone project ini  
2. Buka `index.html` langsung di browser  
3. Aplikasi langsung dapat digunakan

### Jalur 2: Jalankan dengan Live Server (opsional)
1. Buka folder proyek dengan Visual Studio Code  
2. Jalankan menggunakan ekstensi Live Server  

## 🧑‍🌾 Konteks Lokal

Proyek ini dibuat oleh mahasiswa dari **Sulawesi Selatan**, sebuah wilayah di mana sebagian besar masyarakatnya bekerja sebagai petani, termasuk orang tua kami sendiri. Budidaya cabai sangat umum di daerah kami, namun banyak petani masih kesulitan mengenali penyakit tanaman secara dini. Kami membuat aplikasi ini untuk membantu mereka mencegah kerugian hasil panen dan memperkuat ketahanan pangan lokal melalui teknologi.

## 📁 Struktur Proyek



├── index.html             # Halaman utama aplikasi
├── style.css              # File gaya (CSS)
├── script.js              # Logika aplikasi dan deteksi
├── model/                 # Folder model TensorFlow\.js
│   └── model.json         # Model klasifikasi penyakit
├── assets/                # Gambar ikon, contoh daun, dll.
└── README.md              # Dokumentasi proyek



## 📄 Lisensi

Proyek ini menggunakan lisensi [MIT License](LICENSE)

## 👥 Pengembang

Tim Pengembang ChiliDetect  
- [Abid Abdillah]  
- [Sheila Dwi Yulianti Saputri]  
- [Muh. Afthar algiffari]  
- [Pepri Andika]  
- [Reinhart Jens Robert]  

## 📬 Kontak

Jika ada pertanyaan atau ingin berdiskusi:
- Email: [afthar05@gmail.com]
- Website (opsional): [https://c-project-frontend.vercel.app/]
> Dibuat dengan ❤ untuk petani Indonesia — khususnya di Sulawesi Selatan.


---
