import mensagens from "./Mensagens.js";

const DisciplinasValidator = {
  nome: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  curso: {
    required: mensagens.required,
    minLength: {
      value: 1,
      message: mensagens.minLength,
    },
    maxLength: {
      value: 10,
      message: mensagens.maxLength,
    },
  },
};

export default DisciplinasValidator;
