import introImg3 from "../assets/intro-pic3.jpeg";

export default function Intro() {
  return (
    <div className="relative overflow-hidden">
      <img
        src={introImg3}
        alt="intro_img"
        className="h-auto w-full transform hover:scale-105 transition-transform duration-700 ease-in-out"
      />
      <h2 className="p-3 absolute bg-slate-800 bg-opacity-90 inset-y-0 right-0 flex items-center text-slate-200 w-full lg:w-[35rem] lg:pr-10 font-thin lg:text-[4.5rem] text-center lg:text-right text-[2rem] px-5 lg:px-0">
        Vítejte na stránkách klubu přátel Chodského psa
      </h2>
    </div>
  );
}
