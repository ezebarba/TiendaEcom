import axios from "axios";

export const calcularEnvio = async (direccion: string) => {
  try {
    const response = await axios.post("https://api.andreani.com.ar/v1/consultas/envios", {
      direccion,
      // Otros parámetros como dimensiones del paquete, peso, etc.
    });
    return response.data;
  } catch (error) {
    console.error("Error al calcular el envío", error);
  }
};
