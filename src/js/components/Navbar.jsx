
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-warning ">
            <div className="container-fluid d-flex">
                <a className="navbar-brand text-primary fw-bold" href="">Pokémon</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active --bs-warning-text-emphasis" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link --bs-warning-text-emphasis" href="#">Mochila</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link --bs-warning-text-emphasis" href="#">Mapa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link --bs-warning-text-emphasis" href="#">Combate</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
)}

