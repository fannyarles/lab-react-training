function Rating(props) {
    
    const { children } = props;
    const rating = '★'.repeat(children) + '☆'.repeat(5 - children)

    return(
        <div className="card">{ rating }</div>
    );

}

export default Rating;