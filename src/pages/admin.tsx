import { useEffect, useRef } from "react";

export default function Admin() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const domain = "8x8.vc";
    const jwt =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZwYWFzLW1hZ2ljLWNvb2tpZS0zNGM3M2QwZjM4M2Q0MDc4YTEzMTc5OWJmOGI1Mzg4MC9hOTAwMTAifQ.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtMzRjNzNkMGYzODNkNDA3OGExMzE3OTliZjhiNTM4ODAiLCJyb29tIjoiWW9nYUNvbUplc3NpY2EiLCJjb250ZXh0Ijp7InJvb20iOnsicGFzc3dvcmQiOiJuYW1hc3RlIn0sInVzZXIiOnsibmFtZSI6IkrDqXNzaWNhIENlY2hpbiIsIm1vZGVyYXRvciI6dHJ1ZSwiZW1haWwiOiJqZXNzaWNhLmNlY2hpbkBnbWFpbC5jb20ifSwiZmVhdHVyZXMiOnsibGl2ZXN0cmVhbWluZyI6ZmFsc2UsInJlY29yZGluZyI6dHJ1ZSwidHJhbnNjcmlwdGlvbiI6ZmFsc2UsInNjcmVlbi1zaGFyaW5nIjp0cnVlfX0sImV4cCI6MTc2NTg2Njg4OCwiaWF0IjoxNzY1ODIzNjg4fQ.Rpe3MliYY255im4ejSvIVQQbSyZZUVysofzOuTOiB8QbDCXf0yx_s6lX7EYYBHI_DIJhiUMFYShx5v7HJLBu2_mb_Ykn_ZjRdbog6tnVrr6hCTSH-dv-a7qoFISdEsLsf7Xnkby4OpJhlx_u7h7uobeMysGKi5j1CYTIb8uklcuRPbVSPskKF-PVZn9x_kWA4m-IZeGkyeqPnfDpyUufZ2XVqcwOpZIU-x1kI916BZh3iFbgG4OkJYYEZGA0g3n_Wt5r4KM1nYAfoHZPX42Fx5cUe04kA0pru3SVYAavFa8x5gJB2axpcP5QPLxHiUp32esxVbnIRlwGchgaUZSp1g";

    const options = {
      roomName:
        "vpaas-magic-cookie-34c73d0f383d4078a131799bf8b53880/YogaComJessica",
      jwt,
      parentNode: containerRef.current!,
      width: "100%",
      height: "100%",
      lang: "pt-BR",
      configOverwrite: {
        startWithAudioMuted: false,
        startWithVideoMuted: false,
        requireDisplayName: true,
        disableRemoteMute: false,
        enableLobby: true,
        prejoinPageEnabled: false,
      },
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        HIDE_INVITE_MORE_HEADER: true,
        /*TOOLBAR_BUTTONS: [
          "microphone",
          "camera",
          "desktop",
          "fullscreen",
          "hangup",
          "mute-everyone",
          "settings",
        ],*/
      },
      userInfo: {
        displayName: "Jéssica Cechin",
      },
    };

    // @ts-ignore
    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => api.dispose();
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
