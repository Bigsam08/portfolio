/**
 * Home route/ landing page
 */


const home = () => {
  return (
    <div className="relative min-h-[calc(100vh-10rem)]  flex justify-center p-5 text-secondary">
      {/** center container */}
      <section className="grid md:grid-cols-[60%_1fr] w-7xl p-4 ">
        {/**----------- hero text div -------------*/}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-7xl font-bold">
            Hi, I'm <span className="text-main">Bigsam</span>
            <br />I build <span className="text-main">modern web apps</span>
          </h1>
          <p className="mt-4 text-lg text-cool max-w-xl">
            Full stack developer crafting responsive, user-first digital
            products using
            <span className="text-secondary font-medium"> React</span>,
            <span className="text-secondary font-medium">Node.js</span>, and
            <span className="text-secondary font-medium">Tailwind CSS</span>.
          </p>
        </div>
        {/**------------- image section-------- */}
      </section>
    </div>
  );
};

export default home;
