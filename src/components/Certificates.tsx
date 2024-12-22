import React from 'react';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    name: "Advanced Web Development",
    issuer: "Tech Academy",
    date: "2023",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Cloud Architecture",
    issuer: "Cloud Institute",
    date: "2022",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  }
];

function Certificates() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <img src={cert.image} alt={cert.name} className="h-48 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h2>
              <p className="text-gray-600">Issued by {cert.issuer}</p>
              <p className="text-gray-500 mt-2">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;