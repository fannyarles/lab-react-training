function Greetings(props) {

    const { lang, children } = props;
    
    let greeting;
    switch (lang) {
        case "fr":
            greeting = 'Bonjour'
            break;

        case "en":
            greeting = 'Hello'
            break;

        case "de":
            greeting = 'Hallo'
            break;

        case "es":
            greeting = 'Hola'
            break;
    
        default:
            break;
    }

    return (
        <div className="card">
            { `${greeting} ${children}` }
        </div>
    )

}

export default Greetings;