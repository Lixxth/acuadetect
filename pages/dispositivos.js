'use client';

import React from 'react';

const plomeros = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    direccion: 'Av. Reforma 123, Ciudad de México',
    telefono: '+52 55 1234 5678',
  },
  {
    id: 2,
    nombre: 'María Gómez',
    direccion: 'Calle 5 de Febrero 234, Guadalajara',
    telefono: '+52 33 8765 4321',
  },
  {
    id: 3,
    nombre: 'Carlos Rodríguez',
    direccion: 'Av. Insurgentes Sur 456, Ciudad de México',
    telefono: '+52 55 2345 6789',
  },
];

const Directorio = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Título y saludo de la IA */}
      <header className="bg-blue-600 text-white p-4 rounded-md mb-6">
        <h1 className="text-3xl font-semibold">¡Bienvenido al Directorio de Plomeros!</h1>
        <p className="mt-2">Soy tu asistente virtual y aquí te ayudaré a encontrar plomeros de confianza.</p>
      </header>

      {/* Sección de plomeros */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Plomeros Disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {plomeros.map((plomero) => (
            <div key={plomero.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold text-blue-600">{plomero.nombre}</h3>
              <p className="text-gray-600 mt-2"><strong>Dirección:</strong> {plomero.direccion}</p>
              <p className="text-gray-600 mt-1"><strong>Teléfono:</strong> {plomero.telefono}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Directorio;
