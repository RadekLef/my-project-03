export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row">
      <h3 className="text-center text-[2.5rem] font-thin bg-gradient-to-r from-slate-700 to-zinc-900 text-slate-200 p-5 lg:hidden">
        Kontakt
      </h3>

      <div className="lg:bg-gradient-to-r from-slate-700 to-zinc-900 text-slate-200 lg:w-[35rem] lg:h-[35rem] lg:p-5 lg:flex lg:items-center lg:justify-end lg:text-[4.5rem] lg:font-thin">
        <h3 className="hidden lg:block mr-auto">Kontakt</h3>
      </div>

      <div className="flex-1 p-5 lg:pr-10 flex items-center">
        <div className="text-[1.2rem] font-thin p-3">
          <p>
            Toto je vytvořena stránka jako projekt. Původní funkční stránky můžete navštívit na{' '}
            <a
              href="https://www.kpchp.org/index.php"
              target="_blank"
              className="text-blue-800 font-semibold italic"
            >
              oficiálních stránkách
            </a>
          </p>
          <p className="mt-4">
            Máte-li zájem o spolupráci, můžete mě kontakovat na mail{' '}
            <a
              href="mailto:radek.lefnar@icloud.com"
              className="text-blue-800 font-semibold italic cursor-pointer"
            >
              radek.lefnar@icloud.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
