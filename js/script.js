class Informacoes {
  constructor(name, email, senhaTipo) {
    this.name = name;
    this.email = email;
    this.senhaTipo = senhaTipo;
  }

}

function gerarSenha() {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let senhaTipo = document.getElementById('tipo');

  let infors = new Informacoes(
    name.value,
    email.value,
    senhaTipo.value
  );

  switch (infors.senhaTipo) {
    case '1': infors.senhaTipo = 'Email';
      break;
    case '2': infors.senhaTipo = 'Desktop';
      break;
    case '3': infors.senhaTipo = 'Cartão';
      break;
  }

  if(name.value !== '' && email.value !== '' && senhaTipo.value !== '') {
    console.log(infors);
  } else {
    alert('Algo deu errado! Verifique se todos os campos foram preenchidos.');
  }

}





/*function gerarcodigo() {
    document.getElementById('gerar-codigo').click(
      document.getElementById('campo-codigo').value = Math.round(Math.random() * 8579)
    )
}*/