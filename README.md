🚀 Advanced GSAP Showcase: Atomic & AirPods Max

Este repositório contém dois projetos de landing pages de alta fidelidade visual, focados em storytelling interativo através do scroll. Utilizando a biblioteca GSAP (GreenSock Animation Platform), os projetos transformam a navegação comum em uma experiência cinematográfica de produto.

🛠️ O que há de "Avançado" aqui?

Diferente de animações simples de entrada, estes projetos utilizam:

Timelines Encadeadas: Sequências complexas onde múltiplos elementos (imagens de produtos, textos e fundos) se movem em sincronia milimétrica.

Manipulação de Propriedades CSS: Uso de filter: blur, scale, rotation e z-index em tempo real conforme o usuário rola a página.

Scroll Scrubbing: As animações não apenas dão "play", elas estão diretamente ligadas à posição da barra de rolagem, permitindo que o usuário controle o tempo da animação.

Custom Scrollbar: No projeto AirPods, foi implementada uma barra de rolagem personalizada via JavaScript para manter a estética minimalista.

📁 Destaques dos Projetos

1. Atomic (Ski Boots)
Efeito de Desmontagem: As botas se separam e rotacionam para dar foco em detalhes técnicos específicos.

Video Switcher: Um sistema funcional de troca de vídeos do YouTube via Data Attributes, permitindo trocar o conteúdo sem recarregar a página.

2. AirPods Max
Animação de Escala: O headset diminui e se posiciona enquanto os textos laterais desaparecem, criando uma transição suave entre seções.

Interface Flutuante: Elementos de UI que surgem de diferentes direções para compor a ficha técnica do produto.

🧰 Tecnologias

GSAP 3.12.5: Motor de animação.

ScrollTrigger Plugin: Para o controle de animação via scroll.

CSS Custom Properties: Para um sistema de design organizado.

JavaScript (ES6): Lógica de controle e manipulação de DOM.

⚠️ Observação Importante: Responsividade

Nota: Este projeto foi desenvolvido como um estudo de animação avançada focado em Desktop. Atualmente, o layout e as timelines do GSAP não são responsivos, sendo otimizados para telas de alta resolução. O uso em dispositivos móveis pode apresentar desalinhamentos nas coordenadas das animações.

🚀 Como Visualizar

Certifique-se de que os arquivos .html, .css e .js estão nas pastas corretas conforme as referências no código.

Abra o arquivo index.html (Atomic) ou apple.html (AirPods Max) em seu navegador.

Role devagar para apreciar a fluidez das transições.
