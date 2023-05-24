const HandleError500=(err, req, res) =>{
  console.error(err) ; 
  
    res.status(500).json({ error: 'Internal Server Error' });
 }
  
module.exports = HandleError500 ;

  