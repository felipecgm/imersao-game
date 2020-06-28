let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}


//Funciona uma vez antes do jogo começar
function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(40);
  somDoJogo.loop();
}

//Animação, desenho, passa nessa função que funciona repetidamente 
function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}

