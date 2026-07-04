# Laboratório - Validação de Formulários com HTML e JavaScript 📝

## 🎯 Objetivo
Desenvolver um formulário de cadastro completo utilizando HTML, CSS e JavaScript, implementando validações em tempo real e no envio do formulário. O projeto visa resolver a situação-problema de uma escola técnica, impedindo o envio de dados inválidos e fornecendo mensagens claras de erro para melhorar a experiência do usuário.

## Validações implementadas

| Campo | Regras |
| ----- | ------ |
| **Nome** | Obrigatório, mínimo de 3 caracteres |
| **E-mail** | Obrigatório, formato válido de e-mail |
| **Telefone** | Formato de máscara `(82) 99999-9999` |
| **Data de nascimento** | Idade mínima de 16 anos completos |
| **Curso** | Seleção de uma opção obrigatória |
| **Turno** | Apenas um turno obrigatório |
| **Áreas de interesse** | Mínimo de 2 opções selecionadas |
| **Senha** | Mínimo de 8 caracteres, contendo pelo menos 1 maiúscula e 1 número |
| **Confirmar senha** | Deve coincidir exatamente com a senha informada |
| **Mensagem** | Entre 50 e 500 caracteres |
| **Foto** | *Opcional*; Restrito aos formatos JPG/PNG, tamanho máximo de 2 MB |
| **Termos** | Aceite obrigatório (Checkbox) |

## 📁 Estrutura de Arquivos
A entrega segue rigorosamente a estrutura de diretórios solicitada:

```text
cap-15/
├── index.html       # Estrutura HTML do formulário
├── css/
│   └── style.css    # Estilização visual e feedback de validação
├── js/
│   ├── validacoes.js # Regras de validação de cada campo
│   ├── util.js       # Funções auxiliares (máscaras, cálculo de idade, localStorage)
│   └── app.js        # Integração do DOM, eventos em tempo real e envio
└── README.md        # Documentação do projeto