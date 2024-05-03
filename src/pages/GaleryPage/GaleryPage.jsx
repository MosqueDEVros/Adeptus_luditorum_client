import CarrouselGalery from "../../components/Galery/CarrouselGalery"

export const GaleryPage = () => {
    return (
        <section className="bg-galery">
            <div className="bg-opacity-blue">

                <div className="flex-galery-position">
                    <h1>Galería</h1>
                    <div className="rectangle-504">
                    </div>
                    <CarrouselGalery />
                </div>
            </div>

        </section>
    )
}
