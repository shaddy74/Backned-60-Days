
export const authMiddleware = (req, res, next) => {
    if(req.session && req.session.user){
        return next();
    }
    res.json({message:"Unauthorized Please Login"})

}