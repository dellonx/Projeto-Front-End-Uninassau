// Código Cabeçalho Menu 
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// 
// Seleciona os elementos
// Seleciona todos os botões e textos
const botoes = document.querySelectorAll('.mostrarTexto'); // Seleciona todos os botões
const textos = document.querySelectorAll('.texto'); // Seleciona todos os textos

// Adiciona o evento de clique a cada botão
botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        const texto = textos[index]; // Seleciona o texto correspondente ao botão
        if (texto.style.display === 'none') {
            texto.style.display = 'block'; // Mostra o texto
            botao.textContent = 'Ocultar texto'; // Altera o texto do botão
        } else {
            texto.style.display = 'none'; // Oculta o texto
            botao.textContent = 'Clique aqui'; // Restaura o texto do botão
        }
    });
});

//


// JavaScript Galeria

function toggleFavorite(button) {
    // Alternar o estado de favoritado
    button.classList.toggle("favorited");
  
    // Adicionar a classe de animação
    button.classList.add("animate");
  
    // Remover a classe de animação após a conclusão
    setTimeout(() => {
      button.classList.remove("animate");
    }, 500); // Duração da animação em milissegundos (0.5s)
  }


// Seleciona o formulário e os campos necessários
const form = document.getElementById('form-cadastro');
const inputs = form.querySelectorAll('input[required]');

// Função para exibir mensagens de erro
function showError(input, message) {
    const formContent = input.parentElement; // Seleciona o container do campo
    formContent.classList.add('error'); // Adiciona a classe de erro
    const errorMessage = formContent.querySelector('.error-message');
    errorMessage.textContent = message; // Define a mensagem de erro
}

// Função para limpar mensagens de erro
function clearError(input) {
    const formContent = input.parentElement;
    formContent.classList.remove('error'); // Remove a classe de erro
    const errorMessage = formContent.querySelector('.error-message');
    errorMessage.textContent = ''; // Limpa a mensagem de erro
}

// Validação em tempo real
inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.validity.valid) {
            clearError(input); // Limpa erro se o campo estiver válido
        } else if (input.validity.valueMissing) {
            showError(input, 'Este campo é obrigatório.');
        } else if (input.type === 'email' && input.validity.typeMismatch) {
            showError(input, 'Por favor, insira um e-mail válido.');
        }
    });
});

// Validação ao enviar o formulário
form.addEventListener('submit', (event) => {
    let isValid = true;

    inputs.forEach(input => {
        if (!input.validity.valid) {
            isValid = false;
            if (input.validity.valueMissing) {
                showError(input, 'Este campo é obrigatório.');
            } else if (input.type === 'email' && input.validity.typeMismatch) {
                showError(input, 'Por favor, insira um e-mail válido.');
            }
        }
    });

    if (!isValid) {
        event.preventDefault(); // Impede o envio do formulário
        alert('Por favor, corrija os erros antes de enviar.');
    }
});


// Linguagens

// Mostrar/Ocultar Senha 
const campoSenha = document.querySelector("#password"); // Ajustado para corresponder ao ID no HTML
const botaoMostrarSenha = document.querySelector("#botaoMostrarSenha");
const legenda = document.querySelector(".legenda");

botaoMostrarSenha.addEventListener("click", function () {
    const estadoAtualDoCampoDeSenha = campoSenha.getAttribute("type") === "password" ? "text" : "password";

    campoSenha.setAttribute("type", estadoAtualDoCampoDeSenha);

    legenda.innerHTML = estadoAtualDoCampoDeSenha === "password" ? "Mostrar Senha" : "Ocultar Senha";
});