var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('articulos',
    { title: 'ARTÍCULOS',
    saludo: 'Bienvenidos',
    descripcionarticulos: 'Espacio para compartir textos que aborden la relación entre el arte y la educación.',
    imagenarticulos: 'http://dreadom.com/home/wp-content/uploads/2017/02/Articulos-300x199.jpg'
  });
});

module.exports = router;
