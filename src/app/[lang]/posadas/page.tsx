import { getAllPosadas } from "@/lib/joomla";
import { getDictionary } from "@/lib/get-dictionary";
import PosadasFilterableList from "@/app/components/posadas/posadas-filterable-list";

export default async function PosadasPage({
	params,
}: {
	params: Promise<{ lang: string }>;
}) {
	const { lang } = await params;
	const dictionary = await getDictionary(lang as "en" | "es");
	const posadas = await getAllPosadas(lang);

	return (
		<div className="w-full bg-white dark:bg-gray-900 py-16 flex justify-center min-h-screen">
			<div className="max-w-360 w-full px-4 md:px-6 flex flex-col gap-10">
				<PosadasFilterableList
					initialPosadas={posadas}
					dictionary={dictionary}
					lang={lang}
				/>
			</div>
		</div>
	);
}
