var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('resenas',
    { title: 'RESEÑAS',
    saludo: 'Bienvenidos',
    descripcionresenas: 'Espacio de divulgación sobre el trabajo de artistas, exposiciones y eventos donde se relacionen el arte y la educación.',
    imagenresenas: 'http://dreadom.com/home/wp-content/uploads/2017/02/Resen%CC%83as-300x169.jpg'

  });
});

module.exports = router;
