import mensagens from './Mensagens.js'

const AlunoValidator = {
    nome: {
        required: mensagens.required,
        maxLength: { value: 50, message: mensagens.maxLength},
    },
    cpf: {
        required: "Este campo é obrigatório!",
        minLength: { value: 14, message: "Preencha um CPF válido! - Ex.: 999.999.999-99" },
        maxLength: { value: 14, message: "Preencha um CPF válido! - Ex.: 999.999.999-99"},
    },
    email: {
        required: "Este campo é obrigatório!",
        maxLength: { value: 60, message: "Quantidade máxima de caracteres ultrapassada!" },
    },
    matricula: {
        required: "Este campo é obrigatório!",
        minLength: { value: 10, message: "Insira um numero válido de 10 digitos, conforme sua matricula! - Ex.: 2014XXXXXX" },
        maxLength: { value: 10, message: "Insira um numero válido de 10 digitos, conforme sua matricula! - Ex.: 2014XXXXXX" },
        // min (OUTRAS OPÇÕES DE VALIDAÇÃO)
        // max (OUTRAS OPÇÕES DE VALIDAÇÃO)
    },
    telefone:{
        minLength: { value: 11, message: "Insira um numero válido! Ex.: +55 (61) 99999-9999" },
        maxLength: { value: 18, message: "Insira um numero válido! Ex.: +55 (61) 99999-9999" },
    }
};

export default AlunoValidator;
