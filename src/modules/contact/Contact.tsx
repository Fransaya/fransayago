import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import { Modal } from "antd";

import { sendMail } from "../../services/sendMail/sendMailService";

import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

import { message } from "antd"; // ✅ ESTA ES LA QUE FALTA

export const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messageText, setMessage] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const [sending, setSending] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSending(true);

    if (email && subject && messageText) {
      try {
        const response = await sendMail(email, subject, messageText);

        setSending(false);

        if (response.request.status == 200) {
          setEmail("");
          setSubject("");
          setMessage("");

          showModal();
        }

        console.log("response", response);
      } catch (error) {
        console.error("Error al enviar email", error);
      }
    } else {
      errorSubmit();
    }
  };

  const errorSubmit = () => {
    messageApi.open({
      type: "error",
      content:
        "Faltan completar algunos campos. Revisá el formulario e intentá de nuevo.",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {contextHolder}

      <Modal
        title="Mensaje enviado"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Entendido"
        cancelButtonProps={{ style: { display: "none" } }}
        className="contact-modal"
      >
        <p>¡Gracias por tu mensaje!</p>
        <p>Tu email fue enviado correctamente y ya lo recibí.</p>
        <p>En breve me pondré en contacto con vos 🙂</p>
      </Modal>

      <h2 className="text-4xl font-bold mb-12 text-white text-center">
        Contacto
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-[#1f1f1f]/50 backdrop-blur-sm text-white p-8 rounded-2xl w-full max-w-xl flex flex-col gap-6 shadow-xl"
      >
        {/* Email */}
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="font-medium mb-2 text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white text-base focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="tu@email.com"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col w-full">
          <label htmlFor="subject" className="font-medium mb-2 text-gray-300">
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white text-base focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="¿En qué puedo ayudarte?"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col w-full">
          <label htmlFor="message" className="font-medium mb-2 text-gray-300">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            value={messageText}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white text-base focus:outline-none focus:border-blue-500 transition-colors resize-none"
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>

        {/* Botón Enviar */}
        {!sending ? (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:scale-105 transition-all w-[150px] self-center shadow-lg"
          >
            Enviar
          </button>
        ) : (
          <div className="flex justify-center w-full h-[30px]">
            <Flex align="center" gap="middle">
              <Spin indicator={<LoadingOutlined spin />} size="large" />
            </Flex>
          </div>
        )}

        <hr className="my-6 border border-gray-800" />

        {/* Descargar CV */}
        <a
          href="/FRANCISCO-SAYAGO-CV.pdf"
          download
          className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30 py-3 px-6 rounded-lg font-medium hover:scale-105 transition-all text-center w-fit mx-auto relative z-10"
        >
          <span className="text-white font-medium">Descargar CV</span>
        </a>

        {/* Redes */}
        <div className="mt-6 flex justify-around flex-wrap gap-4 text-sm text-gray-300 text-center">
          <a
            href="mailto:fransayasoft@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <FaEnvelope />
            <span>fransayasoft@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-sayago-503777260/"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
            <span>/francisco-saygo</span>
          </a>
          <a
            href="https://github.com/Fransaya"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <FaGithub />
            <span>/Fransaya</span>
          </a>
        </div>
      </form>
    </div>
  );
};
