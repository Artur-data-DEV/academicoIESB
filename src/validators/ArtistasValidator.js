import mensagens from "./Mensagens.js";

const DisciplinasValidator = {
  nome: {
    required: mensagens.required,
    maxLength: { value: 40, message: mensagens.maxLength },
  },
  cursoId: {
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
