import React from 'react';
import './cv1.css';


const Header = () => (
  <header>
    <h1>CV</h1>
  </header>
);

const Profile = () => (
  <section>
    <div className="photo">
      <img src="/images/pic1.jpg" alt="Ma photo de profil" />
    </div>
    <div className="prez">
      <h2>Profil</h2>
      <p>
        En plein cœur de ma deuxième année en génie réseau et télécom à l'École Mohammadia d'Ingénieurs,
        je m'éclate à jongler entre les câbles et les bouquins. Grande amatrice de littérature, je trouve
        un équilibre entre la rigueur technique et la créativité des mots. Ma motivation ? Apporter ma touche
        personnelle, pleine d'enthousiasme, à des projets innovants. Hâte de mettre ma passion et mon énergie
        à contribution dans votre équipe !
      </p>
      <a href="#" download>Télécharger mon CV</a>
    </div>
  </section>
);

const Contact = () => (
  <section>
    <h2>Informations de contact</h2>
    <div className="contact-flex">
      <p>Nom :</p>
      <p>Ghofrane DIYEN</p>
    </div>
    <div className="contact-flex">
      <p>Adresse :</p>
      <p>Quelque part</p>
    </div>
    <div className="contact-flex">
      <p>Téléphone :</p>
      <p>0650571885</p>
    </div>
    <div className="contact-flex">
      <p>Mail :</p>
      <p><a href="mailto:ghofranediyen8@gmail.com">ghofranediyen8@gmail.com</a></p>
    </div>
    <div className="contact-flex">
      <p>Permis :</p>
      <p>B</p>
    </div>
    <div className="social">
      <a href="https://www.linkedin.com/in/diyen-ghofrane-87627b15a">
        <img src="/images/logolinkedin.png" alt="Logo Lk" />
      </a>
    </div>
  </section>
);

const Experience = () => (
  <section>
    <h2>Expériences professionnelles</h2>
    <div className="exp">
      <div className="exp-info">
        <h3>Stage d'observation</h3>
        <h4>ONDA-Oujda</h4>
        <h4>juillet 2023 - août 2023</h4>
      </div>
      <div className="exp-logo">
        <a href="https://www.onda.ma">
          <img src="/images/onda.jpg" alt="Logo de ONDA" />
        </a>
      </div>
      <div className="exp-desc">
        <p>Déploiement de la fibre optique</p>
      </div>
    </div>
  </section>
);

const Education = () => (
  <section>
    <h2>Formation</h2>
    <div className="exp">
      <div className="exp-logo">
        <a href="https://emi.ac.ma">
          <img src="/images/EMI.png" alt="Logo EMI" />
        </a>
      </div>
      <div className="exp-info">
        <h3>École Mohammadia d'Ingénieurs</h3>
        <h4>2022 - 2025</h4>
        <h4>
          <strong> Filière:</strong> Génie électrique | <strong> Option:</strong> Réseau télécom
        </h4>
      </div>
      <div className="exp-desc">
        <p>
          Avec une expertise étendue dans les protocoles de routage et de commutation, associée à une utilisation
          habile d'outils de pointe, je me spécialise dans l'amélioration de l'infrastructure réseau pour des
          performances optimales.
        </p>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section>
    <h2>Compétences</h2>
    <h3 className="h3gauche">Professionnelles</h3>
    <div className="comp">
      <p>HTML / CSS</p>
      <div className="conteneur-barre"><span className="barre c100"></span></div>
    </div>
    <div className="comp">
      <p>PHP / MySQL</p>
      <div className="conteneur-barre"><span className="barre c95"></span></div>
    </div>
    <div className="comp">
      <p>Matlab | Simulink</p>
      <div className="conteneur-barre"><span className="barre c90"></span></div>
    </div>
    <div className="comp">
      <p>Cisco</p>
      <div className="conteneur-barre"><span className="barre c100"></span></div>
    </div>
    <h3 className="h3gauche">Personnelles</h3>
    <div className="comp2">
      <p>Créativité</p>
      <p>90%</p>
      <div className="conteneur-barre2"><span className="barre c90"></span></div>
    </div>
    <div className="comp2">
      <p>Adaptation</p>
      <p>85%</p>
      <div className="conteneur-barre2"><span className="barre c85"></span></div>
    </div>
    <div className="comp2">
      <p>Autonomie</p>
      <p>95%</p>
      <div className="conteneur-barre2"><span className="barre c95"></span></div>
    </div>
  </section>
);

const Interests = () => (
  <section>
    <h2>Centres d'intérêt</h2>
    <figure className="interet">
      <a href="https://www.chess.com.">
        <img src="/images/chess.jpg" alt="échecs" />
      </a>
      <figcaption>échecs</figcaption>
    </figure>
    <figure className="interet">
      <img src="/images/badminton.jpg" alt="Badminton" />
      <figcaption>Badminton</figcaption>
    </figure>
    <figure className="interet">
      <img src="/images/book.jpg" alt="Littérature" />
      <figcaption>Littérature</figcaption>
    </figure>
  </section>
);

const Footer = () => (
  <footer>
    <p>Copyright last edited</p>
  </footer>
);

const App = () => (
  <div className="App">
    <Header />
    <Profile />
    <Contact />
    <Experience />
    <Education />
    <Skills />
    <Interests />
    <Footer />
  </div>
);

export default App;
