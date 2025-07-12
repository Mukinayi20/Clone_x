
import{ closeModal, openModal } from './config.js';

const btnSuivant = document.querySelector('#btnsuivant')
const btnSignup = document.querySelector('#btnSignup');
const btnLogin = document.querySelector('#btnLogin');
const formSingup = document.querySelector('#formSingup');
const formLogin = document.querySelector('#formLogin');
const formPassword = document.querySelector('#formPassword');
const fermer = document.querySelector('.fermer');
const fermerLogin = document.querySelector('.fermerLogin')


// gestion bouton de formulair de créatrion du compte x
openModal(btnSignup, formSingup);
closeModal(fermer, formSingup);

// getion boutton de connexion
openModal(btnLogin, formLogin);
closeModal(fermerLogin, formLogin);

// controle l'evebement suivant pendans le processus d'inscription
