import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Importer le fichier CSS

const Home = () => {
    const navigate = useNavigate();

    const navigateToCV = () => {
        navigate('/CV');
    };

    const navigateToForm = () => {
        navigate('/Form');
    };

    return (
        <div className="home-container">
            <h1>Bienvenue sur mon site de CV</h1>
            <p>Ce site vous permet de consulter mon CV professionnel et de remplir un formulaire pour créer votre propre CV.</p>
            <div className="button-container">
                <button className="primary-button" onClick={navigateToCV}>Voir le CV</button>
                <button className="secondary-button" onClick={navigateToForm}>Remplir le CV</button>
            </div>
        </div>
    );
};

export default Home;
