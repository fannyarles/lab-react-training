function DriverCard(props) {

    const { name, rating, img, car } = props;
    const ratingStars = '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))
    const divStyle = { backgroundImage: `url(${ img })` };

    return(
        <div className="driverCard">
            <div style={ divStyle } className='img'></div>
            <span>
                <span className="name">{ name }</span><br/>
                <span className="rating">{ ratingStars }</span><br/>
                { car.model } - { car.licensePlate }
            </span>
        </div>
    );

}

export default DriverCard;