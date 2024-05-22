

const FrontPage = () => {


    const arrowMoveBot = () => {
        // Obtenemos la altura de la ventana
        const windowHeight = window.innerHeight;
        // Desplazamos la página hacia abajo la altura de la ventana
        window.scrollBy({ top: windowHeight, behavior: 'smooth' });
    }

    return (



        <section id="Home" className="index-490">
            <div className="div-text">
                <h1 className="title-index">
                    ADEPTUS LUDITORUM
                </h1>
                <p className="p-index">
                    ASOCIACIÓN LÚDICO-CULTURAL
                </p>
            </div>
            <button
                onClick={() => arrowMoveBot()}
                className="btn-arrow-up">
                <svg className="arrow-up" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 28 34" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5108 1.81193C15.4168 1.0726 14.776 0.500003 14.0003 0.500003C13.16 0.500003 12.478 1.172 12.478 2L12.478 28.368L2.85088 18.842L2.69539 18.7072C2.10005 18.2581 1.24433 18.3027 0.697307 18.838C0.10259 19.422 0.10056 20.372 0.693248 20.958L12.9225 33.058L13.0756 33.1914C13.3435 33.3944 13.6705 33.5 14.0003 33.5C14.1972 33.5 14.3941 33.462 14.5808 33.386C15.1512 33.154 15.5226 32.608 15.5226 32L15.5226 2L15.5108 1.81193ZM27.3027 18.8378C26.7059 18.2538 25.7418 18.2538 25.1491 18.8418L18.4043 25.5158L18.268 25.6699C17.814 26.2593 17.8613 27.1005 18.4083 27.6358C18.7067 27.9278 19.0944 28.0738 19.4821 28.0738C19.8738 28.0738 20.2635 27.9278 20.5619 27.6318L27.3068 20.9598L27.4425 20.8057C27.895 20.216 27.8478 19.3731 27.3027 18.8378Z" fill="#74C4F5" />
                </svg>
            </button>

        </section>
    )
}

export default FrontPage