import { useEffect, useRef } from "react";
import shaka from "shaka-player/dist/shaka-player.ui";
import "shaka-player/dist/controls.css";

const Futura = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Verifica si el navegador es compatible con Shaka Player
    if (shaka.Player.isBrowserSupported()) {
      // Crea un nuevo reproductor Shaka Player
      const player = new shaka.Player(videoElement);

      // Configura las opciones del reproductor
      const playerConfig = {
        // Puedes agregar configuraciones adicionales aquí
      };

      // Inicializa el reproductor con las opciones de configuración
      player.configure(playerConfig);

      // Carga el contenido M3U8 en el reproductor
      player
        .load("https://d1rnjt8o1ldtod.cloudfront.net/futura.m3u8")
        .then(() => {
          // Reproduce el contenido cuando se carga correctamente
          videoElement.play();
        })
        .catch((error) => {
          console.error("Error al cargar el contenido:", error);
        });
    } else {
      console.error("Shaka Player no es compatible con este navegador.");
    }
  }, []);

  return (
    <video
      ref={videoRef}
      controls
      style={{ maxWidth: "100%", marginTop: "15px" }}
    >
      Su navegador no admite la etiqueta de video.
    </video>
  );
};

export default Futura;
