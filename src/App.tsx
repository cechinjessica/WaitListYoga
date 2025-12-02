import YogaScheduleForm from "./components/YogaScheduleForm";
import { BenefitsList } from "./components/BenefitsList";
import { HeroSection } from "./components/HeroSection";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F3F0" }}>
      {/* Gradiente sutil de fundo */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 30%, rgba(59, 174, 146, 0.03) 0%, transparent 50%),
                       radial-gradient(circle at 80% 70%, rgba(233, 166, 166, 0.03) 0%, transparent 50%)`,
        }}
      ></div>

      <div className="relative z-10">
        {/* Header/Hero */}
        <section className="pt-12 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <HeroSection />
          </div>
        </section>

        {/* Apresentação pessoal */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl shadow-black/5">
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-24 h-24 rounded-full mx-auto mb-8 bg-gradient-to-br from-[#3BAE92] to-[#E9A6A6] p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                </div>

                <h2 className="text-3xl mb-6" style={{ color: "#2E2E2E" }}>
                  Oi, eu sou a{" "}
                  <span style={{ color: "#3BAE92" }}>Jéssica Cechin</span>
                </h2>

                <div
                  className="space-y-6 leading-relaxed"
                  style={{ color: "#2E2E2E", opacity: 0.9 }}
                >
                  <p>
                    Certificada internacionalmente pela Yoga Alliance, serei sua
                    instrutora nessa jornada de yoga e bem-estar.
                  </p>

                  <p>
                    Meu objetivo é criar práticas que conectam, inspiram e
                    promovem equilíbrio físico e mental. A jornada é pessoal mas
                    o caminho é mais leve quando trilhado juntos. Busco endender
                    o objetivo de cada aluno e criar práticas que ressoam com
                    suas necessidades individuais.
                  </p>

                  <p>
                    Vamos juntos cultivar espaços, presença e autoconhecimento
                    pelo caminho do yoga.
                  </p>
                </div>

                {/* Decorative separator */}
                <div className="flex justify-center items-center gap-4 mt-12">
                  <div
                    className="w-12 h-px"
                    style={{ backgroundColor: "#E9A6A6" }}
                  ></div>
                  <div className="flex gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#3BAE92" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#E9A6A6" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#3BAE92" }}
                    ></div>
                  </div>
                  <div
                    className="w-12 h-px"
                    style={{ backgroundColor: "#E9A6A6" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA e Formulário */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Benefits */}
              <div className="lg:pt-12">
                <BenefitsList />
              </div>

              {/* Form */}
              <div>
                <YogaScheduleForm />
              </div>
            </div>
          </div>
        </section>

        {/* Footer elegante */}
        <footer className="py-16 mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-12">
              <div className="mb-8">
                <p
                  className="text-lg mb-3 italic"
                  style={{ color: "#2E2E2E", opacity: 0.8 }}
                >
                  Com carinho e intenção,
                </p>
                <h3 className="text-3xl mb-2" style={{ color: "#2E2E2E" }}>
                  Jéssica Cechin
                </h3>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mb-8">
                {[
                  {
                    icon: Instagram,
                    color: "#E9A6A6",
                    href: "https://www.instagram.com/jessica.cechin/",
                  },
                  {
                    icon: Mail,
                    color: "#3BAE92",
                    href: "mailto:jessica.cechin@gmail.com",
                  },
                  {
                    icon: Linkedin,
                    color: "#E9A6A6",
                    href: "https://www.linkedin.com/in/jessicacechin/",
                  },
                  {
                    icon: Github,
                    color: "#3BAE92",
                    href: "https://github.com/cechinjessica",
                  },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{
                        backgroundColor: social.color,
                      }}
                    >
                      <IconComponent
                        className="w-5 h-5"
                        style={{
                          color: "white",
                          strokeWidth: 2,
                        }}
                      />
                    </a>
                  );
                })}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm opacity-60" style={{ color: "#2E2E2E" }}>
                  <a
                    href="https://www.jessicacechin.com"
                    target="_blank"
                    className="hover:underline"
                  >
                    Jéssica Cechin © {new Date().getFullYear()} • Desenvolvido
                    com 💚 e código{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
