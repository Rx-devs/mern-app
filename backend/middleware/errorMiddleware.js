const errorHandler = (err, req,res,next)=>{
	const statusCode = res.statusCode || 500;
	res.status(statusCode);
	/* console.log('Error handler called');
	const status = err.status || 400;
	res.status(status).send(err.message); */
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack

	});
}

module.exports = {
	errorHandler
}