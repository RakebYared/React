import { use } from "react";
import { useState } from "react";

function NoteTaking() {
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);
    const [i, setI] = useState(null);
    const handleAdd = () => {
        if (note) { 
            if (i !== null) {
                var newNotes = [...notes]
                newNotes[i] = note
                setNotes(newNotes)
                setI(null);
            }
            else {
                setNotes([...notes, note]);                
            }
            setNote(''); 
        }
    };

    const handledit = (index) => {
        setI(index)
        setNote(notes[index])
    };

    const handledelet = (index) => {
        var newNotes = [...notes];
        newNotes = newNotes.filter((_,i) => i !== index);
        setNotes(newNotes);
    };

    return (
        <>
            <div>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button> 
            </div>
            <div>
                <ul>
                    {notes.map((noteItem, index) => (
                        <li key={index}>{noteItem}
                        <div>
                            <button onClick={() => handledit(index)}>Edit</button>
                            <button onClick={() => handledelet(index)}>Delete</button>
                        </div>
                        </li>
                        
                    ))}
                </ul>
            </div>
        </>
    );
}

export default NoteTaking;