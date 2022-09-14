const app = require("express");

const router = app.Router();

router.get('/',
	(request, response) => {
		response.render('home');
		//response.send('go fuck your self');
	} 
	
);

module.exports = router;