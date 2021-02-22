import React,{useState} from 'react'

export default function NewSongForm(props) {

    const [title,setTitle]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(title)
        props.addSong(title);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Song name:</label>
            <input type="text" value={title} required onChange={(e)=>setTitle(e.target.value)}/>
            <input type="submit" value="Add song"/>
        </form>
    )
}
