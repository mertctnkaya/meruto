import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { useLanguage } from "../i18n/LanguageProvider";
import translations from "../i18n/translates";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Home = () => {
	const { language } = useLanguage();
	const t = translations[language].home;

	return (
		<section className="bg-gradient-to-tr from-black via-neutral-950 to-red-700 min-h-screen font-inter flex flex-col justify-center items-center px-6 py-16 font-medium text-neutral-300 w-full overflow-hidden relative">
			<img
				src="/dexter.png"
				alt="blood splash"
				className="absolute top-0 left-0 w-full h-full opacity-20 blur-md pointer-events-none select-none object-cover"
			/>
			<div className="max-w-3xl w-full flex flex-col items-start gap-6 text-left relative z-10">
				<h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
					{t.title}{" "}
					<span className="text-red-600 text-shadow-black text-shadow-lg">
						<Typewriter
							options={{
								strings: ["Mertcan Çetinkaya", "m3rt", "Dexter Morgan", "Mert", "Chair", "Switzerland", "Brian Moser", "Kyle Butler", "Jim Lindsay", "Daryl Tucker"],
								autoStart: true,
								loop: true,
								delay: 75,
								cursor: "|",
								cursorClassName: "text-red-600 animate-pulse",
								wrapperClassName: "text-red-600 text-shadow-black text-shadow-lg"
							}}
						/>
					</span>
				</h1>
				<p className="text-lg sm:text-xl text-neutral-400">{t.desc}</p>
				<div className="flex flex-wrap gap-4 mt-4">
					<a
						href={language === "tr" ? "/cv_tr.pdf" : "/cv_en.pdf"}
						download={`Mertcan_Cetinkaya_CV_${language.toUpperCase()}.pdf`}
						className="inline-flex items-center gap-2 px-4 py-2 font-semibold rounded-md bg-red-700 text-white hover:bg-red-950 transition"
					>
						<FiDownload size={18} /> {t.downloadCv}
					</a>
					<a
						href="https://github.com/mertctnkaya/mertce"
						target="_blank"
						className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-md  hover:bg-red-700 hover:border-red-900 transition"
					>
						<BsGithub size={18} /> {t.github}
					</a>
					<a
						href="https://linkedin.com/in/mertcan-çetinkaya-80b850235"
						target="_blank"
						className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-md hover:bg-red-700 hover:border-red-900 transition"
					>
						<BsLinkedin size={18} /> {t.linkedin}
					</a>
				</div>
			</div>
			{/* Call to Action Bölümü */}
			<div className="mt-16 text-center relative z-10 w-full max-w-2xl">
				<h3 className="text-2xl font-bold text-white mb-4">
					{language === "tr" ? "Bir fikriniz mi var? Birlikte çalışalım." : "Have an idea? Let's work together."}
				</h3>
				<Link
					to="/contact"
					className="inline-block px-8 py-3 bg-red-700 text-white font-bold rounded-md hover:bg-red-600 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]"
				>
					{language === "tr" ? "İletişime Geç" : "Get in Touch"}
				</Link>
			</div>
		</section>
	);
};

export default Home;
