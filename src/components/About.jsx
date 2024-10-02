export default function About() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-gradient-to-r from-zinc-900 to-slate-700 text-slate-200 w-full lg:w-[35rem] h-[20rem] lg:h-[35rem] p-5 flex items-center justify-center lg:justify-end text-[2.5rem] lg:text-[4.5rem] font-thin">
        <h3 className="text-center lg:ml-auto">O klubu</h3>
      </div>
      <div className="flex-1 pl-5 lg:pl-10 flex items-center">
        <div className="text-[1rem] lg:text-[1.2rem] font-thin p-3">
          <p>
            Klub přátel chodského psa sdružuje majitele a příznivce našeho českého národního plemene. Byl založen ustavující schůzí 21. listopadu 1991 ve Vrbně pod Pradědem. Posláním klubu je cílevědomý rozvoj plemene Chodský pes v souladu se standardem, předpisy klubu, ČMKU i střešní kynologické organizace FCI. Hlavním cílem je zachování požadovaného typu chodského psa v podobě původní myšlenky ing. Jana Findejse, který s regenerací chodského psa započal v roce 1984. I po více než 30-ti letech chovu má chovatelské kolegium stále zájem udržet chodského psa v základních rysech rozdílných od většiny ovčáckých plemen. Tzn., udržet požadovanou standardní výšku u psů 52-55 cm a u fen 49-52 cm, pevnou silnou kostru, správně modelovanou hlavu, aby čenichová partie byla o něco kratší než mozkovna, krátké a bohatě osrstěné ucho, delší osrstění s kvalitní podsadou i rozložení sytých znaků, typických pro chodského psa. A to vše se zachováním požadované pracovní povahy pro všestranné použití a dobrého zdraví.
          </p>
          <p className="mt-4">
            Klub pořádá každoročně mnoho klubových akcí jako výstavy, výcvikové akce různého typu a úrovní, tradiční Kozinův pohár, týdenní letní akci, svody a bonitace. Klubový zpravodaj 3x ročně od roku 2022 nevychází v tištěné podobě, ale elektronické s uveřejněním na klubovém webu. Finančně klub m.j. podporuje organizování kynologicko-sportovních akcí s chodským psem i nadstandardní zdravotní vyšetření dle zdravotního programu, který byl v roce 2015 nastaven.
          </p>
        </div>
      </div>
    </div>
  );
}

