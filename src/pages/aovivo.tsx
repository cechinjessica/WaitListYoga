import { useEffect, useRef, useState } from "react";

export default function AoVivo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [finalizada, setFinalizada] = useState(false);

  useEffect(() => {
    const domain = "8x8.vc";

    const options = {
      roomName:
        "vpaas-magic-cookie-34c73d0f383d4078a131799bf8b53880/YogaComJessica",
      parentNode: containerRef.current!,
      width: "100%",
      height: "100%",
      lang: "pt-BR",
      configOverwrite: {
        startWithAudioMuted: true,
        startWithVideoMuted: true,
        requireDisplayName: true,
        disableRemoteMute: true,
        disableInviteFunctions: true,
        prejoinPageEnabled: true,
      },
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        // TOOLBAR_BUTTONS: ["microphone", "camera", "hangup"],
      },
    };

    // @ts-ignore
    const api = new window.JitsiMeetExternalAPI(domain, options);

    api.addEventListener("videoConferenceLeft", () => {
      setFinalizada(true);
      api.dispose();
    });

    return () => api.dispose();
  }, []);

  if (finalizada) {
    return (
      <div className="flex items-center justify-center h-screen text-center">
        <div>
          <h2 className="text-2xl mb-4">A aula foi encerrada 🌿</h2>
          <p className="mb-6">Obrigada por praticar comigo hoje.</p>
          <a href="/" className="px-6 py-3 rounded text-black">
            Voltar para o site
          </a>
        </div>
      </div>
    );
  }

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
