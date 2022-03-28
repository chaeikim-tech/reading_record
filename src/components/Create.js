export default function Create(props){
    const onSubmit=(event)=>{
        event.preventDefault();
        console.log(event);
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
    }
    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={onSubmit}>
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p><textarea name="body" placeholder="body"></textarea></p>
                <p><input type="submit" value="Create"></input></p>
            </form>
        </article>
    )
}