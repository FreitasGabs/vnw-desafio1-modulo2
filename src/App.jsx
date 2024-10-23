// importando o useState
import { useState } from "react";
// importando o estilo
import "./global.scss";

// baseado no figma: https://www.figma.com/design/LBODsPDSyKhBv5lex4Vrsv/Untitled?node-id=1-30&node-type=frame&t=ao6p0POX5jXKAkKM-0
// e no código: https://codesandbox.io/p/sandbox/lcfhk4

//iniciando nossa função principal
export default function LampadaMagica() {
  const [lampada, setLampada] = useState(false);

  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <main>
      <h2>"Liberte a magia da programação com a lâmpada de Alladin"</h2>

      <img
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lâmpada"
        onClick={trocarLampada}
      />

      <h3>Clique na Lâmpada</h3>
    </main>
  );
}
