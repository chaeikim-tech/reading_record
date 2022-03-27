export default function Header(props){
    const headerClick = (event) => {
        event.preventDefault();
        props.onChangeMode();
    };

    return(
        <header>
            <h1><a href="/" onClick={headerClick}>{props.title}</a></h1>
        </header>
    )
}