

export const Jumbotron = () => {
    return (
        <div className="div-jumbotron p-5 m-4 rounded-3"> 
            <div className="container-fluid py-5 text-start">
                <h1 className="display-6 fw-bold text-primary">¡Elige a tu primer Pokémon!</h1>
                <p className="col-md-8 fs-5 text-dark"> 
                    ¡Espera! No es una decisión fácil, ¿verdad? Este será tu compañero hasta que lo mates o te lo maten. 
                    Tendrás que cuidarlo, entrenarlo y, a algunos, pagarles el cambio de sexo,  ¡pero viviréis juntos muchísimas aventuras! (y curas).
                    Así que, toma un respiro, relájate y, sobre todo, ¡diviértete!
                </p>
                <button className="btn btn-primary btn-lg" 
                    style={{ 
                        color: "yellow", 
                        borderColor: "yellow" 
                    }} 
                    type="button">¿Ya tienes tu Pokémon? ¡Empieza tu aventura!</button>
            </div>
        </div>
    )
};

