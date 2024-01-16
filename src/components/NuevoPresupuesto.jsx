import { useState } from "react";

import Mensaje from "./Mensaje";

function NuevoPresupuesto({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (event) => {
    event.preventDefault();

    if (presupuesto === 0) {
      setMensaje("No es un Presupuesto valido");
      return;
    }

    setMensaje("");
    setIsValidPresupuesto(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            type="number"
            min={0}
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={({ target: { value } }) => setPresupuesto(Number(value))}
          />
        </div>

        <input type="submit" value="Añadir" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
}

export default NuevoPresupuesto;
