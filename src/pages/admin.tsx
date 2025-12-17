import { useEffect, useRef } from "react";

export default function Admin() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const domain = "8x8.vc";
    const jwt =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZwYWFzLW1hZ2ljLWNvb2tpZS0zNGM3M2QwZjM4M2Q0MDc4YTEzMTc5OWJmOGI1Mzg4MC9hOTAwMTAifQ.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtMzRjNzNkMGYzODNkNDA3OGExMzE3OTliZjhiNTM4ODAiLCJyb29tIjoiWW9nYUNvbUplc3NpY2EiLCJjb250ZXh0Ijp7InVzZXIiOnsibmFtZSI6IkrDqXNzaWNhIENlY2hpbiIsIm1vZGVyYXRvciI6dHJ1ZSwiZW1haWwiOiJqZXNzaWNhLmNlY2hpbkBnbWFpbC5jb20ifSwiZmVhdHVyZXMiOnsibGl2ZXN0cmVhbWluZyI6ZmFsc2UsInJlY29yZGluZyI6dHJ1ZSwidHJhbnNjcmlwdGlvbiI6ZmFsc2UsInNjcmVlbi1zaGFyaW5nIjp0cnVlfX0sImlhdCI6MTc2NTk3Njk4Nn0.WMJxLokcDBI4xulzbAm07ufrgnrcfjjOCGtcQ8rW6GPUlAnx_WBYlaPxhutZQx52ewOzEj8ohRAliwsa-NU1Fha7gmr0q6xjth5RcuneypixCaJwoctW6pGucHAOEuwxYTNZs2uX8OaoB_C1qsB3PS6D0qP0f3LIi3Ug7052sT0pWaEsj9tyettooIwYk1JpbjX6s10D-r5PSCEae3RcCbMUvZNE8ElGKbd0q7KXK6yqaVb2BTFZGHdpgdcN_KgnLwiVQL9GSvMzysQePCbg4LwJisXD7npuNR5de4A-44O1KftMOVUylTI-4TTJ9DTnDyiam8cuNBGk6kN6_-H4Dw";

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
