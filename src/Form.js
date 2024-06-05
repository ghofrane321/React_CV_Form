import React, { useState } from 'react';
import './form1.css';

const Formulaire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    address: '',
    titreducv: '',
    description: '',
    diplômes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      age: '',
      gender: '',
      address: '',
      titreducv: '',
      description: '',
      diplômes: ''
    });
  };

  return (
    <div id="full-container">
      <div id="form-container">
        <h1>📋 Formulaire</h1>
        <form id="dynamic-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="section-title name">👤 Nom</div>
            <label htmlFor="name">Nom:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <div className="section-title email">📧 Email</div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <div className="section-title age">🎂 Âge</div>
            <label htmlFor="age">Âge:</label>
            <select id="age" name="age" value={formData.age} onChange={handleChange} required>
              <option value="">Sélectionnez votre âge</option>
              {[...Array(83)].map((_, i) => (
                <option key={i} value={i + 18}>
                  {i + 18}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <div className="section-title gender">🚻 Genre</div>
            <div className="form-inline">
              <input type="radio" id="male" name="gender" value="male" onChange={handleChange} checked={formData.gender === 'male'} required />
              <label htmlFor="male">Homme</label>
            </div>
            <div className="form-inline">
              <input type="radio" id="female" name="gender" value="female" onChange={handleChange} checked={formData.gender === 'female'} required />
              <label htmlFor="female">Femme</label>
            </div>
            <div className="form-inline">
              <input type="radio" id="DWS" name="gender" value="DWS" onChange={handleChange} checked={formData.gender === 'DWS'} required />
              <label htmlFor="DWS">Je préfère ne pas dire</label>
            </div>
          </div>

          <div className="form-group">
            <div className="section-title address">🏠 Adresse</div>
            <label htmlFor="address">Adresse:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <div className="section-title cv">📄 Titre du CV</div>
            <label htmlFor="titreducv">Titre du CV:</label>
            <input type="text" id="titreducv" name="titreducv" value={formData.titreducv} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <div className="section-title description">📝 Description</div>
            <label htmlFor="description">Description de l'objectif professionnel:</label>
            <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} required pattern="^[a-zA-Z0-9\s]+$" title="Le titre ne doit pas contenir de caractères spéciaux." />
          </div>

          <div className="form-group">
            <div className="section-title diploma">🎓 Diplômes</div>
            <div className="form-inline">
              <input type="radio" id="licence" name="diplômes" value="licence" onChange={handleChange} checked={formData.diplômes === 'licence'} required />
              <label htmlFor="licence">Licence</label>
            </div>
            <div className="form-inline">
              <input type="radio" id="master" name="diplômes" value="master" onChange={handleChange} checked={formData.diplômes === 'master'} required />
              <label htmlFor="master">Master</label>
            </div>
            <div className="form-inline">
              <input type="radio" id="doctorat" name="diplômes" value="doctorat" onChange={handleChange} checked={formData.diplômes === 'doctorat'} required />
              <label htmlFor="doctorat">Doctorat</label>
            </div>
          </div>

          <button type="submit">Envoyer</button>
          <button type="button" onClick={handleReset}>Réinitialiser</button>
        </form>
      </div>
    </div>
  );
};


export default Formulaire;
