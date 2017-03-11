var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('convocatorias',
    { title: 'CONVOCATORIAS',
    saludo: 'Bienvenidos',
    descripcionconvocatorias: 'Espacio para invitar a ser parte de proyectos artísticos colaborativos que involucren procesos pedagógicos en su desarrollo.',
    imagenconvocatorias: 'http://dreadom.com/home/wp-content/uploads/2017/02/Convocatorias-300x200.jpg',
    videoconvocatoriasteusaca: 'https://vimeo.com/204796271'
  });
});

module.exports = router;
