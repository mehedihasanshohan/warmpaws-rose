import React from "react";
import vets1 from '/vets1.jfif'
import vets2 from '/vets2.jfif'
import vets3 from '/vets3.jfif'
import vets4 from '/vets4.jfif'


const ExpertVets = () => {
  const vets = [
    {
      id: 1,
      name: "Dr. Emily Carter",
      specialty: "Veterinary Surgeon",
      description:
        "Dr. Emily has over 10 years of experience treating pets during the winter season. She specializes in cold-related pet care.",
      image: vets1,
    },
    {
      id: 2,
      name: "Dr. James Walker",
      specialty: "Animal Nutritionist",
      description:
        "Dr. James focuses on winter nutrition and helps pet owners choose the right diet to keep pets healthy and active.",
      image: vets2,
    },
    {
      id: 3,
      name: "Dr. Sofia Rahman",
      specialty: "Pet Wellness Expert",
      description:
        "Dr. Sofia is passionate about pet comfort and wellness. She offers practical grooming and winter protection tips.",
      image: vets3,
    },
    {
      id: 4,
      name: "Dr. Liam Thompson",
      specialty: "Emergency Vet Specialist",
      description:
        "Dr. Liam handles pet emergencies during harsh winters and educates owners on frostbite prevention and care.",
      image: vets4,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Meet Our Expert Vets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="card bg-blue-50 shadow-md rounded-2xl hover:shadow-xl transition-all"
            >
              <img
                src={vet.image}
                alt={vet.name}
                className="h-56 w-full object-cover rounded-t-2xl"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold text-blue-600">
                  {vet.name}
                </h3>
                <p className="text-sm text-gray-500 italic">{vet.specialty}</p>
                <p className="text-gray-700 text-sm">{vet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertVets;
