function NumbersTable(props) {

    const { limit } = props;
    const numbers = []
    for( let i = 1 ; i <= limit ; i++ ) {
        let evenClass = '';
        if(i % 2) evenClass = 'evenBox';
        numbers.push(<div key={i} className={ evenClass }>{i}</div>);
    }

    return(
        <div className="numbersTable">
            { numbers.map(num => num) }
        </div>
    )
}

export default NumbersTable;