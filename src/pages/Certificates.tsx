import { useLanguage } from "../i18n/LanguageProvider";
import translations from "../i18n/translates";

const Certificates = () => {
	const { language } = useLanguage();
	const t = translations[language].certificates;

	return (
		<section className="bg-gradient-to-tr from-black via-neutral-950 to-red-700 min-h-screen font-inter flex flex-col justify-center items-center px-6 py-16 font-medium text-neutral-300 w-full overflow-hidden relative">
			<div className="max-w-4xl w-full flex flex-col items-center gap-8 text-center relative z-10">
				<div className="text-center mb-8">
					<h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-4">{t.title}</h1>
					<p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto">{t.desc}</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
					{t.list.map((cert: any, i: number) => (
							<div
								key={i}
								className="bg-neutral-900 bg-opacity-50 backdrop-blur-sm border border-red-800 rounded-lg p-6 hover:bg-opacity-70 transition-all group flex flex-col justify-between"
							>
								<h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-2">{cert.title}</h3>
								<div className="text-red-400 font-medium mb-1">{cert.issuer}</div>
								<div className="text-neutral-400 text-sm">{cert.year}</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default Certificates;
