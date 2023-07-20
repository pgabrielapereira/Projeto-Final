const psiModel = require("../models/psiModels");

const findAllPsis = async (req, res) => {
try {
    const allPsis = await psiModel.find();
    res.status(200).json(allPsis);
} catch (error) {
    console.log(error)
    res.status(500).json({message: error.message})
}
}
const findPsiById = async (req, res) => {
    try {
        const findPsi = await psiModel.findById(req.params.id);
        res.status(200).json(findPsi);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const findPsiByLocation = async (req, res) => {
    try {
    const {bairro} = req.query 
      const profissionais = await psiModel.find({bairro: bairro});
  
      res.status(200).json(profissionais);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
  
  


const addNewPsi = async (req, res) => {
    try {
        const {nome, email, telefone, cidade, estado, atendimento, bairro}= req.body

            const newPsi = new psiModel({nome, email, telefone, cidade, estado, atendimento, bairro})
                const savedPsi = await newPsi.save()
                res.status(201).json({message:"Profissional cadastrado", savedPsi })
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}
const updatePsi = async (req, res) => {
try {
    const {nome, email, telefone, cidade, estado, atendimento, bairro} = req.body
    const updatePsi = await psiModel.findByIdAndUpdate(
        req.params.id, {nome, email, telefone, cidade, estado, atendimento, bairro})
        res.status (200).json({message: "Profissional atualizado!", updatePsi})

} catch (error) {
    console.error(error)
    res.status(500).json({message: "Não foi possivel atualizar"})
}
}

const deletePsi = async (req, res) => {
    try {
        const {id} = req.params
        const deletedPsi = await psiModel.findByIdAndDelete(id)
        const message = `Profissional ${deletedPsi.nome} foi deletad(a/e/o) com sucesso`
        res.status(200).json({message})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    findAllPsis,
    findPsiById,
    findPsiByLocation,
    addNewPsi,
    updatePsi,
    deletePsi
}