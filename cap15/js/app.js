// app.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Restaurar dados ao carregar (Bônus)
    util.restaurarDadosFormulario();

    const form = document.getElementById('formInscricao');

    // Elementos do DOM
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const inputTelefone = document.getElementById('telefone');
    const inputSenha = document.getElementById('senha');
    const inputConfirmarSenha = document.getElementById('confirmarSenha');
    const inputMensagem = document.getElementById('mensagem');
    const inputFoto = document.getElementById('foto');
    const spanCharCount = document.getElementById('charCount');

    // --- Melhorias de UX em tempo real ---

    // Validação de Nome
    inputNome.addEventListener('input', (e) => {
        validarCampo(inputNome, document.getElementById('erroNome'), validador.nome(e.target.value), "O nome deve ter no mínimo 3 caracteres.");
        util.salvarDadosFormulario(); // Salva estado dinamicamente
    });

    // Validação de E-mail
    inputEmail.addEventListener('input', (e) => {
        validarCampo(inputEmail, document.getElementById('erroEmail'), validador.email(e.target.value), "Insira um e-mail válido.");
        util.salvarDadosFormulario();
    });

    // Máscara e Validação de Telefone
    inputTelefone.addEventListener('input', (e) => {
        e.target.value = util.mascaraTelefone(e.target.value);
        validarCampo(inputTelefone, document.getElementById('erroTelefone'), validador.telefone(e.target.value), "Formato esperado: (82) 99999-9999");
        util.salvarDadosFormulario();
    });

    // Validação de Senha
    inputSenha.addEventListener('input', (e) => {
        validarCampo(inputSenha, document.getElementById('erroSenha'), validador.senha(e.target.value), "A senha deve ter 8+ caracteres, 1 maiúscula e 1 número.");
        // Revalida a confirmação se a senha mudar
        if (inputConfirmarSenha.value) {
            validarCampo(inputConfirmarSenha, document.getElementById('erroConfirmarSenha'), validador.confirmarSenha(e.target.value, inputConfirmarSenha.value), "As senhas não coincidem.");
        }
    });

    // Validação de Confirmar Senha
    inputConfirmarSenha.addEventListener('input', (e) => {
        validarCampo(inputConfirmarSenha, document.getElementById('erroConfirmarSenha'), validador.confirmarSenha(inputSenha.value, e.target.value), "As senhas não coincidem.");
    });

    // Contador e Validação de Mensagem
    inputMensagem.addEventListener('input', (e) => {
        const tamanho = e.target.value.length;
        spanCharCount.textContent = tamanho;
        validarCampo(inputMensagem, document.getElementById('erroMensagem'), validador.mensagem(e.target.value), "A mensagem deve conter entre 50 e 500 caracteres.");
    });

    // Bônus: Mostrar/Esconder Senha
    const btnToggleSenha = document.getElementById('toggleSenha');
    const btnToggleConfSenha = document.getElementById('toggleConfirmarSenha');

    const toggleType = (input, btn) => {
        if (input.type === 'password') {
            input.type = 'text';
            btn.textContent = 'Ocultar';
        } else {
            input.type = 'password';
            btn.textContent = 'Mostrar';
        }
    };

    btnToggleSenha.addEventListener('click', () => toggleType(inputSenha, btnToggleSenha));
    btnToggleConfSenha.addEventListener('click', () => toggleType(inputConfirmarSenha, btnToggleConfSenha));

    // UX: Preview da Imagem
    inputFoto.addEventListener('change', function (e) {
        const file = this.files[0];
        const erroFoto = document.getElementById('erroFoto');
        const imgPreview = document.getElementById('previewFoto');

        if (file) {
            if (validador.foto(file)) {
                validarCampo(inputFoto, erroFoto, true, "");
                const reader = new FileReader();
                reader.onload = function (e) {
                    imgPreview.src = e.target.result;
                    imgPreview.style.display = 'block';
                }
                reader.readAsDataURL(file);
            } else {
                validarCampo(inputFoto, erroFoto, false, "Arquivo inválido! Use JPG/PNG, máximo 2MB.");
                imgPreview.style.display = 'none';
                this.value = ''; // Limpa o input
            }
        } else {
            imgPreview.style.display = 'none';
            erroFoto.classList.remove('ativo');
        }
    });

    // --- Submissão do Formulário ---
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento automático

        let formValido = true;

        // Executando as validações pontuais obrigatórias para submissão
        const valNome = validarCampo(inputNome, document.getElementById('erroNome'), validador.nome(inputNome.value), "O nome deve ter no mínimo 3 caracteres.");
        const valEmail = validarCampo(inputEmail, document.getElementById('erroEmail'), validador.email(inputEmail.value), "Insira um e-mail válido.");
        const valTel = validarCampo(inputTelefone, document.getElementById('erroTelefone'), validador.telefone(inputTelefone.value), "Formato esperado: (82) 99999-9999");

        // Data de Nascimento
        const inputData = document.getElementById('dataNascimento');
        const valIdade = validarCampo(inputData, document.getElementById('erroDataNascimento'), inputData.value && validador.idade(inputData.value), "O aluno deve possuir no mínimo 16 anos.");

        // Curso
        const inputCurso = document.getElementById('curso');
        const valCurso = validarCampo(inputCurso, document.getElementById('erroCurso'), inputCurso.value !== "", "Selecione um curso.");

        // Turno (Radio)
        const turnos = document.querySelectorAll('input[name="turno"]');
        let turnoSelecionado = Array.from(turnos).some(radio => radio.checked);
        const erroTurno = document.getElementById('erroTurno');
        if (!turnoSelecionado) { erroTurno.textContent = "Selecione um turno."; erroTurno.classList.add('ativo'); }
        else { erroTurno.classList.remove('ativo'); }

        // Interesses (Checkbox - min 2)
        const valInteresse = validador.interesses();
        const erroInteresse = document.getElementById('erroInteresse');
        if (!valInteresse) { erroInteresse.textContent = "Selecione ao menos 2 áreas."; erroInteresse.classList.add('ativo'); }
        else { erroInteresse.classList.remove('ativo'); }

        const valSenha = validarCampo(inputSenha, document.getElementById('erroSenha'), validador.senha(inputSenha.value), "Senha inválida.");
        const valConfSenha = validarCampo(inputConfirmarSenha, document.getElementById('erroConfirmarSenha'), validador.confirmarSenha(inputSenha.value, inputConfirmarSenha.value), "Senhas não conferem.");
        const valMsg = validarCampo(inputMensagem, document.getElementById('erroMensagem'), validador.mensagem(inputMensagem.value), "Mensagem inválida.");

        // Termos
        const chkTermos = document.getElementById('termos');
        const erroTermos = document.getElementById('erroTermos');
        if (!chkTermos.checked) { erroTermos.textContent = "Você deve aceitar os termos."; erroTermos.classList.add('ativo'); }
        else { erroTermos.classList.remove('ativo'); }

        // Agregando status de todas as validações
        formValido = valNome && valEmail && valTel && valIdade && valCurso && turnoSelecionado && valInteresse && valSenha && valConfSenha && valMsg && chkTermos.checked;

        if (formValido) {
            alert('Cadastro realizado com sucesso! (Animação de sucesso executada via Alert)');
            localStorage.removeItem('dadosInscricao'); // Limpa o rascunho
            form.reset();
            // Remove as marcações de validade visual das classes CSS
            const validos = document.querySelectorAll('.valido');
            validos.forEach(el => el.classList.remove('valido'));
            document.getElementById('charCount').textContent = '0';
            document.getElementById('previewFoto').style.display = 'none';
        } else {
            alert('Por favor, corrija os erros destacados no formulário antes de enviar.');
        }
    });
});