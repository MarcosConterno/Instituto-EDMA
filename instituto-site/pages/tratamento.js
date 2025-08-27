const StepsSection = () => {
  const steps = [
    {
      title: "Consulta com especialista",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/img/tratamento/atendimento.jpg",  // Caminho da imagem para este step
    },
    {
      title: "Prescrição personalizada",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/img/tratamento/medico1.jpg",  // Caminho da imagem para este step
    },
    {
      title: "Reunir documentação",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/img/especialistas/reunir-documentacao.png",  // Caminho da imagem para este step
    },
    {
      title: "Aquisição do tratamento",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/img/tratamento/cbd.jpg",  // Caminho da imagem para este step
    },
    {
      title: "Acompanhamento e ajustes",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/img/especialistas/acompanhamento-ajustes.png",  // Caminho da imagem para este step
    },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundColor: "#111A17", 
        backgroundImage:
          "linear-gradient(rgba(29, 85, 63, 0.45), rgba(0, 0, 0, 0.35)), url('/img/textura.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#254337] to-[#254337] opacity-10"></div>

      <div className="max-w-7xl mx-auto ">
        {/* Título e subtítulo */}
        <div className="text-center mb-12">
          <p className="text-4xl lg:text-5xl text-white/70 font-bold mb-4">
            COMO INICIAR UM TRATAMENTO
          </p>
          <h2
            className="text-2xl uppercase  tracking-widest  mb-6"
            style={{ color: "#b2c5b0ff" }}
          >
            Tratamos saúde com foco em você
          </h2>
        </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 place-items-center">
  {steps.map((step, index) => (
<div
  key={index}
  className={`relative flex flex-col items-center text-center p-6 md:p-8 rounded-xl 
  w-full h-full max-w-xs md:max-w-md lg:max-w-lg mb-6 md:mb-0 transform transition duration-300 ease-in-out
  ${index === 4 ? "flex justify-center" : ""} 
  group hover:z-50 hover:scale-110 hover:translate-y-3`} // Adicionando efeitos de transformação e z-index
>
  {/* Fundo da imagem com efeito de blur ativado no hover */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0 rounded-xl filter transition-all duration-300 ease-in-out group-hover:blur-sm"
    style={{
      backgroundImage: `url(${step.image})`,  // A imagem agora é única para cada step
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "rgba(37, 67, 55, 0.6)", // Transparência aplicada apenas no fundo do step
    }}
  />

  {/* Conteúdo (Texto e título) */}
  <div className="flex flex-col justify-between h-full w-full z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
    {/* Texto que aparece no hover */}
    <p className="text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      {step.text}
    </p>

    {/* Título posicionado na parte inferior do componente, oculto no hover */}
    <h3 className="text-xl font-semibold mt-auto text-[#111A17] group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
      {step.title}
    </h3>
  </div>
</div>






  ))}
</div>
      </div>
    </section>
  );
};

export default StepsSection;
