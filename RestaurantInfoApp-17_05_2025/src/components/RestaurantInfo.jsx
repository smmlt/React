import React from 'react';
import PropTypes from 'prop-types';

const RestaurantInfo = ({ name, address, rating, cuisine, image }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div style={{ display: 'inline-block', border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '400px' }}>
                <img
                    src={image}
                    alt={`Зображення ресторану ${name}`}
                    style={{ width: '100%', borderRadius: '8px' }}
                />
                <h2>{name}</h2>
                <p><strong>Адреса:</strong> {address}</p>
                <p><strong>Рейтинг:</strong> {rating}</p>
                <p><strong>Тип кухні:</strong> {cuisine}</p>
            </div>
        </div>
    );
};

RestaurantInfo.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    cuisine: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default RestaurantInfo;