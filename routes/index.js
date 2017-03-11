var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('SDA', { title: 'Tarea módulo 2 semana 1',
  saludo: 'arte + educación',
      texto1: 'Este espacio se dedica a la promoción y divulgación de proyectos pedagógicos, curatoriales y de investigación en, para y a través del arte, invitando a diversas instituciones educativas, museos, galerías, organizaciones y artistas para hacer aportes que favorezcan la producción de conocimiento y el trabajo colaborativo.',
      texto2: 'Las dinámicas del arte contemporáneo y su estrecha relación con la educación, la cual está en boga actualmente, abren nuevas posibilidades en la construcción de conocimiento y de comunidad a través del trabajo colaborativo e interdisciplinario, a partir de experiencias que llevan a nuevas preguntas y discusiones.',
        logo:'http://dreadom.com/home/wp-content/uploads/2017/02/cropped-Logo.jpg',
        linkeventos:'http://localhost:3000/eventos',
        linkconvocatorias:'http://localhost:3000/convocatorias',
        linkarticulos:'http://localhost:3000/articulos',
        linkresenas:'http://localhost:3000/resenas'

       });
});

module.exports = router;
