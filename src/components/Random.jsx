function Random(props) {

    const { min, max } = props;
    const randomValue = Math.floor(Math.random() * ( max - min + 1) + min);

    return(
        <div className="card">
            Random value between { min } and { max } => { randomValue }.
        </div>
    );
}

export default Random;