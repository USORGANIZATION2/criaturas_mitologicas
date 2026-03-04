
export const STOREGE_URL= import.meta.env.VITE_AZURE_STORAGE_URL;

/*
* Construye la URL completa de imagen para una raza.
 */
export function getImageUrl(file){
    return  `${STOREGE_URL}/imagenes/${file}`;
}

export function getVideoURL(name){
    return  `${STOREGE_URL}/videos/${name}`;
}

export function getPdfURL(name){
    return  `${STOREGE_URL}/pdfs/${name}`;
}

export async function getAnimals() {
// Simula una llamada asíncrona para que el patrón sea reemplazable por fetch()
    return Promise.resolve([
        {
            file: "fenix.jpg",
            name: "FeniX",
            desc: "Ágil y curioso, siempre en movimiento",
        },
        {
            file: "pegaso.jpg",
            name: "Pegaso",
            desc: "Salvaje por fuera, tierno por dentro",
        },
        {
            file: "ninfo.jpg",
            name: "Grifo",
            desc: "El gigante gentil ",
        }

])};


export async function getAnimalsVideo() {
// Simula una llamada asíncrona para que el patrón sea reemplazable por fetch()
    return Promise.resolve([
        {
            file: "fenix_video.mp4",
            name: "Fenix",
            desc: "Ágil y curioso, siempre en movimiento",
        },
        {
            file: "pegaso_video.mp4",
            name: "Pegaso",
            desc: "Salvaje por fuera, tierno por dentro",
        },
        {
            file: "ninfo_video.mp4",
            name: "Grifo",
            desc: "El gigante gentil ",
        }

])};

export async function getAnimals() {
// Simula una llamada asíncrona para que el patrón sea reemplazable por fetch()
    return Promise.resolve([
        {
            file: "fenix.pdf.pdf",
            name: "FeniX",
            desc: "Ágil y curioso, siempre en movimiento",
        },
        {
            file: "pegaso.pdf.pdf",
            name: "Pegaso",
            desc: "Salvaje por fuera, tierno por dentro",
        },
        {
            file: "ninfo.pdf.pdf",
            name: "Grifo",
            desc: "El gigante gentil ",
        }

])};

