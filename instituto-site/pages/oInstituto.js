import React from "react";

const OInstituto = () => {
  return (
    <div className="bg-[#334b35] min-h-screen">
      {/* Hero Section with all content */}
      <div className="relative w-full min-h-screen">
        <img
          className="w-full h-full object-cover absolute inset-0"
          alt="Growing cannabis hemp plants for alternative medicine"
          src="/img/fundo_sobre.png"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#334b35]/30 to-[#334b35]/90" />
        
        {/* All content overlay */}
        <div className="relative z-10 px-4 sm:px-8 lg:px-16 py-12 lg:py-20 max-w-7xl mx-auto">
                      {/* Title */}
<div className="text-center mb-12 lg:mb-20">
  <h1 className="text-amarelo-01 text-2xl sm:text-3xl lg:text-[40px] font-normal mb-2 font-livvic">
    Um pouco
  </h1>

  {/* Wrapper w-max para o width% da animação funcionar sem cortar/esticar */}
  <div className="w-max mx-auto">
    <h1
      className="
        text-white text-4xl sm:text-5xl lg:text-[70px] font-bold font-livvic
        overflow-hidden whitespace-nowrap
        border-r-4 border-white pr-3
        animate-typing
      " >
      Sobre Nós
    </h1>
  </div>
</div>


            {/* Nosso Propósito Section */}
            <div className="text-center mb-20 lg:mb-32">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-4 font-livvic">
                Nosso Propósito
              </h2>
              
              <div className="w-48 sm:w-56 lg:w-64 h-[3px] bg-[#c9d8b3] mx-auto mb-6" />
              
              <p className="text-white text-base sm:text-lg font-semibold leading-[27px] max-w-4xl mx-auto font-livvic text-[18px] sm:text-[20px]">
                O Instituto EDMA não é apenas um centro de pesquisa — é um espaço de
                acolhimento e inovação. Meu compromisso é transformar a ciência em
                esperança e garantir que mais pessoas tenham acesso a tratamentos
                eficazes e dignos.
              </p>
            </div>

          {/* Nossa Inspiração Section */}
          <div className="mb-20 lg:mb-32">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-4 font-livvic">
              Nossa inspiração
            </h2>
            
            <div className="w-[200px] sm:w-[250px] lg:w-[309px] h-[3px] bg-[#c9d8b3] mb-6" />
            
            <div className="space-y-8">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                <div className="w-full lg:w-1/2 space-y-6">
                  <p className="text-white text-base sm:text-lg font-semibold leading-[27px] font-livvic text-[18px] sm:text-[20px]">
                    O Instituto EDMA nasceu de uma jornada pessoal e de um propósito
                    claro: transformar a realidade da saúde mental.
                    <br />
                    Desde criança, acompanhei de perto a luta da minha tia Edma contra
                    a esquizofrenia. Conviver com ela me ensinou sobre os desafios
                    diários de quem enfrenta transtornos psiquiátricos, mas também
                    sobre a força, a sensibilidade e o amor que existem por trás
                    dessas histórias.
                  </p>
                </div>
                
                <div className="w-full lg:w-1/2 flex justify-center">
                  <img
                    className="w-full max-w-[521px] h-auto"
                    alt="Personal story image from social media"
                    src="https://c.animaapp.com/rtRmefqr/img/snapinsta-app-403473702-325986096854754-1099358497308540939-n-10.png"
                  />
                </div>
              </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-8">
                  <div className="w-full lg:w-1/2">
                    <img
                      className="w-full max-w-[521px] h-auto"
                      alt="Closeup of supportive hands representing care and connection"
                      src="https://c.animaapp.com/rtRmefqr/img/closeup-support-hands-1.png"
                    />
                  </div>
                  
                  <div className="w-full lg:w-1/2 space-y-6">
                    <h3 className="text-white text-2xl sm:text-3xl lg:text-[40px] font-semibold font-livvic">
                      Da Minha História à Minha Missão
                    </h3>
                    
                    <div className="w-[200px] sm:w-[250px] lg:w-[309px] h-[3px] bg-[#c9d8b3]" />
                    
                    <p className="text-white text-base sm:text-lg font-semibold leading-[27px] font-livvic text-[18px] sm:text-[20px]">
                      Ver as dificuldades da minha tia sempre me trouxe uma pergunta
                      inquietante: como proporcionar um cuidado mais humano e acessível
                      para pessoas como ela?
                      <br />
                      Foi essa busca que me levou à Biomedicina e, mais tarde, à
                      Neurociência. Descobri nas terapias canabinoides um caminho
                      promissor para oferecer mais qualidade de vida e romper barreiras no
                      tratamento da saúde mental.
                    </p>
                  </div>
                </div>
            </div>
          </div>

          {/* Por que EDMA Section */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-4 font-livvic">
                Por que EDMA?
              </h2>
              
              <div className="w-[200px] sm:w-[250px] lg:w-[309px] h-[3px] bg-[#c9d8b3] mx-auto mb-6" />
            
              <p className="text-white text-base sm:text-lg font-semibold leading-[27px] font-livvic text-[18px] sm:text-[20px]">
                O nome do instituto é uma homenagem à minha maior inspiração. <br />
                Mas também carrega um significado profundo:
                <br />
                <br />
                Educação — Levar conhecimento sobre saúde mental e inovação científica
                <br />
                <br />
                Descoberta — Pesquisar novas abordagens terapêuticas
                <br />
                <br />
                Medicina Avançada — Aplicar a ciência para transformar vidas
                <br />
                <br />
                Além disso, "Edma" significa "protetora dos bens" em
                sua origem germânica, refletindo o compromisso que tenho com o
                cuidado, a empatia e a conexão humana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OInstituto;