var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Lucía Contreras')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Frontend JR')
  .pauseFor(1000)
  .start();


let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

typewriterFrase
  .pauseFor(2500)
  .typeString('"La ciencia no tiene frontera porque el conocimiento pertenece a la humanidad y es la antorcha que ilumina el mundo".')
  .pauseFor(300)
  .deleteAll()
  .start();