// validacoes.js

const validador = {
    nome: (valor) => valor.trim().length >= 3,
    email: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
    telefone: (valor) => /^\(\d{2}\) \d{5}-\d{4}$/.test(valor), // Formato (82) 99999-9999
    idade: (valorData) => util.calcularIdade(valorData) >= 16,
    senha: (valor) => {
        // Mínimo 8 chars, 1 maiúscula, 1 número
        const hasMinLen = valor.length >= 8;
        const hasUpper = /[A-Z]/.test(valor);
        const hasNumber = /[0-9]/.test(valor);
        return hasMinLen && hasUpper && hasNumber;
    },
    confirmarSenha: (senha, confirmar) => senha === confirmar && confirmar !== '',
    mensagem: (valor) => valor.length >= 50 && valor.length <= 500,
    interesses: () => {
        const selecionados = document.querySelectorAll('input[name="interesse"]:checked');
        return selecionados.length >= 2;
    },
    foto: (arquivo) => {
        if (!arquivo) return true; // Foto é opcional
        const tiposPermitidos = ['image/jpeg', 'image/png'];
        const tamanhoMaximo = 2 * 1024 * 1024; // 2MB em bytes
        return tiposPermitidos.includes(arquivo.type) && arquivo.size <= tamanhoMaximo;
    }
};

// Função genérica para exibir ou ocultar mensagens de erro e estilizar os inputs
function validarCampo(elementoInput, elementoErro, condicaoValida, mensagemErro) {
    if (condicaoValida) {
        elementoInput.classList.remove('invalido');
        elementoInput.classList.add('valido');
        elementoErro.classList.remove('ativo');
        elementoErro.textContent = '';
        return true;
    } else {
        elementoInput.classList.remove('valido');
        elementoInput.classList.add('invalido');
        elementoErro.classList.add('ativo');
        elementoErro.textContent = mensagemErro;
        return false;
    }
}