import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <div className="relative">
      {/* Background Image com overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <ImageWithFallback
          src="/images/hero.jpg"
          alt="Yoga minimalista"
          className="w-full h-full object-cover object-center"
          style={{
            opacity: 0.3,
            minHeight: "700px",
            minWidth: "700px",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-40"
          style={{
            background: `linear-gradient(135deg, #F5F3F0 0%, rgba(59, 174, 146, 0.1) 50%, rgba(233, 166, 166, 0.1) 100%)`,
          }}
        ></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center py-32 px-8 min-h-[600px] flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight"
            style={{ color: "#2E2E2E" }}
          >
            Yoga é sobre
            <span className="block italic" style={{ color: "#3BAE92" }}>
              presença
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#2E2E2E", opacity: 0.8 }}
          >
            Ingresse nessa jornada de autoconhecimento comigo.
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div
              className="w-16 h-px"
              style={{ backgroundColor: "#E9A6A6" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#3BAE92" }}
            ></div>
            <div
              className="w-16 h-px"
              style={{ backgroundColor: "#E9A6A6" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
