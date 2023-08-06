var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {

  fs.readFile('glossary.json', (err, data) => {

    if (err) throw err;

    let glossary = JSON.parse(data);

    res.render('index', { title: 'SIT722 DevOps Glossary', glossary: glossary });
    
  });
});

module.exports = router;
