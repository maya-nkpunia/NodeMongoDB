const Item = require('./models');


const getItems = async (req, res) => {
    try{
        const items = Item.find();
        res.status(200).json(items);
    }catch(error){
        res.status(500).json({error: error.msg})
    }
};


const getItem = async (req, res) => {
    try{
        const { id } = req.params;
        const item = await Item.findById(id);
        if(!item){
            return res.status(404).json({error: 'Item not found'});
        }
        res.status(200).json(item);
    }catch(error){
        res.status(500).json({error: error.msg});
    }
};


const createItem = async (req, res) => {
    try{
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json({error: error.msg});
    }catch(error){
        res.status(500).json({error: error.msg});
    }
};


const updateItem = async (req, res) => {
    try{
        
    }catch(error){
        res.status(500).json({error: error.msg});
    }
};