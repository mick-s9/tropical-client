import React from 'react';
import './ComoFunciona.css'; // Assicurati di creare un file CSS per gli stili

const ComoFunciona = () => {
    return (
        <div className="como-funciona">
            <h2>Saiba como funciona nosso processo.</h2>
            <div className="section-como">
                <div className='container-2-section-como'>
                    <img src="https://s3-alpha-sig.figma.com/img/68f7/1ef8/3ac907904ccaa5f580de3829abb9cf02?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULJK-~OpEgX4nef6yvSDs6K0pPI5l8r7xtAYvMs~wB~M9FqndpipF2wZOJl7C8DAN9k9gxXsUF8wkjBfuUEj0CYavqhE6phFRCsarB9JoVj24XzRp-yGsdgTs2gZ13m9UWcPs4rKeP0ni7jem92pKRaVIOccIS0CIM8YZpvLCqjPZd8l9DVM~qSYBPoh2SpXaxh1qLirPA8rXJZ3rTfuKO83HhjFAC2s6FoqAE4wxPYED~TWzii-Fjg8blnFwJPRtyp0Y3I-X5mk-yUoywieZOREGCAh36J26X3fz7Jdjc~4SUE~VGgxXgDzumysl4KMXDuU5w7Yk7mUrS2WI8iiNg__" alt="Computador" className="image" />
                    <div className="text">
                        <h3>Publique o projeto</h3>
                        <p>Conte-nos em poucas palavras o que você precisa. É grátis e sem compromisso!</p>
                    </div>
                </div>
                <div className='container-svg-line'>
                    <svg width="500" height="225" viewBox="0 0 1015 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 1.77734C2 1.77734 125.514 157.72 585.917 90.8872C1046.32 24.0542 1012.9 224.553 1012.9 224.553" stroke="#D6B8FF" stroke-width="3" stroke-dasharray="10 10" />
                    </svg>
                </div>
            </div>

            <div className="section-como">
                <div className='container-2-section-como reverse'>
                    <img src="https://s3-alpha-sig.figma.com/img/d3e6/0a53/39556787fcb13c8dc0b73f5174a3d6b2?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KEWsKxwQOl--ZgiUbRL-SMs4eIqYvfaQeEk09wS1oJIfiZhmVAVdC4BwB21PaWnOxDClU4gjMfuxpvXzY3hoNud1TAv3-W2~1zGF4FskWiHYHXOc~uWFAxuE4hAtAWxaovSrBZedj9YkJtcqqBl9lAWgg0XxSL82tvSli2KtgHOvrYkzuFEAJk9zK3MOimicvvxoqHYj2iK3BmiY5zHVy9gQ~NV4TPeTTxc-73g~wRNFjaDUToBjX2DrmNlx~Ca6Omw-b7g7Shbb5aI0INdTd1pLt5BKcQ7p5qG5WoXkg3O8fyNUpWUGi0s~bn8U9v3waI87BQp~H5LBwsh~tShqCQ__" alt="Computador" className="image" />
                    <div className="text">
                        <h3>Selecione o profissional</h3>
                        <p>Receba propostas de excelentes freelancers. Escolha o melhor para o seu projeto.</p>
                    </div>
                </div>
                <div className='container-svg-line'>
                    <svg width="500" height="225" viewBox="0 0 1015 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 1.77734C2 1.77734 125.514 157.72 585.917 90.8872C1046.32 24.0542 1012.9 224.553 1012.9 224.553" stroke="#D6B8FF" stroke-width="3" stroke-dasharray="10 10" />
                    </svg>
                </div>
            </div>

            <div className="section reverse">
                <div className="text">
                    <h3>Selecione o profissional</h3>
                    <p>Receba propostas de excelentes freelancers. Escolha o melhor para o seu projeto.</p>
                </div>
                <img src="/path/to/professional-selection-image.png" alt="Seleção de profissional" className="image" />
            </div>
            <img src="/path/to/connecting-line2.png" alt="Linha de conexão" className="connecting-line" />
            <div className="section">
                <img src="/path/to/payment-image.png" alt="Pagamento" className="image" />
                <div className="text">
                    <h3>Faça o pagamento</h3>
                    <p>Você faz o pagamento com total garantia sobre o valor depositado e já começa a trabalhar :)</p>
                </div>
            </div>
            <img src="/path/to/connecting-line3.png" alt="Linha de conexão" className="connecting-line" />
            <div className="section reverse">
                <div className="text">
                    <h3>Aceite e Finalize</h3>
                    <p>Receba o projeto concluído e libere o valor depositado ao freelancer.</p>
                </div>
                <img src="/path/to/finalize-image.png" alt="Finalização" className="image" />
            </div>
            <div className="buttons">
                <button className="publish-project">PUBLIQUE UM PROJETO</button>
                <button className="work-as-freelancer">TRABALHE COMO FREELA</button>
            </div>
        </div>
    );
};

export default ComoFunciona;
