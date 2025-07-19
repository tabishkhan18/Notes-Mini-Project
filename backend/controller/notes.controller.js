import Note from '../models/note.model.js';

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        await newNote.save(); // Convo with database
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ message: 'Error creating note', error });
    }
}

export const updateNote = async (req, res)=>{

    try {
        const {id} = req.params // ID from the url
        const {title , content} = req.body 
        const updateNote = await Note.findByIdAndUpdate(id, {title, content})
    } catch (error) {
        
    }
}