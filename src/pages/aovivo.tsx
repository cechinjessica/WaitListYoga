import { useEffect, useRef, useState } from "react";

export default function AoVivo() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    return () => api.dispose();
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
