import React from 'react';

const EventCard = ({ openModal, events }) => {
    const handleClick = () => {
        openModal('./modalExample.png');
    };

    return (
        <>

            {events.map((eachEvent, index) => (

                // TODO  va lo que generamos del texto que llega
                < div
                    key={index}
                    className="event-card" onClick={handleClick} >
                    <div className="image" style={{ backgroundImage: `url(${eachEvent.media_url})` }}></div>
                    <div className="date">aqui va el titulo</div>
                </div >
            ))
            }


        </>
    );
}

export default EventCard;