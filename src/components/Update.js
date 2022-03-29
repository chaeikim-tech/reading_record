import { useState } from 'react';

export default function Update(props) {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    const onSubmit = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
    };
    const titleChange = (event) =>{
        setTitle(event.target.value);
    };
    const bodyChange = (event) =>{
        setBody(event.target.value);
    };
    return(
        <article>
            <h2>Update</h2>
            <form onSubmit={onSubmit}>
                <p><input type="text" name="title" placeholder="title" value={title} onChange={titleChange} /></p>
                <p><textarea name="body" placeholder="contents" value={body} onChange={bodyChange} /></p>
                <p><input type="submit" value="Update" /></p>
            </form>
        </article>
    )
}