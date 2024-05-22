import React from 'react';

const EventCard = ({ openModal }) => {
    const handleClick = () => {
        openModal('./modalExample.png');
    };

    return (
        <>
            <div className="event-card" onClick={handleClick}>
                <div className="image"></div>
                <div className="date">9 de marzo</div>
            </div>
            <div className="event-card" onClick={handleClick}>
                <div className="image"></div>
                <div className="date">9 de marzo</div>
            </div>
            <div className="event-card" onClick={handleClick}>
                <div className="image"></div>
                <div className="date">9 de marzo</div>
            </div>

        </>
    );
}

export default EventCard;