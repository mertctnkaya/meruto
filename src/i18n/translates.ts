// src/i18n/translate.ts

const translations = {
	en: {
		navbar: {
			home: "Home",
			about: "About",
			projects: "Projects",
			certificates: "Certificates",
			contact: "Contact",
		},
		home: {
			title: "Hi, I'm",
			desc: "I build user-centric web applications and industrial solutions. Experienced in the React and Node.js ecosystem. I combine my software development skills with manufacturing and CNC technologies to create practical, scalable solutions for real-world problems.",
			downloadCv: "Download CV",
			github: "GitHub",
			linkedin: "LinkedIn",
		},
		about: {
			title: {
				about: "About Me",
				skills: "Skills & Hobbies",
				exp: "Experience",
				edu: "Education",
			},
			desc: "My journey with technology began at the age of 10. Over the years, I have built a strong analytical foundation ranging from the JavaScript ecosystem to C programming. However, my main career goal is rooted in manufacturing, mechanics, and industrial systems rather than traditional software development. I channel the problem-solving and algorithmic thinking skills I gained from software into mastering CNC Lathe/Milling operations and CAD/CAM software like SolidWorks and AutoCAD. Whether in a manufacturing workshop, the maritime sector, or automotive electronics, my goal is to become a true 'master' of my craft. I am a fast learner with a strong logical mindset, and software remains a powerful tool I keep in my pocket to optimize processes along the way.",
			skills: [
				"JavaScript & TypeScript, C#, C, C++, MongoDB, SQL",
				"React.js, Node.js, Next.js, TailwindCSS",
				"SolidWorks, AutoCAD, Fusion 360 (Currently Learning)",
				"CNC Lathe&Milling Programming and Operator Student",
				"English (B2-C1 EFSET cert.)",
				"Graphic Design (AE, PS, LR basics)",
				"Hobbies: Electric Guitar, Language Learning, Reading"
			],
			experience: [
				{
					title: "Metal Production & Steel Fabrication",
					company: "Aisin",
					period: "June 2026 – Aug 2026",
					desc: "Actively engaged in the metal production line and steel fabrication processes, gaining direct on-field experience in industrial manufacturing and shift-based operational dynamics."
				},
				{
					title: "IT - Maintenance Trainee",
					company: "Autoliv Cankor GOSB, Gebze, Kocaeli",
					period: "Sep 2023 – Jun 2024",
					desc: "Provided on-field and remote technical support, gained practical experience with corporate workflows and occupational safety."
				}
			],
			education: [
				{
					school: "Atatürk University",
					program: "Computer Programming (Online 2 Years)",
					period: "2024 – Ongoing (Expected 2026)"
				},
				{
					school: "42 Kocaeli",
					program: "Software Development (C Projects: push_swap, minitalk, etc.)",
					period: "Feb 2025 – Dec 2025"
				}
			]
		},
		projects: {
			title: "My Projects",
			desc: "My projects are available for production until now.",
			list: [
				{
					title: "Vardiyo - Detailed Payroll & Shift Manager",
					desc: "A comprehensive workplace calendar and payroll application for shift workers. Features include gross-to-net salary calculations, severance pay, overtime, reminders, shift and annual leave management. It is available on Play Store.",
					tech: ["React", "TailwindCSS", "Capacitor", "Vite"],
					link: "https://vardiyo.vercel.app",
					image: "/vardiyo.png"
				},
				{
					title: "Personal Portfolio",
					desc: "Modern React portfolio built with TypeScript and Tailwind CSS.",
					tech: ["React.js", "TypeScript", "TailwindCSS"],
					link: "https://www.github.com/mertctnkaya/meruto",
					image: "/dexter.png"
				},
			]
		},
		certificates: {
			title: "Certificates & Courses",
			desc: "My educational achievements, courses and professional certifications.",
			list: [
				{
					title: "CNC Lathe&Milling Adaptation and Programming",
					issuer: "YETGİM, Pendik, Istanbul",
					year: "2025",
				},
				{
					title: "English (B2-C1) EFSET Certificate",
					issuer: "EFSET",
					year: "2024",
				},
			],
		},
		contact: {
			title: "Contact",
			desc: "Feel free to reach out for collaboration or questions. Or just say hello!",
			info: {
				email: "m3rt7132@gmail.com",
				location: "Kocaeli / Istanbul, Turkey",
				linkedin: "https://linkedin.com/in/mertcan-çetinkaya-80b850235",
				github: "https://github.com/mertctnkaya",
			},
		},
	},
	tr: {
		navbar: {
			home: "Ana Sayfa",
			about: "Hakkımda",
			projects: "Projeler",
			certificates: "Sertifikalar",
			contact: "İletişim",
		},
		home: {
			title: "Merhaba, ben",
			desc: "Kullanıcı odaklı web uygulamaları ve endüstriyel çözümler geliştiriyorum. React ve Node.js ekosisteminde tecrübeliyim. Yazılım geliştirme pratiğimi, sanayi ve CNC teknolojileriyle harmanlayarak gerçek dünyadaki problemlere pratik ve ölçeklenebilir çözümler üretiyorum.",
			downloadCv: "CV'yi indir",
			github: "GitHub",
			linkedin: "LinkedIn",
		},
		about: {
			title: {
				about: "Hakkımda",
				skills: "Beceriler & İlgi Alanları",
				exp: "Deneyimler",
				edu: "Eğitim",
			},
			desc: "Teknolojiyle henüz 10 yaşındayken tanıştım ve yıllar içinde JavaScript ekosisteminden C dillerine uzanan güçlü bir analitik altyapı inşa ettim. Ancak kariyer hedefim geleneksel yazılım geliştiriciliğinden ziyade üretim, mekanik ve endüstriyel sistemler üzerine kurulu. Yazılımdan gelen problem çözme ve algoritmik düşünme becerilerimi; CNC Torna/Freze operasyonları ile SolidWorks ve AutoCAD gibi CAD/CAM alanlarında uzmanlaşmak için kullanıyorum. İmalat sektöründe, denizcilik alanında veya otomotiv elektroniğinde (ECU) teknik bilgimi pratiğe dökerek ustalaşmayı hedefliyorum. Yeni teknik konseptleri çok hızlı öğrenen bir yapıya sahibim; yazılım ise bu yolda karşılaştığım sorunları çözmek ve işleri optimize etmek için her zaman kullandığım güçlü bir araç.",
			skills: [
				"JavaScript & TypeScript, C#, C, C++, MongoDB, SQL",
				"React.js, Node.js, Next.js, TailwindCSS",
				"SolidWorks, AutoCAD, Fusion 360 (Öğrenme Aşamasında)",
				"CNC Torna&Freze Programlama ve Operatör Öğrencisi",
				"İngilizce (B2-C1 EFSET sert.)",
				"Grafik Tasarım (AE, PS, LR temel)",
				"İlgi Alanları: Elektro Gitar, Dil Öğrenimi, Kitap Okumak"
			],
			experience: [
				{
					title: "Üretim ve Çelik Şekillendirme Elemanı",
					company: "Aisin",
					period: "Haz 2026 – Ağu 2026",
					desc: "Metal üretim hattında ve çelik konstrüksiyon süreçlerinde aktif görev alarak endüstriyel imalat, fabrika işleyişi ve vardiyalı çalışma sistemleri hakkında doğrudan saha tecrübesi ediniyorum."
				},
				{
					title: "IT - Bakım Stajyeri",
					company: "Autoliv Cankor GOSB, Gebze, Kocaeli",
					period: "Eyl 2023 – Haz 2024",
					desc: "Saha ve uzaktan teknik destek sağladım, kurumsal işleyiş ve iş güvenliği konusunda pratik deneyim kazandım."
				}
			],
			education: [
				{
					school: "Atatürk Üniversitesi",
					program: "Bilgisayar Programcılığı (Online 2 Yıl)",
					period: "2024 – Devam Ediyor (2026 Tahmini)"
				},
				{
					school: "42 Kocaeli",
					program: "Yazılım Geliştirme (C Projeleri: push_swap, minitalk vb.)",
					period: "Şub 2025 – Ara 2025"
				}
			]
		},
		projects: {
			title: "Projelerim",
			desc: "Şu ana kadar yayınlandığım projeler.",
			list: [
				{
					title: "Vardiyo - Detaylı Mesai&Vardiya takibi ve Gerçek Bordro",
					desc: "Vardiyalı çalışanlar için geliştirilmiş kapsamlı çalışma takvimi uygulaması. Brütten nete maaş, fazla mesai, izin yönetimi, tazminat hesaplama, hatırlatıcı, vardiya takvimi vb. özellikleri barındırır. Android versiyonu Play Store'da mevcuttur.",
					tech: ["React", "TailwindCSS", "Capacitor", "Vite"],
					link: "https://vardiyo.vercel.app",
					image: "/vardiyo.png"
				},
				{
					title: "Kişisel Portfolyo",
					desc: "React.ts ve Tailwind CSS ile hazırlanmış modern portfolyo.",
					tech: ["React", "TypeScript", "TailwindCSS", "Vite"],
					link: "https://github.com/mertctnkaya/meruto/",
					image: "/dexter.png"
				},
			]
		},
		certificates: {
			title: "Sertifikalar",
			desc: "Eğitim başarılarım ve profesyonel sertifikalarım.",
			list: [
				{
					title: "CNC Torna&Freze Adaptasyon ve Programlama",
					issuer: "YETGİM, Pendik, İstanbul",
					year: "2025",
				},
				{
					title: "İngilizce (B2-C1) EFSET Sertifikası",
					issuer: "EFSET",
					year: "2024",
				},
			],
		},
		contact: {
			title: "İletişim",
			desc: "İşbirliği veya sorularınız için bana ulaşabilirsiniz. İsterseniz sohbet etmek için bile ulaşabilirsiniz!",
			info: {
				email: "m3rt7132@gmail.com",
				location: "Kocaeli/Gebze / İstanbul, Türkiye",
				linkedin: "https://linkedin.com/in/mertcan-çetinkaya-80b850235",
				github: "https://github.com/mertctnkaya",
			},
		},
	},
} as const;

export type Language = "en" | "tr";
export default translations;
