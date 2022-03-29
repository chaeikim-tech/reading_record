export default function Nav(props){
    const lis =[];
    for(let i=0; i<props.topics.length; i++){
        let t = props.topics[i];
        const navClick = (event) => {
            event.preventDefault();
            props.onChangeMode(Number(t.id));
        };
        lis.push(
            <li key={t.id}>
                <a href={`/read/${t.id}`} onClick={navClick}>
                    {t.title}
                </a>
            </li>
        )
    }
    return(
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    )
}