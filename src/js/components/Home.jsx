import React from "react";
import  {Navbar} from "./Navbar";
import {Jumbotron} from "./Jumbotron";
import {Card} from "./Card"; 
import {Footer} from "./Footer";

const Home = () => {
	return (
		<React.Fragment> 
			<Navbar />
		
			<div className="container">
				<Jumbotron/>
				
				<section className= "row justify-content-center gap-4">
					<Card image= "src/img/Bulbasaur.png" tittle="Bulbasaur" text="El Pokémon que ama las plantas, ¡y a ti también! Bulbasaur es el compañero perfecto para el entrenador que quiere empezar fuerte. Es tierno, amigable, y siempre está listo para lanzar un par de líneas de veneno." button="¡prepárate para ver cómo crece en una poderosa Venusaur!"/>
					<Card image= "src/img/charmander.jpg" tittle="Charmander" text="Para los amantes de la acción y la aventura, Charmander es el fuego que enciende tu pasión. Tiene mucha energía y será tu mejor aliado en cada batalla. Si quieres ver a un Charizard de cerca sin quemarte las cejas."  button= " ¡Elige a Charmander, porque me sale del jigo!"/>
					<Card image= "src/img/squirtle.jpg" tittle="Squirtle" text= "Si prefieres mantener las cosas frescas (literalmente), Squirtle es tu mejor amigo. Es ágil, divertido, y viene con gafas incluidas. Serás el más chulo de tu clase, (y sin fumar)." button="¡Elige a Blastoise, la única tortuga que no huele!"/>
					<Card image= "src/img/pikachu.webp" tittle="Pikachu" text="¿Te echo un cable? Pikachu no solo es adorable, ¡es leal y con un poder increíble! Con su energía y su actitud optimista, Pikachu será tu aliado perfecto en esta aventura. Y además, tiene onlyfans" button="¡Con Pikachu a tu lado, la victoria está asegurada!"/>
				</section>
			</div>
		
			<Footer/>
		</React.Fragment>
	);
};

export default Home;