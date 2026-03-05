// Importa hooks de React
import { useEffect, useState } from "react";

// Importa el componente que representa cada tarjeta de la galería
import { GalleryCard } from "./components/GalleryCard";

// Importa las funciones del servicio que obtienen datos y generan URLs
import {
  getAnimals,
  getAnimalsVideo,
  getAnimalsPdf,
  getImageUrl,
  getVideoURL,
  getPdfURL
} from "./services/Service";


// Componente principal de la aplicación
export default function App() {

  // Estado que almacenará la lista final de animales con imagen, video y pdf
  const [animals, setAnimals] = useState([]);


  /*
  useEffect se ejecuta cuando el componente se monta
  (equivalente a componentDidMount en React antiguo).
  */
  useEffect(() => {

    // Función asincrónica para cargar todos los datos
    async function loadData() {

      // Obtiene los datos básicos de los animales
      const animalsData = await getAnimals();

      // Obtiene la lista de videos
      const videos = await getAnimalsVideo();

      // Obtiene la lista de PDFs
      const pdfs = await getAnimalsPdf();


      /*
      Combina todos los datos en un solo objeto por animal
      */
      const combined = animalsData.map(animal => {

        // Busca el video correspondiente al animal por id
        const video = videos.find(v => v.id === animal.id);

        // Busca el pdf correspondiente al animal por id
        const pdf = pdfs.find(p => p.id === animal.id);

        // Retorna un nuevo objeto con toda la información
        return {
          ...animal,

          // Genera la URL completa de la imagen desde Azure
          image: getImageUrl(animal.file),

          // Si existe video genera la URL, si no retorna null
          videoUrl: video ? getVideoURL(video.file) : null,

          // Si existe pdf genera la URL, si no retorna null
          pdfUrl: pdf ? getPdfURL(pdf.file) : null
        };

      });

      // Guarda los datos combinados en el estado
      setAnimals(combined);
    }

    // Ejecuta la función que carga los datos
    loadData();

  }, []); // [] significa que solo se ejecuta una vez al cargar el componente


  /*
  Renderizado del componente
  */
  return (

    // Contenedor principal con fondo degradado
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">

      <div className="mx-auto max-w-7xl">

        {/* Encabezado de la página */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl text-white">Animales Mitologicos</h1>

          <p className="text-lg text-gray-300">
            Explora las bastas criaturas mitológicas que habitan en nuestro mundo de fantasía.
          </p>
        </div>


        {/* Grid que contiene las tarjetas */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/*
          Recorre el arreglo animals y crea una GalleryCard por cada elemento
          */}
          {animals.map((item) => (
            <GalleryCard
              key={item.id}          // clave única para React
              image={item.image}     // URL de imagen
              title={item.title}     // título del animal
              description={item.desc} // descripción
              videoUrl={item.videoUrl} // URL del video
              pdfUrl={item.pdfUrl}     // URL del PDF
            />
          ))}

        </div>

      </div>
    </div>
  );
}