import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const About = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [index]: !prevOpenSections[index],
    }));
  };

  const sections = [
    {
      title: "We Barcardi",
      content:
        "BARCARDI is a run brand established in 1862 that has been producing world-class rums since, Our history in rich and hunger for continued innovation in the industry never ceases.",
    },
    {
      title: "Our Product",
      content:
        "We deal in beverages, mainly rum, cocktails, hard drinks and soft drinks as well",
    },
    {
      title: "How We Work",
      content:
        "Our branches are operational in the whole of SoutH America and we have a couple of e-commerce shops on the run.",
    },
    {
      title: "Our Business",
      content:
        "We have a tremendous records and managed to keep our name on the high in the competitive beverage industry.",
    },
    {
      title: "Contact Us",
      content: "Find us through our Email, barcardi66@gmail.com.",
    },
  ];

  return (
    <section
      id="about"
      className="font-poppins customBackground min-h-screen p-4 pt-16"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <h1 className="text-xl font-bold text-gray-800">About Us</h1>
          <p className="text-slate-600 text-sm md:text-base">
            Barcardi Breezer. Breezer for short, is a fruit-based alcoholic
            drink which comes in many flavours.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <img
            src="https://media.istockphoto.com/id/478278073/photo/bacardi-breezer.jpg?s=612x612&w=0&k=20&c=K52EhGly05s1aPIt-Zejq4VfhWwwoaKLQ23JLoVq5NE="
            alt="Banner"
            className="w-80 h-100 object-cover"
          />
        </div>
        <div className="md:w-1/2 p-4">
          {sections.map((section, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <h2 className="text-sm md:text-base font-semibold text-slate-800">
                  {section.title}
                </h2>
                <span className="text-gray-800">
                  {openSections[index] ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <hr className="my-2 border-t-3 border-slate-400" />
              {openSections[index] && (
                <p className="text-slate-600 text-sm md:text-base">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
