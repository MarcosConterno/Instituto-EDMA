const StepsSection = () => {
  const steps = [
    {
      title: "Consulta com especialista",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
      className="py-10 px-5 sm:px-5 md:px-16 min-h-screen mx-auto font-livvic text-white relative"
      style={{
        backgroundImage: 'url("/img/especialistas/cannabis-marijuana-leaf-closeup 1.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#111a17",
        height: "auto",
        width: "100%",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#254337] to-[#254337] opacity-10"></div>

      <h2 className="text-3xl font-bold mb-12 text-center relative z-10 mt-24">
        Como iniciar um tratamento de cannabis pelo instituto EDMA
      </h2>

      <div
        className="flex flex-wrap justify-center items-center gap-12 relative z-10 mt-32 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        {steps.map((step, index) => (
<div
  key={index}
  className={`relative flex flex-col items-center text-center p-6 md:p-8 rounded-xl 
  rotate-0 hover:-rotate-12 duration-500 hover:-translate-y-12 h-full w-full object-cover 
  hover:scale-150 transform origin-bottom
  hover:scale-110 hover:-translate-y-3 hover:shadow-[0_12px_30px_-6px_rgba(16,185,129,.45)]
  w-full h-full md:w-72 mb-6 md:mb-0 transform transition duration-300 ease-in-out
  ${index === 4 ? "flex justify-center" : ""}`} // Alinha o último item no centro
  style={{
    backgroundImage: `url(${step.image})`,  // A imagem agora é única para cada step
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(37, 67, 55, 0.6)", // Transparência aplicada apenas no fundo do step
  }}
>
  {/* Texto que aparece no hover */}
  <p className="text-black opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
    {step.text}
  </p>

  {/* Título agora posicionado abaixo */}
  <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
</div>


        ))}
      </div>
    </section>
  );
};

export default StepsSection;
