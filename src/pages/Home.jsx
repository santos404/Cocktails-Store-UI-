const Home = () => {
  return (
    <section
      id="home"
      className="font-poppins customBackground min-h-screen flex flex-col"
    >
      <div className="relative flex-1 flex flex-col md:flex-col lg:flex-row">
        <img
          src="https://media.istockphoto.com/id/458638421/photo/bacardi-breezer.jpg?s=612x612&w=0&k=20&c=yvKT1MRMOGKW5EPd2HZsxekmRttgqL8ejr5ydeKmlKA="
          alt="Banner"
          className="w-full h-auto object-cover"
        />
        <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col justify-center w-full lg:w-1/2">
          <p className="text-slate-800 mb-6 text-sm md:text-lg lg:text-xl font-semibold">
            Barcardi Breezer. Breezer for short, is a fruit-based alcoholic
            drink which comes in many flavours.
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2">10+</h3>
              <p className="text-slate-600">More than ten flavours.</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2">21+</h3>
              <p className="text-slate-600">Year old Can drink.</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2">4%</h3>
              <p className="text-slate-600">Alcohol Contain.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
