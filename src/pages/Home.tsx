import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { useLanguage } from "../i18n/LanguageProvider";
import translations from "../i18n/translates";
import Typewriter from "typewriter-effect";

const Home = () => {
	const { language } = useLanguage();
	const t = translations[language].home;

	return (
		<section className="bg-gradient-to-tr from-black via-red-950 to-red-600 min-h-screen font-inter flex flex-col justify-center items-center px-6 py-16 font-medium text-neutral-300 w-full overflow-hidden relative">
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
						href="/cv.pdf"
						download
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
		</section>
	);
};

export default Home;
