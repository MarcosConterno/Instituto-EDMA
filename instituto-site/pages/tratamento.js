const StepsSection = () => {
  const steps = [
    { icon: "user", title: "Consulta com especialista", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { icon: "pencil", title: "Prescrição personalizada", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { icon: "folder", title: "Reunir documentação", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { icon: "check-circle", title: "Aquisição do tratamento", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { icon: "cogs", title: "Acompanhamento e ajustes", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
  ];

  return (
    <section 
      className="py-16 px-6 sm:px-10 md:px-16 max-w-screen-xl mx-auto font-livvic bg-cover bg-center text-white"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Como iniciar um tratamento de cannabis pelo instituto EDMA</h2>
      <div className="flex justify-between items-start gap-12">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center bg-transparent p-8 rounded-xl shadow-lg w-60">
            {/* Número dentro de um círculo */}
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-green-500 text-white text-xl font-bold">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-200">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
