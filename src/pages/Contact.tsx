import { useLanguage } from "../i18n/LanguageProvider";
import translations from "../i18n/translates";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {
	const { language } = useLanguage();
	const t = translations[language].contact;
	const info = t.info;

	const contactItems = [
		{
			icon: FaEnvelope,
			label: "Email",
			value: info.email,
			link: `mailto:${info.email}`,
		},
		{
			icon: FaLinkedin,
			label: "LinkedIn",
			value: info.linkedin.replace("https://", ""),
			link: info.linkedin,
		},
		{
			icon: FaGithub,
			label: "GitHub",
			value: info.github.replace("https://", ""),
			link: info.github,
		},
		{
			icon: FaInstagram,
			label: "Instagram",
			value: "@mert.moser",
			link: "https://instagram.com/mert.moser",
		},
		{
			icon: FaTiktok,
			label: "TikTok",
			value: "@palet1rturedblue",
			link: "https://www.tiktok.com/@palet1rturedblue",
		},
		{
			icon: FaMapMarkerAlt,
			label: "Location",
			value: info.location,
			link: null,
		},
	];

	return (
		<section className="bg-gradient-to-tr from-black via-neutral-950 to-red-700 min-h-screen font-inter flex flex-col justify-center items-center px-6 py-16 font-medium text-neutral-300 w-full overflow-hidden relative">
			<div className="max-w-4xl w-full flex flex-col items-center gap-8 text-center relative z-10">
				<div className="text-center mb-8">
					<h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-4">{t.title}</h1>
					<p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto">{t.desc}</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
					{contactItems.map((item, i) => (
						<div
							key={i}
							className="bg-neutral-900 bg-opacity-50 backdrop-blur-sm border border-red-800 rounded-lg p-6 flex items-center gap-4 hover:bg-opacity-70 transition-all"
						>
							<item.icon className="text-red-600 text-2xl" />
							<div className="flex-1 text-left">
								<div className="font-bold text-white mb-1">{item.label}</div>
								{item.link ? (
									<a
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-neutral-400 hover:text-red-400 transition-colors break-all"
									>
										{item.value}
									</a>
								) : (
									<span className="text-neutral-400">{item.value}</span>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Contact;
