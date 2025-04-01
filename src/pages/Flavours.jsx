const Flavours = () => {
  return (
    <section
      id="flavour"
      className="font-poppins bg-customBackground min-h-screen p-4 pt-16"
    >
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Breezer Flavours</h1>
        <p className="text-slate-600 text-sm md:text-lg mt-2">
          Barcardi Breezer. Breezer for short, is a fruit-based alcoholic drink
          which comes in many flavours.
        </p>
      </div>

      <div className="flex items-center justify-center mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <img
              src="https://media.istockphoto.com/id/458578501/photo/bacardi-breezer.jpg?s=612x612&w=0&k=20&c=-eYRFq4nfrfjUauHYe7I_j39VLsJsmJ0Wi4xNI4-W58="
              alt="Flavour 1"
              className="w-full h-auto rounded-md mb-2"
            />
            <p className="text-gray-800 font-semibold">Lime</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <img
              src="https://media.istockphoto.com/id/458600415/photo/bacardi-breezer.jpg?s=612x612&w=0&k=20&c=fK7O-xPUBrt7pXUip6Sqc2a0gjp_LaSkhe_JxV6l-Ps="
              alt="Flavour 2"
              className="w-full h-auto rounded-md mb-2"
            />
            <p className="text-gray-800 font-semibold">Orange</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <img
              src="https://media.istockphoto.com/id/458614867/photo/bacardi-breezer.jpg?s=612x612&w=0&k=20&c=aIQrYeKrCH1KrRhGoRtSrrZcVa12SK9u2mFQTyCu3G4="
              alt="Flavour 3"
              className="w-full h-auto rounded-md mb-2"
            />
            <p className="text-gray-800 font-semibold">Cranberry</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <img
              src="https://media.istockphoto.com/id/458616451/photo/bacardi-breezer.jpg?s=612x612&w=0&k=20&c=3-9DdfUoeh5f-buDWDku2PSlOU9o_fFCJQKdW2ObyMo="
              alt="Flavour 4"
              className="w-full h-auto rounded-md mb-2"
            />
            <p className="text-gray-800 font-semibold">Pineapple</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-800">Our Product</h2>
        <p className="text-slate-600 text-sm md:text-lg mt-2">
          Barcardi Breezer. Breezer for short, is a fruit-based alcoholic drink
          which comes in many flavours.
        </p>
      </div>
    </section>
  );
};

export default Flavours;
