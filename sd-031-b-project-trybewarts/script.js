const bntLogin = document.getElementById('login');
const Email = document.getElementById('email');
const senha = document.getElementById('senha');
const agree = document.getElementById('agreement');
const bntSub = document.getElementById('submit-btn');

// função

bntLogin.addEventListener('click', () => {
  if (Email.value === 'tryber@test.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agree.addEventListener('click', () => {
  if (agree === true) {
    bntSub.removeAttribute('disabled');
  }
});
