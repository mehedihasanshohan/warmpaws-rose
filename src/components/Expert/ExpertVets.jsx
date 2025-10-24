import React from "react";

const ExpertVets = () => {
  const vets = [
    {
      id: 1,
      name: "Dr. Emily Carter",
      specialty: "Veterinary Surgeon",
      description:
        "Dr. Emily has over 10 years of experience treating pets during the winter season. She specializes in cold-related pet care.",
      image: "https://i.ibb.co.com/xtXg8TNQ/vets1.jpg",
    },
    {
      id: 2,
      name: "Dr. James Walker",
      specialty: "Animal Nutritionist",
      description:
        "Dr. James focuses on winter nutrition and helps pet owners choose the right diet to keep pets healthy and active.",
      image: "https://i.ibb.co.com/3yS4DJ12/vets2.jpg",
    },
    {
      id: 3,
      name: "Dr. Sofia Rahman",
      specialty: "Pet Wellness Expert",
      description:
        "Dr. Sofia is passionate about pet comfort and wellness. She offers practical grooming and winter protection tips.",
      image: "https://i.ibb.co.com/tPb9qVxh/vets3.jpg",
    },
    {
      id: 4,
      name: "Dr. Liam Thompson",
      specialty: "Emergency Vet Specialist",
      description:
        "Dr. Liam handles pet emergencies during harsh winters and educates owners on frostbite prevention and care.",
      image: "https://i.ibb.co.com/4DFK5tr/vets4.jpg",
    },
  ];

  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Meet Our Expert Vets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {vets.map((vet) => (
            <div
              data-aos="zoom-in"
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
