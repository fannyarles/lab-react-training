function IdCard(props) {

    const { firstName, lastName, gender, height, birth, picture } = props;

    return(
        <div className="card">
            <img src={ picture } alt={ `${firstName}-${lastName}` } />
            <div>
                <p><b>First name:</b> { firstName }</p>
                <p><b>Last name:</b> { lastName }</p>
                <p><b>Gender:</b> { gender }</p>
                <p><b>Height:</b> { height }</p>
                <p><b>Birth:</b> { birth.toLocaleDateString() }</p>
            </div>
        </div>
    );
}

export default IdCard;