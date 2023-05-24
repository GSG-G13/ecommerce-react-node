const HandleError404 = (err, req, res, next) => {
  if (err.statusCode === 400) {
    res.status(400).json({ error: 'Erorr 404' });
  } 
  else {
    next(err);
 }
 }
module.exports = HandleError404; 
