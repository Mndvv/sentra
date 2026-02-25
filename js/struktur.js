// Data Pengurus Inti
        const pengurusData = {
            ketua: {
                id: 'ketua',
                nama: 'Cecillia Natasya Sonthani',
                jabatan: 'Ketua Umum',
                foto: 'assets/pp/cece.JPG',
                kelas: 'XI.2',
                tempatLahir: 'Bekasi',
                tanggalLahir: '11 Januari 2009',
                alamat: 'Citra Indah City, Bukit Mahoni Luar Blok S.00 No. 110',
                hobi: 'Membaca Buku, Bernyanyi, Dance',
                motto: 'Be yourself, for yourself',
                visi: 'Menjadikan OSIS SMAN 2 Jonggol organisasi yang dapat dipercaya sekolah, berprestasi, aktif, bertanggung jawab, dan memiliki rasa kekeluargaan yang erat.',
                misi: [
                    'Meningkatkan kreativitas tiap anggota OSIS',
                    'Meningkatkan rasa persatuan dan kesatuan tiap anggota OSIS',
                    'Meningkatkan ketaqwaan siswa/i kepada Tuhan YME',
                    'Mengedepankan adab tiap anggota OSIS dengan berjalan nya 5S di mana saja'
                ],
                programKerja: [
                    {
                        nama: 'Leadership Training',
                        deskripsi: 'Pelatihan kepemimpinan untuk pengurus OSIS baru',
                        target: 'Seluruh pengurus OSIS',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Rapat Koordinasi Rutin',
                        deskripsi: 'Rapat mingguan untuk evaluasi dan perencanaan program',
                        target: 'Pengurus inti',
                        status: 'Berjalan'
                    }
                ]
            },
            wakil1: {
                id: 'wakil1',
                nama: 'Adam Abdulloh Mu\'arif',
                jabatan: 'Wakil Ketua 1',
                foto: 'assets/pp/adam.JPG',
                kelas: 'XI.5',
                tempatLahir: 'bogor',
                tanggalLahir: '18 Juli 2008',
                alamat: 'Rawabogo Weninggalih, Jonggol, Bogor, Jawa Barat, Indonesia',
                hobi: 'Memasak, Traveling, Komunikasi',
                motto: 'Sesungguh Bersama Kesulitan Ada Kemudahan.',
                programKerja: [
                    {
                        nama: 'Koordinasi Bidang Akademik',
                        deskripsi: 'Mengawasi dan mendukung program sekbid akademik',
                        target: 'Sekbid 3,4,5',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Pengembangan Minat dan Bakat',
                        deskripsi: 'Fasilitasi pengembangan bakat siswa',
                        target: 'Seluruh siswa',
                        status: 'Rencana'
                    }
                ]
            },
            wakil2: {
                id: 'wakil2',
                nama: 'Muhammad Fadhli Hidayatullah',
                jabatan: 'Wakil Ketua 2',
                foto: 'assets/pp/adi.JPG',
                kelas: 'X.7',
                tempatLahir: 'Surabaya',
                tanggalLahir: '10 November 2008',
                alamat: 'Jl. Pahlawan No. 23, Surabaya',
                hobi: 'Fotografi, Menulis',
                motto: 'Kreativitas adalah kunci inovasi.',
                programKerja: [
                    {
                        nama: 'Koordinasi Bidang Non-Akademik',
                        deskripsi: 'Mengawasi program sekbid non-akademik',
                        target: 'Sekbid 6,7,8,9,10',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Festival Kreativitas Siswa',
                        deskripsi: 'Event tahunan untuk menampilkan kreativitas siswa',
                        target: 'Seluruh siswa',
                        status: 'Rencana'
                    }
                ]
            },
            sekum: {
                id: 'sekum',
                nama: 'Maulana Ferdi Irawan',
                jabatan: 'Sekretaris Umum',
                foto: 'assets/pp/pe.JPG',
                kelas: 'XI.2',
                tempatLahir: 'Bogor',
                tanggalLahir: '4 Agustus 2008',
                alamat: 'Jl. Desa Sukamaju No.43 Kp. Menan',
                hobi: 'Menulis, Desain Grafis, Coding',
                motto: 'Selesai Ngga Selesai Dikumpulkan',
                programKerja: [
                    {
                        nama: 'Sistem Elektronik Terpadu',
                        deskripsi: 'Digitalisasi dokumen dan arsip OSIS',
                        target: 'Seluruh pengurus',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Buku Tahunan OSIS',
                        deskripsi: 'Penyusunan laporan tahunan OSIS',
                        target: 'Dokumentasi periode',
                        status: 'Rencana'
                    }
                ]
            },
            sek1: {
                id: 'sek1',
                nama: 'Anggun Permata Jalasena Putri',
                jabatan: 'Sekretaris 1',
                foto: 'assets/pp/anggun.JPG',
                kelas: 'XI.5',
                tempatLahir: 'Jakarta',
                tanggalLahir: '2 November 2008',
                alamat: 'Komplek TNI AL Sukamanah Jonggol Bogor Jawa Barat Indonesia',
                hobi: 'Memasak, traveling, olahraga',
                motto: 'Jadilah versi terbaik dari dirimu setiap hari.',
                programKerja: [
                    {
                        nama: 'Notulensi Rapat Digital',
                        deskripsi: 'Pembuatan notulensi rapat yang sistematis',
                        target: 'Setiap rapat OSIS',
                        status: 'Berjalan'
                    }
                ]
            },
            sek2: {
                id: 'sek2',
                nama: 'Inez Mikha Rahayu',
                jabatan: 'Sekretaris 2',
                foto: 'assets/pp/inez.JPG',
                kelas: 'XI IPS 2',
                tempatLahir: 'Malang',
                tanggalLahir: '30 April 2008',
                alamat: 'Jl. Bromo No. 12, Malang',
                hobi: 'Menyanyi, Menari',
                motto: 'Setiap catatan adalah sejarah.',
                programKerja: [
                    {
                        nama: 'Arsip Surat Menyurat',
                        deskripsi: 'Pengelolaan surat masuk dan keluar',
                        target: 'Administrasi OSIS',
                        status: 'Berjalan'
                    }
                ]
            },
            bendum: {
                id: 'bendum',
                nama: 'Lulu Karpika',
                jabatan: 'Bendahara Umum',
                foto: 'assets/pp/lulu.JPG',
                kelas: 'XI.5',
                tempatLahir: 'Bogor',
                tanggalLahir: '15 Mei 2009',
                alamat: ' Kp. Rawa Makmur Jonggol Bogor Jawa Barat Indonesia.',
                hobi: 'Memasak',
                motto: 'Hargai proses dan nikmati hasilnya.',
                programKerja: [
                    {
                        nama: 'Sistem Keuangan Digital',
                        deskripsi: 'Aplikasi pencatatan keuangan OSIS',
                        target: 'Transparansi keuangan',
                        status: 'Berjalan'
                    },
                    {
                        nama: 'Fundraising Creative',
                        deskripsi: 'Program penggalangan dana kreatif',
                        target: 'Kas OSIS',
                        status: 'Rencana'
                    }
                ]
            },
            ben1: {
                id: 'ben1',
                nama: 'Erlangga Nuriansyah',
                jabatan: 'Bendahara 1',
                foto: 'assets/pp/angga.JPG',
                kelas: 'X.8',
                tempatLahir: 'Jakarta',
                tanggalLahir: '10 Januari 2010',
                alamat: 'Citra indah city bukit lotus teratai Cg 18',
                hobi: 'Belajar, Olahraga',
                motto: 'Jatuh itu biasa, bangkit itu pilihan',
                programKerja: [
                    {
                        nama: 'Laporan Keuangan Bulanan',
                        deskripsi: 'Penyusunan laporan keuangan periodik',
                        target: 'Transparansi',
                        status: 'Berjalan'
                    }
                ]
            }
        };

        // Data Sekbid (tetap sama)
        const sekbidData = [
            {
                number: 1,
                name: "Keimanan dan Ketaqwaan Terhadap Tuhan Yang Maha Esa",
                members: [
                    "Ahmad Fauzi - Koordinator",
                    "Siti Nurhaliza - Anggota",
                    "Budi Santoso - Anggota",
                    "Dewi Lestari - Anggota"
                ],
                programs: [
                    {
                        name: "Kajian Rutin Jumat",
                        description: "Kajian keagamaan setiap hari Jumat pagi sebelum pembelajaran dimulai.",
                        status: "Berjalan"
                    },
                    {
                        name: "Peringatan Hari Besar Keagamaan",
                        description: "Menyelenggarakan kegiatan untuk memperingati hari besar keagamaan.",
                        status: "Rencana"
                    }
                ]
            },
            {
                number: 2,
                name: "Budi Pekerti atau Akhlak Mulia",
                members: [
                    "Rina Wijaya - Koordinator",
                    "Andi Saputra - Anggota",
                    "Maya Sari - Anggota"
                ],
                programs: [
                    {
                        name: "Gerakan Senyum, Sapa, Salam",
                        description: "Membudayakan 3S di lingkungan sekolah.",
                        status: "Berjalan"
                    }
                ]
            },
            {
                number: 3,
                name: "Kepribadian Unggul, Wawasan Kebangsaan dan Bela Negara",
                members: [
                    "Joko Prasetyo - Koordinator",
                    "Rizki Ramadhan - Anggota",
                    "Putri Amanda - Anggota"
                ],
                programs: [
                    {
                        name: "Upacara Bendera Kreatif",
                        description: "Upacara bendera dengan konsep yang lebih interaktif dan edukatif.",
                        status: "Berjalan"
                    },
                    {
                        name: "Kunjungan ke Museum",
                        description: "Study tour ke museum untuk menumbuhkan rasa nasionalisme.",
                        status: "Rencana"
                    }
                ]
            },
            {
                number: 4,
                name: "Prestasi Akademik, Seni, dan atau Olahraga Sesuai Minat dan Bakat",
                members: [
                    "Nadia Putri - Koordinator",
                    "Fajar Nugroho - Anggota",
                    "Larasati Dewi - Anggota"
                ],
                programs: [
                    {
                        name: "Olimpiade Sains Sekolah",
                        description: "Kompetisi sains antar kelas untuk menjaring bakat akademik.",
                        status: "Rencana"
                    },
                    {
                        name: "Lomba Bakat dan Kreativitas",
                        description: "Wadah bagi siswa untuk menampilkan bakat seni dan olahraga.",
                        status: "Berjalan"
                    }
                ]
            },
            {
                number: 5,
                name: "Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan dan Toleransi Sosial Dalam Konteks Masyarakat Plural",
                members: [
                    "Dian Purnama - Koordinator",
                    "Galih Pratama - Anggota",
                    "Sarah Azzahra - Anggota"
                ],
                programs: [
                    {
                        name: "Diskusi Demokrasi",
                        description: "Forum diskusi tentang pentingnya demokrasi di lingkungan sekolah.",
                        status: "Berjalan"
                    },
                    {
                        name: "Bakti Sosial",
                        description: "Kegiatan berbagi dengan masyarakat sekitar sekolah.",
                        status: "Rencana"
                    }
                ]
            },
            {
                number: 6,
                name: "Kreativitas, Keterampilan dan Kewirausahaan",
                members: [
                    "Rama Wijaya - Koordinator",
                    "Intan Permata - Anggota",
                    "Wisnu Wardhana - Anggota"
                ],
                programs: [
                    {
                        name: "Bazar Kewirausahaan",
                        description: "Pasar siswa untuk menjual hasil karya dan produk kreatif.",
                        status: "Berjalan"
                    }
                ]
            },
            {
                number: 7,
                name: "Kualitas Jasmani, Kesehatan, dan Gizi Berbasis Sumber Gizi Yang Terdiversifikasi",
                members: [
                    "Fitri Handayani - Koordinator",
                    "Arif Rahman - Anggota",
                    "Wulan Sari - Anggota"
                ],
                programs: [
                    {
                        name: "Senam Sehat Bersama",
                        description: "Senam pagi setiap hari Jumat untuk menjaga kebugaran.",
                        status: "Berjalan"
                    },
                    {
                        name: "Pemeriksaan Kesehatan Rutin",
                        description: "Kerjasama dengan puskesmas untuk cek kesehatan berkala.",
                        status: "Rencana"
                    }
                ]
            },
            {
                number: 8,
                name: "Sastra dan Budaya",
                members: [
                    "Kartika Sari - Koordinator",
                    "Dimas Prayoga - Anggota",
                    "Ratna Dewi - Anggota"
                ],
                programs: [
                    {
                        name: "Pentas Seni Budaya",
                        description: "Menampilkan berbagai kesenian tradisional dan modern.",
                        status: "Rencana"
                    }
                ]
            },
            {
                number: 9,
                name: "Teknologi, Informasi, dan Komunikasi",
                members: [
                    "Bayu Aji - Koordinator",
                    "Citra Lestari - Anggota",
                    "Eko Prasetyo - Anggota"
                ],
                programs: [
                    {
                        name: "Pelatihan Desain Grafis",
                        description: "Workshop desain untuk pemula.",
                        status: "Berjalan"
                    },
                    {
                        name: "Pengelolaan Media Sosial OSIS",
                        description: "Mengelola konten kreatif untuk Instagram dan TikTok OSIS.",
                        status: "Berjalan"
                    }
                ]
            },
            {
                number: 10,
                name: "Komunikasi Dalam Bahasa Inggris",
                members: [
                    "Amanda Putri - Koordinator",
                    "Reza Pahlevi - Anggota",
                    "Nabila Syifa - Anggota"
                ],
                programs: [
                    {
                        name: "English Club",
                        description: "Kegiatan rutin untuk meningkatkan kemampuan berbahasa Inggris.",
                        status: "Berjalan"
                    },
                    {
                        name: "English Debate Competition",
                        description: "Kompetisi debat bahasa Inggris antar kelas.",
                        status: "Rencana"
                    }
                ]
            }
        ];

        // Fungsi untuk menampilkan detail pengurus
        function showPengurusDetail(id) {
            const data = pengurusData[id];
            if (!data) return;

            const modal = document.getElementById('pengurusModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('pengurusModalBody');

            modalTitle.textContent = data.jabatan;

            // Biodata items
            const biodataItems = `
                <div class="biodata-item">
                    <span class="biodata-label">Nama Lengkap</span>
                    <span class="biodata-value">${data.nama}</span>
                </div>
                <div class="biodata-item">
                    <span class="biodata-label">Kelas</span>
                    <span class="biodata-value">${data.kelas}</span>
                </div>
                <div class="biodata-item">
                    <span class="biodata-label">Tempat/Tanggal Lahir</span>
                    <span class="biodata-value">${data.tempatLahir}, ${data.tanggalLahir}</span>
                </div>
                <div class="biodata-item">
                    <span class="biodata-label">Alamat</span>
                    <span class="biodata-value">${data.alamat}</span>
                </div>
                <div class="biodata-item">
                    <span class="biodata-label">Hobi</span>
                    <span class="biodata-value">${data.hobi}</span>
                </div>
                <div class="biodata-item">
                    <span class="biodata-label">Motto</span>
                    <span class="biodata-value">"${data.motto}"</span>
                </div>
            `;

            // Program kerja items
            const programItems = data.programKerja.map(prog => `
                <div class="program-card">
                    <h5>${prog.nama}</h5>
                    <div class="program-desc">${prog.deskripsi}</div>
                    <div class="program-meta">
                        <span>Target: ${prog.target}</span>
                        <span class="program-status status-${prog.status === 'Berjalan' ? 'ongoing' : (prog.status === 'Selesai' ? 'done' : 'plan')}">
                            ${prog.status}
                        </span>
                    </div>
                </div>
            `).join('');

            // Visi Misi (khusus untuk ketua)
            const visiMisiSection = data.id === 'ketua' ? `
                <div class="visi-misi-section">
                    <h4>🎯 Visi & Misi</h4>
                    <div class="visi-item">
                        <strong>Visi:</strong>
                        <p>${data.visi}</p>
                    </div>
                    <div class="misi-item">
                        <strong>Misi:</strong>
                        <ul class="misi-list">
                            ${data.misi.map(m => `<li>${m}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            ` : '';

            modalBody.innerHTML = `
                <div class="profile-header">
                    <img src="${data.foto}" alt="${data.nama}" class="profile-avatar">
                    <div class="profile-info">
                        <h3>${data.nama}</h3>
                        <span class="profile-role">${data.jabatan}</span>
                        <div class="profile-detail">
                            <span class="detail-item"><strong>Kelas:</strong> ${data.kelas}</span>
                            <span class="detail-item"><strong>Hobi:</strong> ${data.hobi}</span>
                        </div>
                    </div>
                </div>

                <div class="biodata-section">
                    <h4>📋 Biodata Lengkap</h4>
                    <div class="biodata-grid">
                        ${biodataItems}
                    </div>
                </div>

                ${visiMisiSection}

                <div class="program-section">
                    <h4>📋 Program Kerja</h4>
                    ${programItems}
                </div>
            `;

            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        // Fungsi untuk menampilkan detail sekbid
        function showSekbidDetail(sekbidNumber) {
            const sekbid = sekbidData.find(s => s.number === sekbidNumber);
            if (!sekbid) return;

            const modal = document.getElementById('sekbidModal');
            const modalTitle = document.getElementById('sekbidModalTitle');
            const modalBody = document.getElementById('sekbidModalBody');

            modalTitle.textContent = `SEKBID ${sekbid.number}`;

            const memberItems = sekbid.members.map(member => `
                <li>
                    <span class="member-icon">${member.charAt(0)}</span>
                    <span>${member}</span>
                </li>
            `).join('');

            const programItems = sekbid.programs.map(program => `
                <div class="program-item">
                    <h4>${program.name} 
                        <span class="program-status ${program.status === 'Berjalan' ? 'status-ongoing' : 'status-plan'}">
                            ${program.status}
                        </span>
                    </h4>
                    <p>${program.description}</p>
                </div>
            `).join('');

            modalBody.innerHTML = `
                <div class="sekbid-detail">
                    <h3>Deskripsi Bidang</h3>
                    <p style="margin-bottom: 1.5rem; padding: 1rem; background: var(--bg-primary); border-radius: 12px;">
                        ${sekbid.name}
                    </p>
                </div>
                
                <div class="sekbid-detail">
                    <h3>Anggota</h3>
                    <ul class="member-list">
                        ${memberItems}
                    </ul>
                </div>
                
                <div class="sekbid-detail">
                    <h3>Program Kerja</h3>
                    <div class="program-list">
                        ${programItems}
                    </div>
                </div>
            `;

            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        // Fungsi untuk menutup modal pengurus
        function closePengurusModal() {
            const modal = document.getElementById('pengurusModal');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        // Fungsi untuk menutup modal sekbid
        function closeSekbidModal() {
            const modal = document.getElementById('sekbidModal');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        // Tutup modal jika klik di luar konten modal
        window.onclick = function(event) {
            const pengurusModal = document.getElementById('pengurusModal');
            const sekbidModal = document.getElementById('sekbidModal');
            
            if (event.target === pengurusModal) {
                closePengurusModal();
            }
            if (event.target === sekbidModal) {
                closeSekbidModal();
            }
        }

        // Event listener untuk tombol ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closePengurusModal();
                closeSekbidModal();
            }
        });

        // Tampilkan sekbid di grid
        function tampilkanSekbidInteraktif() {
            const container = document.getElementById('sekbid-list');
            if (!container) return;

            container.innerHTML = sekbidData.map(sekbid => `
                <div class="sekbid-card" onclick="showSekbidDetail(${sekbid.number})">
                    <span class="sekbid-num">${sekbid.number}</span>
                    <h4>SEKBID ${sekbid.number}</h4>
                    <p>${sekbid.name}</p>
                </div>
            `).join('');
        }

        // Inisialisasi saat halaman dimuat
        document.addEventListener('DOMContentLoaded', () => {
            tampilkanSekbidInteraktif();
        });
