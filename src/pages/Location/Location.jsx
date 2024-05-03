import Map from "../../components/Map/Map"

const Location = () => {
    return (
        <div className="fondo">
            <div className="donde-estamos">
                <div className="where-we-are">¿Dónde estamos?</div>
                <div className="address">
                    Dirección:
                    <br />
                    C/ Santo Domingo Custodio, 33, 38108&nbsp;
                    <br className="br-display" />
                    La Laguna, Santa Cruz de Tenerife.
                </div>
                <Map />
            </div>
        </div>
    )
}

export default Location