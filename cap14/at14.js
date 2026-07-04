const nomeOriginal = document.getElementById('nomePerfil').textContent;
const cursoOriginal = document.getElementById('cursoPerfil').textContent;
const fotoOriginal = document.getElementById('fotoPerfil').src;

// Controle de Estatísticas
let contadorAcoes = 0;

function registrarAcao(descricaoAcao) {
    contadorAcoes++;
    document.getElementById('contadorAcoes').textContent = contadorAcoes;
    document.getElementById('ultimaAcao').textContent = descricaoAcao;
}

// Alterar Nome
document.getElementById('btnAlterarNome').addEventListener('click', () => {
    document.getElementById('nomePerfil').textContent = 'Maria Oliveira';
    registrarAcao('Alterou o Nome');
});

// Alterar Curso
document.getElementById('btnAlterarCurso').addEventListener('click', () => {
    document.getElementById('cursoPerfil').textContent = 'Curso: Análise e Desenvolvimento de Sistemas';
    registrarAcao('Alterou o Curso');
});

// Alterar Foto
document.getElementById('btnAlterarFoto').addEventListener('click', () => {
    // Certifique-se de ter uma imagem chamada 'perfil2.jpg' na pasta 'imagens'
    document.getElementById('fotoPerfil').src = 'imagens/perfil2.jpg';
    registrarAcao('Alterou a Foto');
});

// Destacar Perfil
document.getElementById('btnDestacarPerfil').addEventListener('click', () => {
    document.getElementById('perfil').classList.add('destaque');
    registrarAcao('Destacou o Perfil');
});

// Restaurar Perfil
document.getElementById('btnRestaurar').addEventListener('click', () => {
    document.getElementById('nomePerfil').textContent = nomeOriginal;
    document.getElementById('cursoPerfil').textContent = cursoOriginal;
    document.getElementById('fotoPerfil').src = fotoOriginal;
    document.getElementById('perfil').classList.remove('destaque');
    registrarAcao('Restaurou o Perfil');
});

// Alterar Tema da Página
document.getElementById('temaSelect').addEventListener('change', (event) => {
    const temaEscolhido = event.target.value;
    
    // Reseta as classes existentes
    document.body.className = '';
    
    // Adiciona o novo tema se não for o claro (padrão)
    if (temaEscolhido === 'escuro') {
        document.body.classList.add('tema-escuro');
    } else if (temaEscolhido === 'azul') {
        document.body.classList.add('tema-azul');
    }
    
    registrarAcao(`Alterou o Tema para ${temaEscolhido}`);
});

// Controle de Tamanho da Fonte
document.getElementById('fonteRange').addEventListener('input', (event) => {
    const novoTamanho = event.target.value;
    document.getElementById('biografiaPerfil').style.fontSize = novoTamanho + 'px';
    document.getElementById('valorFonte').textContent = novoTamanho + 'px';
});
// Registrando ação de fonte separadamente (apenas na mudança final para não floodar o contador enquanto arrasta)
document.getElementById('fonteRange').addEventListener('change', () => {
    registrarAcao('Alterou o Tamanho da Fonte');
});

// Exibir ou Ocultar Biografia
document.getElementById('mostrarBio').addEventListener('change', (event) => {
    const biografia = document.getElementById('biografiaPerfil');
    if (event.target.checked) {
        biografia.style.display = 'block';
        registrarAcao('Exibiu a Biografia');
    } else {
        biografia.style.display = 'none';
        registrarAcao('Ocultou a Biografia');
    }
});

// Atualizar Informações de Contato
document.getElementById('btnAtualizarContato').addEventListener('click', () => {
    const emailInformado = document.getElementById('emailInput').value;
    const telefoneInformado = document.getElementById('telefoneInput').value;

    document.getElementById('emailExibido').textContent = `E-mail: ${emailInformado || 'não informado'}`;
    document.getElementById('telefoneExibido').textContent = `Telefone: ${telefoneInformado || 'não informado'}`;
    
    registrarAcao('Atualizou o Contato');
});