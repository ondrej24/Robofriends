import React from 'react';

const Card = ({name, id, email}) => {
    return(
        <div className='bg-light-gray dib br4 pa3 ma2 grow'>
            <img alt = "robot" src = {`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
