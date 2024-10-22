// importando o useState
import { useState } from "react";
// importando o estilo
import "./global.scss";

//iniciando nossa função principal
export default function LampadaMagica() {
  const [lampada, setLampada] = useState(false);

  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <main>
      <h2>"Liberte a magia da programação com a lâmpada de Alladin"</h2>
      <h3>Clique na lâmpada e faça um pedido:</h3>

      <img
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lâmpada"
        onClick={trocarLampada}
      />
    </main>
  );
}
