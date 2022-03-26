export default function Detail(props){
    return(
        <article>
            <h2>{props.title}</h2>
            <h5>{props.contents}</h5>
        </article>
    )
}