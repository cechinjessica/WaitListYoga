import { Sparkles, Bell, Gift } from "lucide-react";

export function BenefitsList() {
  const benefits = [
    {
      icon: Bell,
      title: "Aviso antecipado",
      description: "Seja a primeira a saber quando as novas turmas abrirem.",
    },
    {
      icon: Sparkles,
      title: "Conteúdo com intenção",
      description: "Receba reflexões e práticas para já começar a se conectar.",
    },
    {
      icon: Gift,
      title: "Vantagens exclusivas",
      description: "Condições especiais para quem estiver na lista de espera.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl mb-4" style={{ color: "#2E2E2E" }}>
          Por que entrar na lista?
        </h3>
        <p
          className="text-sm opacity-70 max-w-md mx-auto"
          style={{ color: "#2E2E2E" }}
        >
          Conecte-se com uma comunidade que valoriza crescimento e bem-estar
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
