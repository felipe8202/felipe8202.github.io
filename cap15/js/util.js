// util.js

// Funcionalidade Bônus: Salvar e Restaurar no LocalStorage
const util = {
    salvarDadosFormulario: () => {
        const dados = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            curso: document.getElementById('curso').value
        };
        localStorage.setItem('dadosInscricao', JSON.stringify(dados));
    },

    restaurarDadosFormulario: () => {
        const dadosSalvos = localStorage.getItem('dadosInscricao');
        if (dadosSalvos) {
            const dados = JSON.parse(dadosSalvos);
            if (dados.nome) document.getElementById('nome').value = dados.nome;
            if (dados.email) document.getElementById('email').value = dados.email;
            if (dados.telefone) document.getElementById('telefone').value = dados.telefone;
            if (dados.curso) document.getElementById('curso').value = dados.curso;
        }
    },

    // UX: Máscara para telefone (82) 99999-9999
    mascaraTelefone: (valor) => {
        valor = valor.replace(/\D/g, ""); // Remove tudo o que não é dígito
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses
        valor = valor.replace(/(\d)(\d{4})$/, "$1-$2"); // Coloca hífen
        return valor;
    },

    // Cálculo da Idade para validação
    calcularIdade: (dataNascimento) => {
        const dataNasc = new Date(dataNascimento);
        const hoje = new Date();
        let idade = hoje.getFullYear() - dataNasc.getFullYear();
        const m = hoje.getMonth() - dataNasc.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }
        return idade;
    }
};