import { Sparkles, Bell, Gift } from "lucide-react";

export function BenefitsList() {
  const benefits = [
    {
      icon: Bell,
      title: "Contato sem compromisso",
      description:
        "Eu entrarei em contato para entender seus objetivos e necessidades nesse momento.",
    },
    {
      icon: Sparkles,
      title: "Prática Personalizada",
      description:
        "Aulas adaptadas ao seu nível e objetivos, garantindo uma experiência única e cheia de significado.",
    },
    {
      icon: Gift,
      title: "Aprofundamento e Ofertas",
      description:
        "Acesso a conteúdos exclusivos e ofertas especiais ao longo da sua jornada de yoga.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl mb-4" style={{ color: "#2E2E2E" }}>
          Por que devo me inscrever?
        </h3>
        <p
          className="text-sm opacity-70 max-w-md mx-auto"
          style={{ color: "#2E2E2E" }}
        >
          Ao se inscrever, eu entrarei em contato para agendarmos sua primeira
          aula
        </p>
      </div>

      <div className="space-y-6">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm"
            >
              <div
                className="p-3 rounded-full relative"
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? "rgba(59, 174, 146, 0.15)"
                      : "rgba(233, 166, 166, 0.15)",
                }}
              >
                <IconComponent
                  className="w-5 h-5 relative z-10"
                  style={{
                    color: index % 2 === 0 ? "#2d8a6f" : "#c87878",
                    strokeWidth: 2.5,
                  }}
                />
              </div>
              <div>
                <h4 className="mb-1" style={{ color: "#2E2E2E" }}>
                  {benefit.title}
                </h4>
                <p
                  className="text-sm leading-relaxed opacity-70"
                  style={{ color: "#2E2E2E" }}
                >
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
