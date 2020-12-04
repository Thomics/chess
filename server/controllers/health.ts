require('express')
	.Router()
	.get('/', (req: any, res: any) => {
		res.set('Content-Type', 'application/json');
		res.send(JSON.stringify({status: 'UP'}));
	});
