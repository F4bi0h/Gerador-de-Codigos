function gerarcodigo() {
    document.getElementById('gerar-codigo').click(
      document.getElementById('campo-codigo').value = Math.round(Math.random() * 8579)
    )
  }