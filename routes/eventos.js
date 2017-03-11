var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('eventos',
    { title: 'EVENTOS',
    saludo: 'Bienvenidos',
    descripcioneventos: 'Espacio para la divulgación de eventos que tengan un caracter pedagógico en el marco de diversas prácticas artísticas (talleres, exposiciones, conversatorios).',
    imageneventos: 'http://dreadom.com/home/wp-content/uploads/2017/02/EncuentroMaestrosArte-1-300x169.jpg'
  });
});

module.exports = router;
