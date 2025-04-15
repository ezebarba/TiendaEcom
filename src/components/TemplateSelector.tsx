import React, { useState, useEffect } from "react";
import config from "../config.json";

const TemplateSelector = () => {
  const [template, setTemplate] = useState(config.template);

  useEffect(() => {
    // Aquí podrías guardar el template elegido en el localStorage
  }, [template]);

  return (
    <div>
      <button onClick={() => setTemplate("minimalista")}>Minimalista</button>
      <button onClick={() => setTemplate("boutique")}>Boutique</button>
      <button onClick={() => setTemplate("clasico")}>Clásico</button>
    </div>
  );
};

export default TemplateSelector;
