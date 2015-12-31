var express = require('express');
var router = express.Router();
var inflection = require('inflection');

/* GET home page. */
router.get('/', function(req, res, next) {
	var word={};
  res.render('index', { title: '单词词尾工具' ,
   word: word});
});

router.post('/', function(req, res, next) {
	
	var text = req.body.word;
	console.log(text);

	var word={};
	word.pluralize = inflection.pluralize(text);
	word.singularize = inflection.singularize(text);
  word.fk = inflection.singularize(text)+'Id';
  word.camelize =inflection.camelize(text);
  word.camelizejs =inflection.camelize(text, true);
	word.underscore = inflection.underscore(text);
	word.belongsTo_get = 'get'+inflection.camelize(inflection.singularize(text));
	word.belongsTo_set = 
	  'set'+
	  inflection.camelize(inflection.singularize(text));

	word.belongsTo_add = 'add'+inflection.camelize(inflection.singularize(text));
	word.hasMany_get = 'get'+inflection.camelize(inflection.pluralize(text));
	word.hasMany_set = 'set'+inflection.camelize(inflection.pluralize(text));

	word.hasMany_add = 'add'+inflection.camelize(inflection.pluralize(text));

  res.render('index', { title: '单词词尾工具' ,
   word: word});
});
module.exports = router;
