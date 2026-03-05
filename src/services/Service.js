// URL base del almacenamiento en Azure.
// Se obtiene desde las variables de entorno de Vite (archivo .env)
export const STORAGE_URL = import.meta.env.VITE_AZURE_STORAGE_URL;


/*
 * Construye la URL completa de una imagen.
 * Recibe el nombre del archivo y lo concatena con la ruta del contenedor
 * de imágenes dentro del almacenamiento de Azure.
 */
export function getImageUrl(file) {
    return `${STORAGE_URL}/imagenes/${file}`;
}


/*
 * Construye la URL completa de un video.
 * Recibe el nombre del archivo de video y lo concatena
 * con la carpeta "videos" del almacenamiento.
 */
export function getVideoURL(name) {
    return `${STORAGE_URL}/videos/${name}`;
}


/*
 * Construye la URL completa de un archivo PDF.
 * Recibe el nombre del archivo PDF y lo concatena
 * con la carpeta "pdfs" del almacenamiento.
 */
export function getPdfURL(name) {
    return `${STORAGE_URL}/pdfs/${name}`;
}


/*
 * Simula la obtención de datos de animales.
 * En lugar de llamar a una API real, retorna una Promise
 * con un arreglo de objetos que representan animales.
 *
 * Cada animal contiene:
 * - id: identificador único
 * - file: nombre de la imagen
 * - title: nombre del animal
 * - desc: descripción del animal
 */
export async function getAnimals() {
    return Promise.resolve([
        {
            id: 1,
            file: "fenix.png",
            title: "Fenix",
            desc: "Ágil y curioso, siempre en movimiento",
        },
        {
            id: 2,
            file: "pegaso.png",
            title: "Pegaso",
            desc: "Salvaje por fuera, tierno por dentro",
        },
        {
            id: 3,
            file: "ninfo.png",
            title: "Grifo",
            desc: "El gigante gentil",
        }
    ]);
}


/*
 * Simula la obtención de los videos de los animales.
 * Retorna una Promise con un arreglo de objetos que contienen:
 * - id: identificador del animal
 * - file: nombre del archivo de video
 */
export async function getAnimalsVideo() {
    return Promise.resolve([
        { id: 1, file: "fenix_video.mp4" },
        { id: 2, file: "pegaso_video.mp4" },
        { id: 3, file: "ninfo_video.mp4" },
    ]);
}


/*
 * Simula la obtención de archivos PDF relacionados con los animales.
 * Cada objeto contiene:
 * - id: identificador del animal
 * - file: nombre del archivo PDF
 */
export async function getAnimalsPdf() {
    return Promise.resolve([
        { id: 1, file: "Fenix_pdf.pdf" },
        { id: 2, file: "Pegaso_pdf.pdf" },
        { id: 3, file: "ninfo_pdf.pdf" },
    ]);
}