import fs from "fs";
import jwt from "jsonwebtoken";

const privateKey = fs.readFileSync(
  "/Users/jessica.cechin/.keys/jitsi/private.key",
  "utf8"
);

const SALA = "YogaComJessica";
const SENHA_DA_SALA = "namaste";

const payload = {
  aud: "jitsi",
  iss: "chat",
  sub: "vpaas-magic-cookie-34c73d0f383d4078a131799bf8b53880",
  room: SALA,

  context: {
    room: {
      password: SENHA_DA_SALA,
    },
    user: {
      name: "Jéssica Cechin",
      moderator: true,
      email: "jessica.cechin@gmail.com",
    },
    features: {
      livestreaming: false,
      recording: true,
      transcription: false,
      "screen-sharing": true,
    },
  },

  // Token válido por 12h
  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12,
};

// Assinando o JWT com sua chave privada
const token = jwt.sign(payload, privateKey, {
  algorithm: "RS256",
  header: {
    kid: "vpaas-magic-cookie-34c73d0f383d4078a131799bf8b53880/a90010", // precisa existir no Dashboard
  },
});

// Imprime no terminal
console.log("\n=== JWT DE ADMIN GERADO COM SUCESSO ===\n");
console.log(token);
console.log("\n=========================================\n");
