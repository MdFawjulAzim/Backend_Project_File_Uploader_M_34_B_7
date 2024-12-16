export const fileUpload = (req,res)=>{
    try{
        if(!req.files){
            return res.status(400).json({message:"No files uploaded"});
        }
        res.status(200).json({message:"Files uploaded successfully", files:req.files});
    }catch(e){
        res.status(500).json({error:e.message});
    }
}