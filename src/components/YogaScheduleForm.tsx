import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card, CardContent } from "./ui/card";

// ATENÇÃO: usar a access key no front-end expõe ela publicamente. Ideal: mover para um endpoint/serverless.
const WEB3FORM_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "c727bb12-ebc7-421c-8837-637e85c1ecd1"; // fornecido por você

export default function YogaScheduleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const [loading, setLoading] = useState(false);

  const validateWhatsApp = (phone: string) => {
    // remove espaços, parênteses e traços
    const digits = phone.replace(/[^0-9+]/g, "");
    // simples validação: pelo menos 8 dígitos (ajuste conforme sua necessidade)
    return digits.length >= 8;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // validações simples
    if (!formData.name || !formData.email || !formData.whatsapp) {
      alert("Por favor preencha nome, e-mail e WhatsApp.");
      return;
    }

    if (!validateWhatsApp(formData.whatsapp)) {
      alert("Por favor insira um número de WhatsApp válido.");
      return;
    }

    setLoading(true);

    const payload = {
      access_key: ACCESS_KEY,
      subject: "Novo contato para agendar aula de yoga",
      name: formData.name,
      email: formData.email,
      whatsapp: formData.whatsapp,
      message: `Contato para agendar aula. ${formData.name} - WhatsApp: ${formData.whatsapp}`,
    };

    try {
      const res = await fetch(WEB3FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (json.success) {
        alert("Obrigada! Em breve entrarei em contato ✨");
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
        });
      } else {
        console.error("Web3Form response", json);
        alert("Ops! Não foi possível enviar. Tente novamente.");
      }
    } catch (err) {
      console.error(err);
      alert("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      className="w-full max-w-lg mx-auto border-0 shadow-2xl shadow-black/5"
      style={{ backgroundColor: "white" }}
    >
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl mb-3" style={{ color: "#2E2E2E" }}>
            Agende uma aula
          </h3>
          <p className="text-sm opacity-70" style={{ color: "#2E2E2E" }}>
            Suas informações estarão seguras e não serão usada para envio de
            spam. Em breve entrarei em contato.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="name" style={{ color: "#2E2E2E" }}>
              Nome
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-gray-50 border-0 focus:border-0 focus:ring-2 focus:ring-[#3BAE92] focus:ring-opacity-20 py-4 rounded-2xl"
              placeholder="Seu nome completo"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" style={{ color: "#2E2E2E" }}>
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-gray-50 border-0 focus:border-0 focus:ring-2 focus:ring-[#3BAE92] focus:ring-opacity-20 py-4 rounded-2xl"
              placeholder="seu@email.com"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="whatsapp" style={{ color: "#2E2E2E" }}>
              WhatsApp
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
              required
              className="bg-gray-50 border-0 focus:border-0 focus:ring-2 focus:ring-[#3BAE92] focus:ring-opacity-20 py-4 rounded-2xl"
              placeholder="+55 11 9xxxx-xxxx"
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-8 text-white rounded-2xl py-4 transition-all duration-300 hover:shadow-xl hover:shadow-[#3BAE92]/20 hover:scale-[1.02]"
            style={{ backgroundColor: "#3BAE92" }}
            disabled={loading}
          >
            {loading ? "Enviando..." : "Quero agendar 🌿"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
