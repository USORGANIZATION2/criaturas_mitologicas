// Importa hooks de React
import { useEffect, useRef } from "react";


/*
Componente principal del modal (overlay)
Controla:
- si el modal está abierto o cerrado
- cerrar con ESC
- cerrar al hacer click fuera del contenido
*/
export function Dialog({ open, onOpenChange, children }) {

    // Referencia al overlay (fondo oscuro)
    const overlayRef = useRef(null);

    /*
    useEffect se ejecuta cuando cambia el estado "open".
    Sirve para escuchar la tecla ESC y cerrar el modal.
    */
    useEffect(() => {

        const handleKey = (e) => {
            // Si se presiona Escape se cierra el modal
            if (e.key === "Escape" && onOpenChange) {
                onOpenChange(false);
            }
        };

        // Solo agrega el evento cuando el modal está abierto
        if (open) {
            document.addEventListener("keydown", handleKey);
        }

        // Limpia el evento cuando el modal se cierra o se desmonta
        return () => document.removeEventListener("keydown", handleKey);

    }, [open, onOpenChange]);


    // Si el modal no está abierto no renderiza nada
    if (!open) return null;


    return (
        <div
            ref={overlayRef}

            // Fondo oscuro con blur
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"

            /*
            Si se hace click fuera del contenido del modal
            se cierra automáticamente
            */
            onClick={(e) => {
                if (e.target === overlayRef.current && onOpenChange) {
                    onOpenChange(false);
                }
            }}
        >
            {children}
        </div>
    );
}


/*
Contenedor interno del modal
Aquí se coloca el contenido real (video, imagen, pdf, etc)
*/
export function DialogContent({ children, className = "" }) {

    return (
        <div
            className={`relative bg-white rounded-2xl shadow-2xl w-full mx-4 p-6 overflow-y-auto max-h-[95vh] ${className}`}

            // Evita que el click dentro del modal lo cierre
            onClick={(e) => e.stopPropagation()}
        >
            {/* Aquí se renderiza el contenido que se pase al modal */}
            {children}
        </div>
    );
}


/*
Encabezado del modal
Sirve para agrupar el título o elementos superiores
*/
export function DialogHeader({ children, className = "" }) {

    return (
        <div className={`mb-4 ${className}`}>
            {children}
        </div>
    );
}


/*
Título del modal
Define el estilo estándar del título
*/
export function DialogTitle({ children, className = "" }) {

    return (
        <h2 className={`text-xl font-semibold text-gray-900 ${className}`}>
            {children}
        </h2>
    );
}