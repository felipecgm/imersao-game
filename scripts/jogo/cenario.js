class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
  }
  
  exibe() {
  //atributos width e height trabalham com o tamanho proporcional da tela
  //Importante hierarquia das imagens.
  image(imagemCenario, this.x1, 0, width, height);
  image(imagemCenario, this.x2, 0, width, height);
  }
  
  move() {
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;
    
    if (this.x1 < -width) {
      this.x1 = width;
    }    
    if (this.x2 < -width) {
      this.x2 = width;
    }
  }
}
