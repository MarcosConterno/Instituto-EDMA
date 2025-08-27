const StepsSection = () => {
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

      <div className="max-w-7xl mx-auto">
        {/* Título e subtítulo */}
        <div className="text-center mb-12">
          <p className="text-4xl lg:text-5xl text-white/70 font-bold mb-4">
            COMO INICIAR UM TRATAMENTO
          </p>
          <h2
            className="text-2xl uppercase tracking-widest mb-6"
            style={{ color: "#b2c5b0ff" }}
          >
            Tratamos saúde com foco em você
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 place-items-center">
          {/* Componente 1 */}
          <div
            className={`relative flex flex-col items-center text-center p-6 md:p-8 rounded-xl 
            w-full h-full max-w-xs md:max-w-md lg:max-w-lg mb-6 md:mb-0 transform transition duration-300 ease-in-out
            group hover:z-50 hover:scale-110 hover:translate-y-3`}
          >
            {/* Imagem com efeito de blur ativado no hover */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 rounded-xl filter transition-all duration-300 ease-in-out group-hover:blur-sm"
              style={{
                backgroundImage: `url('/img/tratamento/atendimento.jpg')`, // Imagem única
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(37, 67, 55, 0.6)", // Transparência aplicada ao fundo
              }}
            />

            {/* Conteúdo (Texto e título) */}

            <div className="absolute bottom-4 w-full text-center">
              <h3 className="text-xl font-semibold text-black group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Consulta com especialista
              </h3>
            </div>
            <div className="flex flex-col justify-between h-full w-full z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>

          {/* Componente 2 */}
          <div
            className={`relative flex flex-col items-center text-center p-6 md:p-8 rounded-xl 
            w-full h-full max-w-xs md:max-w-md lg:max-w-lg mb-6 md:mb-0 transform transition duration-300 ease-in-out
            group hover:z-50 hover:scale-110 hover:translate-y-3`}
          >
            {/* Imagem com efeito de blur ativado no hover */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 rounded-xl filter transition-all duration-300 ease-in-out group-hover:blur-sm"
              style={{
                backgroundImage: `url('/img/tratamento/medico1.jpg')`, // Imagem única
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(37, 67, 55, 0.6)", // Transparência aplicada ao fundo
              }}
            />

            {/* Conteúdo (Texto e título) */}

            <div className="absolute bottom-4 w-full text-center">
              <h3 className="text-xl font-semibold text-black group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Prescrição personalizada
              </h3>
            </div>
            <div className="flex flex-col justify-between h-full w-full z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-black">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </p>
              </div>
            </div>
          </div>

          {/* Componente 3 */}
          <div
            className={`relative flex flex-col items-center text-center p-6 md:p-8 rounded-xl 
            w-full h-full max-w-xs md:max-w-md lg:max-w-lg mb-6 md:mb-0 transform transition duration-300 ease-in-out
            group hover:z-50 hover:scale-110 hover:translate-y-3`}
          >
            {/* Imagem com efeito de blur ativado no hover */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 rounded-xl filter transition-all duration-300 ease-in-out group-hover:blur-sm"
              style={{
                backgroundImage: `url('/img/especialistas/med02.jpeg')`, // Imagem única
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(37, 67, 55, 0.6)", // Transparência aplicada ao fundo
              }}
            />

            {/* Conteúdo (Texto e título) */}

            <div className="absolute bottom-4 w-full text-center">
              <h3 className="text-xl font-semibold text-black group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Reunir documentação
              </h3>
            </div>
            <div className="flex flex-col justify-between h-full w-full z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          {/* Componente 4 */}
          <div
            className={`relative flex flex-col items-center text-center p-6 md:p-8 rounded-xl 
  w-full h-full max-w-xs md:max-w-md lg:max-w-lg mb-6 md:mb-0 transform transition duration-300 ease-in-out
  group hover:z-50 hover:scale-110 hover:translate-y-3`}
          >
            {/* Imagem com efeito de blur ativado no hover */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 rounded-xl filter transition-all duration-300 ease-in-out group-hover:blur-sm"
              style={{
                backgroundImage: `url('/img/tratamento/cbd.jpg')`, // Imagem única
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(37, 67, 55, 0.6)", // Transparência aplicada ao fundo
              }}
            />

            {/* Título posicionado na parte inferior */}
            <div className="absolute bottom-4 w-full text-center z-10">
              <h3 className="text-xl font-semibold text-black group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Aquisição do tratamento
              </h3>
            </div>

            {/* Conteúdo (Texto) */}
            <div className="flex flex-col justify-between h-full w-full z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-black">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </p>
              </div>
            </div>
          </div>

          {/* Componente 5 */}
          <div
            className={`relative flex flex-col items-center text-center p-6 md:p-8 rounded-xl 
            w-full h-full max-w-xs md:max-w-md lg:max-w-lg mb-6 md:mb-0 transform transition duration-300 ease-in-out
            group hover:z-50 hover:scale-110 hover:translate-y-3`}
          >
            {/* Imagem com efeito de blur ativado no hover */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 rounded-xl filter transition-all duration-300 ease-in-out group-hover:blur-sm"
              style={{
                backgroundImage: `url('/img/especialistas/med04.png')`, // Imagem única
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(37, 67, 55, 0.6)", // Transparência aplicada ao fundo
              }}
            />
            <div className="absolute bottom-4 w-full text-center">
              <h3 className="text-xl font-semibold text-black group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Acompanhamento e ajustes
              </h3>
            </div>
            {/* Conteúdo (Texto e título) */}
            <div className="flex flex-col justify-between h-full w-full z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
