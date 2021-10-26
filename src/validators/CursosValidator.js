import mensagens from "./Mensagens.js";

const CursosValidator = {
  nome: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  duracao: {
    minLength: { value: 1, message: mensagens.minLength },
    maxLength: { value: 11, message: mensagens.maxLength },
  },
  modalidade: {
    required: mensagens.required,
    maxLength: {
      value: 1,
      message: mensagens.maxLength,
    },
  },
};

export default CursosValidator;
