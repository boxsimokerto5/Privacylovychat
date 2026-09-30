export interface SectionItem {
  id: string;
  number: number;
  title: string;
  summary?: string;
  badge?: string;
  content: {
    paragraphs?: string[];
    subsections?: {
      id: string;
      letter?: string;
      title: string;
      description?: string;
      bulletPoints?: {
        label: string;
        text: string;
        highlight?: boolean;
      }[];
      importantNotice?: string;
    }[];
    bulletPoints?: {
      label?: string;
      text: string;
    }[];
    externalLinks?: {
      name: string;
      url: string;
    }[];
    steps?: string[];
    importantNotice?: string;
    contactInfo?: {
      label: string;
      value: string;
      link?: string;
      type: 'email' | 'text';
    }[];
  };
}

export interface PermissionDetail {
  name: string;
  androidName: string;
  icon: string;
  purposeEn: string;
  purposeId: string;
  mandatory: boolean;
}

export const APP_DETAILS = {
  appName: "Lovy Chat",
  altName: "Love Chat / Lovy",
  developerName: "geccko creator",
  primaryContactEmail: "eccko.w4@gmail.com",
  deletionEmail: "eccko.w4@gmail.com",
  effectiveDate: "September 30, 2026",
  minAge: 18,
  googlePlayCompliant: true,
};

export const PERMISSION_LIST: PermissionDetail[] = [
  {
    name: "Location (Approximate & Precise)",
    androidName: "ACCESS_COARSE_LOCATION / ACCESS_FINE_LOCATION",
    icon: "MapPin",
    purposeEn: "Used solely to compute approximate distances to other active users in 'People Nearby'. Exact GPS coordinates are NEVER displayed or shared.",
    purposeId: "Digunakan hanya untuk menghitung jarak perkiraan ke pengguna lain di 'People Nearby'. Koordinat GPS persis TIDAK PERNAH dibagikan atau ditampilkan.",
    mandatory: false
  },
  {
    name: "Camera",
    androidName: "CAMERA",
    icon: "Camera",
    purposeEn: "Used only when you choose to take real-time photos for your profile avatar, private chat attachments, or moments.",
    purposeId: "Digunakan hanya saat Anda memilih untuk mengambil foto profil, lampiran obrolan, atau postingan feed momen.",
    mandatory: false
  },
  {
    name: "Photo Library / Storage",
    androidName: "READ_MEDIA_IMAGES / READ_EXTERNAL_STORAGE",
    icon: "Image",
    purposeEn: "Used to select existing photos from your device gallery to share with connections or upload as your avatar.",
    purposeId: "Digunakan untuk memilih foto dari galeri perangkat untuk dibagikan dalam obrolan atau avatar profil.",
    mandatory: false
  },
  {
    name: "Microphone",
    androidName: "RECORD_AUDIO",
    icon: "Mic",
    purposeEn: "Used solely to record voice notes when you explicitly press and hold the voice message recording button in private chats.",
    purposeId: "Digunakan semata-mata untuk merekam pesan suara saat Anda menekan dan menahan tombol rekam di obrolan.",
    mandatory: false
  },
  {
    name: "Google Advertising ID",
    androidName: "AD_ID / GAID",
    icon: "ShieldAlert",
    purposeEn: "Used by advertising partners (ironSource & Pangle) to serve compliant, non-fraudulent contextual ads in accordance with Google Play rules.",
    purposeId: "Digunakan oleh mitra periklanan (ironSource & Pangle) untuk menayangkan iklan yang aman dan mencegah penipuan sesuai aturan Google Play.",
    mandatory: false
  }
];

export const PRIVACY_CONTENT_EN: SectionItem[] = [
  {
    id: "section-1",
    number: 1,
    title: "Introduction",
    summary: "Welcome to Lovy. Overview of our commitment to transparent data handling.",
    content: {
      paragraphs: [
        `Welcome to Lovy ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency regarding how your information is collected, used, and safeguarded. This Privacy Policy applies to the Lovy mobile application and any related services (collectively, the "Service").`,
        `By accessing or using Lovy, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with this policy, please do not use our Service.`
      ]
    }
  },
  {
    id: "section-2",
    number: 2,
    title: "Information We Collect",
    summary: "Details of account data, user content, location handling, media permissions, and device metrics.",
    badge: "Key Section",
    content: {
      paragraphs: [
        "We collect only the information necessary to provide and improve our social chat and nearby discovery features:"
      ],
      subsections: [
        {
          id: "section-2a",
          letter: "a",
          title: "Account and Profile Information",
          bulletPoints: [
            {
              label: "Google Account Data",
              text: "When you sign in using Google Sign-In, we receive basic authentication information from Google, including your email address, display name, profile photo, and unique Google account identifier."
            },
            {
              label: "User Profile",
              text: "Any additional information you choose to provide, such as your bio, gender, birth date/age, and status."
            }
          ]
        },
        {
          id: "section-2b",
          letter: "b",
          title: "User-Generated Content",
          bulletPoints: [
            {
              label: "Messages and Communications",
              text: "Text messages, photos, and voice notes that you transmit through private chats or virtual drift bottles."
            },
            {
              label: "Moments Feed",
              text: "Photos, captions, and comments that you share publicly or within your feed."
            }
          ]
        },
        {
          id: "section-2c",
          letter: "c",
          title: "Location Information",
          bulletPoints: [
            {
              label: "Approximate and Precise Location",
              text: "If you grant permission, we access your device's location solely to calculate approximate distances to other active users for the 'People Nearby' feature."
            }
          ],
          importantNotice: "Important: Your exact GPS coordinates are NEVER displayed or shared with other users. Only relative distances (e.g., '500 m' or '2 km') are displayed."
        },
        {
          id: "section-2d",
          letter: "d",
          title: "Media and Audio Permissions",
          bulletPoints: [
            {
              label: "Camera and Photos",
              text: "Used only when you choose to take a photo or select an image from your gallery for your avatar, chat attachments, or moments."
            },
            {
              label: "Microphone",
              text: "Used solely to record voice notes when you explicitly press and hold the voice message recording button in chat."
            }
          ]
        },
        {
          id: "section-2e",
          letter: "e",
          title: "Device and Usage Data",
          bulletPoints: [
            {
              label: "Device Information",
              text: "Device model, operating system version, unique device identifiers (e.g., Google Advertising ID / GAID), language settings, and network connection type."
            },
            {
              label: "Log Data",
              text: "Diagnostic and crash data to troubleshoot technical errors and maintain app stability."
            }
          ]
        }
      ]
    }
  },
  {
    id: "section-3",
    number: 3,
    title: "Third-Party Services and Advertising",
    summary: "Trusted service partners for authentication, storage, real-time messaging, and advertising.",
    content: {
      paragraphs: [
        "We partner with trusted third-party service providers who may collect non-personal data for authentication, infrastructure, and advertising purposes:"
      ],
      bulletPoints: [
        {
          label: "Google Identity Services",
          text: "For secure Google account authentication and login verification."
        },
        {
          label: "ironSource (Unity LevelPlay) & Pangle Ad Network",
          text: "To display advertisements within the application. These ad networks may process your Google Advertising ID (GAID) and device parameters to serve relevant ads and prevent fraud in compliance with Google Play Developer Policies."
        },
        {
          label: "Cloudflare R2",
          text: "Secure, distributed cloud storage for user-uploaded media (profile avatars and chat images)."
        },
        {
          label: "Centrifugo",
          text: "Real-time WebSocket messaging infrastructure ensuring rapid delivery of chats and notifications."
        }
      ],
      externalLinks: [
        {
          name: "Google Privacy Policy",
          url: "https://policies.google.com/privacy"
        },
        {
          name: "ironSource Privacy Policy",
          url: "https://www.is.com/privacy-policy/"
        },
        {
          name: "Pangle Privacy Policy",
          url: "https://www.pangleglobal.com/privacy"
        }
      ]
    }
  },
  {
    id: "section-4",
    number: 4,
    title: "How We Use Your Information",
    summary: "Clear purpose specification for user authentication, discovery, messaging, and safety.",
    content: {
      paragraphs: [
        "We use the collected information strictly for the following purposes:"
      ],
      bulletPoints: [
        {
          text: "To create, maintain, and authenticate your user account."
        },
        {
          text: "To deliver real-time messaging, voice notes, and photo sharing."
        },
        {
          text: "To calculate proximity distances for the 'People Nearby' discovery feature."
        },
        {
          text: "To display public moments and facilitate the drift bottle interaction."
        },
        {
          text: "To enforce our Terms of Service, Community Guidelines, and prevent harassment, spam, and fraud."
        },
        {
          text: "To provide customer support and resolve technical issues."
        }
      ]
    }
  },
  {
    id: "section-5",
    number: 5,
    title: "Data Sharing and Disclosure",
    summary: "Strict no-sale policy. Conditions under which public profile items or legal disclosures occur.",
    content: {
      paragraphs: [
        "We do not sell, rent, or trade your personal information to third parties. We may disclose your data only in the following circumstances:"
      ],
      bulletPoints: [
        {
          label: "With Other Users",
          text: "Information in your public profile (display name, avatar, bio, approximate distance) and posts you publish publicly are visible to other users."
        },
        {
          label: "Legal Compliance",
          text: "If required by law, regulation, subpoena, or governmental request to protect the rights, property, or safety of Lovy, our users, or the public."
        }
      ]
    }
  },
  {
    id: "section-6",
    number: 6,
    title: "Data Retention and Account Deletion",
    summary: "Instructions for permanently deleting your account and all associated data within 30 days.",
    badge: "Play Store Requirement",
    content: {
      paragraphs: [
        "We retain your personal data only for as long as your account remains active or as needed to provide you with the Service.",
        "Account Deletion and Data Removal: You have full control over your data. You may request the deletion of your account and all associated personal data at any time through either of the following methods:"
      ],
      steps: [
        "In-App: Go to Profile -> Settings -> Delete Account.",
        "Via Email: Send a deletion request to eccko.w4@gmail.com with the subject line 'Request Account Deletion' from your registered Google email address."
      ],
      importantNotice: "Upon verification, your profile, messages, shared photos, and stored data will be permanently purged from our active databases within 30 days, except where retention is required by applicable law."
    }
  },
  {
    id: "section-7",
    number: 7,
    title: "User Safety and Community Moderation",
    summary: "Blocking and reporting mechanisms to protect users against harassment and inappropriate content.",
    content: {
      paragraphs: [
        "Lovy strictly prohibits inappropriate content, harassment, hate speech, bullying, and illegal activities. To ensure user safety:"
      ],
      bulletPoints: [
        {
          label: "Immediate User Blocking",
          text: "Users can block any individual at any time directly from the chat screen or profile view."
        },
        {
          label: "Abuse Reporting",
          text: "Users can report abusive content or bad actors using the in-app 'Report' button. Reported accounts and content are reviewed promptly by our moderation team."
        }
      ]
    }
  },
  {
    id: "section-8",
    number: 8,
    title: "Children's Privacy",
    summary: "18+ age restriction and prompt deletion of any unauthorized minor accounts.",
    content: {
      paragraphs: [
        "Lovy is intended for individuals aged 18 and older (or the minimum legal age of majority in your jurisdiction). We do not knowingly collect personal information from children under 13 (or under 16 where required by local law).",
        "If we discover that a minor has provided us with personal information, we will delete it immediately. If you believe a child has created an account, please contact us at eccko.w4@gmail.com."
      ]
    }
  },
  {
    id: "section-9",
    number: 9,
    title: "Security",
    summary: "Industry-standard HTTPS encryption and cloud infrastructure safeguards.",
    content: {
      paragraphs: [
        "We implement industry-standard technical and organizational security measures, including HTTPS encryption in transit and secure cloud storage protocols, to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
      ]
    }
  },
  {
    id: "section-10",
    number: 10,
    title: "Changes to This Privacy Policy",
    summary: "Updates reflected via the Last Updated date and ongoing transparency.",
    content: {
      paragraphs: [
        "We may update our Privacy Policy periodically to reflect changes in our practices or applicable regulations. We will notify you of any material changes by updating the 'Last Updated' date at the top of this page. You are advised to review this Privacy Policy periodically."
      ]
    }
  },
  {
    id: "section-11",
    number: 11,
    title: "Contact Us",
    summary: "Official contact channels for inquiries, developer identity, and privacy concerns.",
    content: {
      paragraphs: [
        "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:"
      ],
      contactInfo: [
        {
          label: "Email",
          value: "eccko.w4@gmail.com",
          link: "mailto:eccko.w4@gmail.com",
          type: "email"
        },
        {
          label: "Application",
          value: "Love Chat (Lovy)",
          type: "text"
        },
        {
          label: "Developer",
          value: "geccko creator",
          type: "text"
        }
      ]
    }
  }
];

export const PRIVACY_CONTENT_ID: SectionItem[] = [
  {
    id: "section-1",
    number: 1,
    title: "Pendahuluan",
    summary: "Selamat datang di Lovy. Komitmen kami menjaga transparansi dan privasi data Anda.",
    content: {
      paragraphs: [
        `Selamat datang di Lovy ("kami"). Kami berkomitmen untuk melindungi privasi Anda dan memastikan transparansi mengenai bagaimana informasi Anda dikumpulkan, digunakan, dan dilindungi. Kebijakan Privasi ini berlaku untuk aplikasi seluler Lovy dan layanan terkait (secara kolektif disebut "Layanan").`,
        `Dengan mengakses atau menggunakan Lovy, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan Kebijakan Privasi ini. Jika Anda tidak menyetujui kebijakan ini, mohon untuk tidak menggunakan Layanan kami.`
      ]
    }
  },
  {
    id: "section-2",
    number: 2,
    title: "Informasi yang Kami Kumpulkan",
    summary: "Rincian data akun, konten pengguna, lokasi, izin media, dan data perangkat.",
    badge: "Penting",
    content: {
      paragraphs: [
        "Kami hanya mengumpulkan informasi yang diperlukan untuk menyediakan dan meningkatkan fitur obrolan sosial dan pencarian pengguna terdekat:"
      ],
      subsections: [
        {
          id: "section-2a",
          letter: "a",
          title: "Informasi Akun dan Profil",
          bulletPoints: [
            {
              label: "Data Akun Google",
              text: "Saat Anda masuk menggunakan Google Sign-In, kami menerima informasi otentikasi dasar dari Google, termasuk alamat email, nama tampilan, foto profil, dan pengenal unik akun Google Anda."
            },
            {
              label: "Profil Pengguna",
              text: "Informasi tambahan apa pun yang Anda pilih untuk dimasukkan, seperti bio, jenis kelamin, tanggal lahir/usia, dan status."
            }
          ]
        },
        {
          id: "section-2b",
          letter: "b",
          title: "Konten Buatan Pengguna (User-Generated Content)",
          bulletPoints: [
            {
              label: "Pesan dan Komunikasi",
              text: "Pesan teks, foto, dan pesan suara (voice note) yang Anda kirimkan melalui obrolan pribadi atau botol hanyut virtual (drift bottle)."
            },
            {
              label: "Feed Momen",
              text: "Foto, keterangan (caption), dan komentar yang Anda bagikan secara publik atau di dalam feed Anda."
            }
          ]
        },
        {
          id: "section-2c",
          letter: "c",
          title: "Informasi Lokasi",
          bulletPoints: [
            {
              label: "Lokasi Perkiraan dan Akurat",
              text: "Jika Anda memberikan izin, kami mengakses lokasi perangkat Anda semata-mata untuk menghitung jarak perkiraan ke pengguna aktif lainnya untuk fitur 'Orang di Sekitar' (People Nearby)."
            }
          ],
          importantNotice: "Penting: Koordinat GPS persis Anda TIDAK PERNAH ditampilkan atau dibagikan kepada pengguna lain. Hanya jarak relatif (misalnya: '500 m' atau '2 km') yang ditampilkan."
        },
        {
          id: "section-2d",
          letter: "d",
          title: "Izin Media dan Audio",
          bulletPoints: [
            {
              label: "Kamera dan Foto",
              text: "Hanya digunakan saat Anda memilih untuk mengambil foto atau memilih gambar dari galeri Anda untuk avatar, lampiran obrolan, atau momen."
            },
            {
              label: "Mikrofon",
              text: "Digunakan semata-mata untuk merekam catatan suara saat Anda secara eksplisit menekan dan menahan tombol rekam pesan suara di obrolan."
            }
          ]
        },
        {
          id: "section-2e",
          letter: "e",
          title: "Data Perangkat dan Penggunaan",
          bulletPoints: [
            {
              label: "Informasi Perangkat",
              text: "Model perangkat, versi sistem operasi, pengenal unik perangkat (misalnya Google Advertising ID / GAID), pengaturan bahasa, dan jenis koneksi jaringan."
            },
            {
              label: "Data Log",
              text: "Data diagnostik dan laporan crash untuk mengatasi kesalahan teknis serta menjaga stabilitas aplikasi."
            }
          ]
        }
      ]
    }
  },
  {
    id: "section-3",
    number: 3,
    title: "Layanan Pihak Ketiga dan Iklan",
    summary: "Mitra infrastruktur terpercaya untuk login, penyimpanan, pengiriman pesan, dan iklan.",
    content: {
      paragraphs: [
        "Kami bermitra dengan penyedia layanan pihak ketiga terpercaya yang dapat mengumpulkan data non-pribadi untuk tujuan otentikasi, infrastruktur, dan periklanan:"
      ],
      bulletPoints: [
        {
          label: "Google Identity Services",
          text: "Untuk otentikasi akun Google yang aman."
        },
        {
          label: "ironSource (Unity LevelPlay) & Pangle Ad Network",
          text: "Untuk menampilkan iklan di dalam aplikasi. Jaringan iklan ini dapat memproses Google Advertising ID (GAID) dan parameter perangkat Anda untuk menayangkan iklan yang relevan dan mencegah penipuan sesuai Kebijakan Pengembang Google Play."
        },
        {
          label: "Cloudflare R2",
          text: "Penyimpanan cloud terdistribusi yang aman untuk media yang diunggah pengguna (avatar profil dan gambar obrolan)."
        },
        {
          label: "Centrifugo",
          text: "Infrastruktur perpesanan WebSocket real-time."
        }
      ],
      externalLinks: [
        {
          name: "Kebijakan Privasi Google",
          url: "https://policies.google.com/privacy"
        },
        {
          name: "Kebijakan Privasi ironSource",
          url: "https://www.is.com/privacy-policy/"
        },
        {
          name: "Kebijakan Privasi Pangle",
          url: "https://www.pangleglobal.com/privacy"
        }
      ]
    }
  },
  {
    id: "section-4",
    number: 4,
    title: "Cara Kami Menggunakan Informasi Anda",
    summary: "Tujuan pengolahan data untuk layanan sosial, obrolan, dan keamanan pengguna.",
    content: {
      paragraphs: [
        "Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:"
      ],
      bulletPoints: [
        {
          text: "Membuat, memelihara, dan mengotentikasi akun pengguna Anda."
        },
        {
          text: "Menyampaikan pesan instan (real-time), pesan suara, dan berbagi foto."
        },
        {
          text: "Menghitung jarak kedekatan untuk fitur penemuan 'Orang di Sekitar'."
        },
        {
          text: "Menampilkan feed momen publik dan memfasilitasi interaksi botol hanyut (drift bottle)."
        },
        {
          text: "Menegakkan Ketentuan Layanan, Pedoman Komunitas, serta mencegah pelecehan, spam, dan penipuan."
        },
        {
          text: "Memberikan dukungan pelanggan dan menyelesaikan masalah teknis."
        }
      ]
    }
  },
  {
    id: "section-5",
    number: 5,
    title: "Berbagi dan Pengungkapan Data",
    summary: "Kami tidak menjual data Anda. Kondisi pengungkapan profil publik dan hukum.",
    content: {
      paragraphs: [
        "Kami tidak menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga. Kami hanya dapat mengungkapkan data Anda dalam kondisi berikut:"
      ],
      bulletPoints: [
        {
          label: "Kepada Pengguna Lain",
          text: "Informasi di profil publik Anda (nama tampilan, avatar, bio, perkiraan jarak) dan postingan publik dapat dilihat oleh pengguna lain."
        },
        {
          label: "Kepatuhan Hukum",
          text: "Jika diwajibkan oleh undang-undang, peraturan, panggilan pengadilan, atau permintaan resmi pemerintah untuk melindungi hak, kepemilikan, atau keselamatan Lovy, pengguna kami, atau publik."
        }
      ]
    }
  },
  {
    id: "section-6",
    number: 6,
    title: "Retensi Data dan Penghapusan Akun",
    summary: "Tata cara menghapus akun dan data pribadi secara permanen dalam kurun waktu 30 hari.",
    badge: "Wajib Google Play",
    content: {
      paragraphs: [
        "Kami menyimpan data pribadi Anda hanya selama akun Anda tetap aktif atau selama diperlukan untuk menyediakan Layanan kepada Anda.",
        "Penghapusan Akun dan Penghapusan Data: Anda memiliki kendali penuh atas data Anda. Anda dapat meminta penghapusan akun dan seluruh data pribadi terkait kapan saja:"
      ],
      steps: [
        "Di Dalam Aplikasi: Buka Profil -> Pengaturan -> Hapus Akun (Profile -> Settings -> Delete Account).",
        "Melalui Email: Kirim permintaan penghapusan ke eccko.w4@gmail.com dengan subjek 'Request Account Deletion' dari alamat email Google yang terdaftar."
      ],
      importantNotice: "Setelah diverifikasi, profil, obrolan, foto yang dibagikan, dan seluruh data yang tersimpan akan dihapus secara permanen dari basis data aktif kami dalam waktu 30 hari, kecuali apabila penyimpanan diwajibkan oleh hukum yang berlaku."
    }
  },
  {
    id: "section-7",
    number: 7,
    title: "Keamanan Pengguna dan Moderasi Komunitas",
    summary: "Fitur pemblokiran dan pelaporan untuk mencegah pelecehan dan konten tidak pantas.",
    content: {
      paragraphs: [
        "Lovy secara tegas melarang konten tidak pantas, pelecehan, ujaran kebencian, perundungan, dan aktivitas ilegal. Untuk memastikan keselamatan pengguna:"
      ],
      bulletPoints: [
        {
          label: "Pemblokiran Pengguna Seketika",
          text: "Pengguna dapat memblokir individu mana pun kapan saja langsung dari layar obrolan atau tampilan profil."
        },
        {
          label: "Pelaporan Pelanggaran",
          text: "Pengguna dapat melaporkan konten kasar atau pelaku pelanggaran melalui tombol 'Laporkan' (Report) di aplikasi. Akun dan konten yang dilaporkan akan segera ditinjau oleh tim moderasi kami."
        }
      ]
    }
  },
  {
    id: "section-8",
    number: 8,
    title: "Privasi Anak-Anak",
    summary: "Batasan usia 18+ dan penghapusan langsung jika ditemukan akun di bawah umur.",
    content: {
      paragraphs: [
        "Lovy ditujukan untuk individu berusia 18 tahun ke atas (atau usia dewasa menurut hukum di yurisdiksi Anda). Kami tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak di bawah 13 tahun (atau di bawah 16 tahun jika diwajibkan oleh hukum setempat).",
        "Jika kami mendapati bahwa anak di bawah umur telah memberikan informasi pribadi kepada kami, kami akan segera menghapusnya. Jika Anda meyakini ada anak di bawah umur yang membuat akun, silakan hubungi kami di eccko.w4@gmail.com."
      ]
    }
  },
  {
    id: "section-9",
    number: 9,
    title: "Keamanan",
    summary: "Enkripsi HTTPS dan standar keamanan cloud untuk menjaga integritas data.",
    content: {
      paragraphs: [
        "Kami menerapkan langkah-langkah keamanan teknis dan organisasional berstandar industri, termasuk enkripsi HTTPS selama transmisi data dan protokol penyimpanan cloud yang aman, untuk melindungi informasi pribadi Anda dari akses tidak sah, pengubahan, pengungkapan, atau pemusnahan."
      ]
    }
  },
  {
    id: "section-10",
    number: 10,
    title: "Perubahan pada Kebijakan Privasi Ini",
    summary: "Pemberitahuan perubahan kebijakan secara berkala melalui tanggal pembaruan.",
    content: {
      paragraphs: [
        "Kami dapat memperbarui Kebijakan Privasi kami secara berkala untuk mencerminkan perubahan dalam praktik kami atau peraturan yang berlaku. Kami akan memberi tahu Anda tentang setiap perubahan material dengan memperbarui tanggal 'Terakhir Diperbarui' di bagian atas halaman ini. Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala."
      ]
    }
  },
  {
    id: "section-11",
    number: 11,
    title: "Hubungi Kami",
    summary: "Saluran kontak resmi untuk pertanyaan, bantuan privasi, dan identitas pengembang.",
    content: {
      paragraphs: [
        "Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan mengenai Kebijakan Privasi ini atau data pribadi Anda, silakan hubungi kami di:"
      ],
      contactInfo: [
        {
          label: "Email",
          value: "eccko.w4@gmail.com",
          link: "mailto:eccko.w4@gmail.com",
          type: "email"
        },
        {
          label: "Aplikasi",
          value: "Love Chat (Lovy)",
          type: "text"
        },
        {
          label: "Pengembang",
          value: "geccko creator",
          type: "text"
        }
      ]
    }
  }
];
