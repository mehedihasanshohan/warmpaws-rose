import React from "react";

const WinterCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "Keep Them Warm",
      description:
        "Ensure your pets have cozy blankets or sweaters when temperatures drop. Small or short-haired pets need extra warmth.",
      image: "https://i.ibb.co.com/MkGDyGnk/pets3.jpg",
    },
    {
      id: 2,
      title: "Protect Their Paws",
      description:
        "Use pet-safe paw balm or little boots when walking outside. Snow and ice can cause cracks or frostbite.",
      image: "https://i.ibb.co.com/b5BCcmfL/pets4.jpg",
    },
    {
      id: 3,
      title: "Avoid Cold Baths",
      description:
        "Limit bathing your pet in winter. If necessary, use warm water and dry them thoroughly to prevent chills.",
      image: "https://i.ibb.co.com/VpqTK08f/pets5.jpg",
    },
    {
      id: 4,
      title: "Provide Warm Bedding",
      description:
        "Make sure your pet’s bed is away from drafts and placed on a warm surface with soft blankets.",
      image: "https://i.ibb.co.com/zzcJkYQ/pets6.jpg",
    },
    {
      id: 5,
      title: "Watch for Cold Symptoms",
      description:
        "Look out for shivering, lethargy, or coughing. Consult a vet immediately if your pet seems unwell.",
      image:"https://i.ibb.co.com/xtynybyZ/pets7.jpg",
    },
    {
      id: 6,
      title: "Avoid Cold Baths",
      description:
        "Limit bathing your pet in winter. If necessary, use warm water and dry them thoroughly to prevent chills.",
      image: "https://i.ibb.co.com/673h1HFD/pets8.jpg",
    },
  ];

  return (
    <section className="p-4 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Winter Care Tips for Pets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div
              data-aos="zoom-out"
              key={tip.id}
              className="card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-blue-600">
                  {tip.title}
                </h3>
                <p className="text-gray-700 text-sm">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterCareTips;
