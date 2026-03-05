// Importa el hook useState de React para manejar estados del componente
import { useState } from 'react';

// Importa iconos desde la librería lucide-react
import { Play, Expand, FileText, X } from 'lucide-react';

// Importa componentes del sistema de diálogos (modales)
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../hooks/dialog';


/*
 * Componente GalleryCard
 * Representa una tarjeta de galería que muestra:
 * - Imagen
 * - Título
 * - Descripción
 * - Botones para ver video, ampliar imagen o ver PDF
 */
export function GalleryCard({ image, title, description, videoUrl, pdfUrl }) {

  // Estado para abrir o cerrar el modal del video
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Estado para abrir o cerrar el modal de la imagen ampliada
  const [imageModalOpen, setImageModalOpen] = useState(false);

  // Estado para abrir o cerrar el modal del PDF
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

  return (
    <>
      {/* Tarjeta principal */}
      <div className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105">

        {/* Imagen principal de la tarjeta */}
        <img
          src={image}
          alt={title}
          className="h-80 w-full object-cover"
        />

        {/* Overlay oscuro que aparece cuando el mouse pasa sobre la imagen */}
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

          {/* Contenedor de los botones en el centro */}
          <div className="flex h-full items-center justify-center gap-4">

            {/* Botón para abrir el modal del video */}
            <button
              onClick={() => setVideoModalOpen(true)}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white"
              aria-label="Ver video"
            >
              <Play className="h-6 w-6" fill="currentColor" />
            </button>

            {/* Botón para abrir el modal de la imagen ampliada */}
            <button
              onClick={() => setImageModalOpen(true)}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-500 hover:text-white"
              aria-label="Ampliar imagen"
            >
              <Expand className="h-6 w-6" />
            </button>

            {/* Botón para abrir el modal del PDF */}
            <button
              onClick={() => setPdfModalOpen(true)}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:text-white"
              aria-label="Ver PDF"
            >
              <FileText className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Información de la tarjeta (título y descripción) */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <h3 className="mb-2 text-xl">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>


      {/* ================= MODAL DE VIDEO ================= */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-4xl">

          {/* Encabezado del modal */}
          <DialogHeader>
            <DialogTitle className="text-2xl">{title} - Video</DialogTitle>
          </DialogHeader>

          {/* Contenedor del video */}
          <div className="mt-4">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">

              {/* Si existe videoUrl se muestra el video */}
              {videoUrl ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={videoUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              ) : (

                /* Si no existe video se muestra un mensaje */
                <div className="flex h-full items-center justify-center text-white">
                  <div className="text-center">
                    <Play className="mx-auto mb-4 h-16 w-16" />
                    <p className="text-lg">Video de demostración</p>
                    <p className="mt-2 text-sm text-gray-400">
                      Aquí se reproduciría el video de: {title}
                    </p>
                  </div>
                </div>

              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>


      {/* ================= MODAL DE IMAGEN ================= */}
      <Dialog open={imageModalOpen} onOpenChange={setImageModalOpen}>
        <DialogContent className="max-w-6xl">

          {/* Encabezado del modal */}
          <DialogHeader>
            <DialogTitle className="text-2xl">{title}</DialogTitle>
          </DialogHeader>

          {/* Imagen ampliada */}
          <div className="mt-4">
            <img
              src={image}
              alt={title}
              className="w-full rounded-lg object-contain"
              style={{ maxHeight: '80vh' }}
            />

            {/* Descripción debajo de la imagen */}
            <p className="mt-4 text-center text-gray-600">{description}</p>
          </div>
        </DialogContent>
      </Dialog>


      {/* ================= MODAL DE PDF ================= */}
      <Dialog open={pdfModalOpen} onOpenChange={setPdfModalOpen}>
        <DialogContent className="max-w-4xl">

          {/* Encabezado */}
          <DialogHeader>
            <DialogTitle className="text-2xl">{title} - Documento PDF</DialogTitle>
          </DialogHeader>

          {/* Contenedor del PDF */}
          <div className="mt-4">
            <div className="h-[80vh] w-full overflow-hidden rounded-lg border bg-gray-100">

              {/* Si existe pdfUrl se muestra el PDF */}
              {pdfUrl ? (
                <iframe
                  src={pdfUrl}
                  title={`PDF - ${title}`}
                  className="h-full w-full"
                ></iframe>
              ) : (

                /* Si no hay PDF se muestra mensaje */
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <FileText className="mx-auto mb-4 h-16 w-16 text-red-500" />
                    <p className="text-lg">Documento PDF</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Aquí se mostraría el PDF de: {title}
                    </p>
                    <p className="mt-4 text-xs text-gray-500">
                      Agrega la propiedad 'pdfUrl' para mostrar un PDF real
                    </p>
                  </div>
                </div>

              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}