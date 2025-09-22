import { useState } from "react";
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

export function YogaWaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preference: "",
    city: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwIB3D43fVIFK_wJewCQuGi9PAf8u154igi0-oQC3w4rR9yAShd28FjLSqQx5-ZAMygYA/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "text/plain;charset=utf-8" },
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Obrigada! Você foi adicionada à lista de espera ✨");
        setFormData({ name: "", email: "", preference: "", city: "" });
      } else {
        alert("Ops! Algo deu errado, tente novamente.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão, tente novamente.");
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
            Entre na lista de espera
          </h3>
          <p className="text-sm opacity-70" style={{ color: "#2E2E2E" }}>
            Seja uma das primeiras a saber sobre as novas turmas
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
            <Label htmlFor="preference" style={{ color: "#2E2E2E" }}>
              Preferência de aula
            </Label>
            <Select
              value={formData.preference}
              onValueChange={(value) =>
                setFormData({ ...formData, preference: value, city: "" })
              }
            >
              <SelectTrigger className="bg-gray-50 border-0 focus:border-0 focus:ring-2 focus:ring-[#3BAE92] focus:ring-opacity-20 py-4 rounded-2xl">
                <SelectValue placeholder="Escolha sua preferência" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="presencial">Presencial</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="ambas">Ambas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {(formData.preference === "presencial" ||
            formData.preference === "ambas") && (
            <div className="space-y-3">
              <Label htmlFor="city" style={{ color: "#2E2E2E" }}>
                Cidade
              </Label>
              <Input
                id="city"
                type="text"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                required={formData.preference === "presencial"}
                className="bg-gray-50 border-0 focus:border-0 focus:ring-2 focus:ring-[#3BAE92] focus:ring-opacity-20 py-4 rounded-2xl"
                placeholder="Sua cidade"
              />
            </div>
          )}

          <Button
            type="submit"
            className="w-full mt-8 text-white rounded-2xl py-4 transition-all duration-300 hover:shadow-xl hover:shadow-[#3BAE92]/20 hover:scale-[1.02]"
            style={{ backgroundColor: "#3BAE92" }}
          >
            Quero entrar na lista 🌿
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
