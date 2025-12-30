/**
 * main.js
 * Punto de entrada principal
 */

import Auth from './modules/auth.js';
import Validation from './modules/validation.js';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    console.log('App iniciada');
    checkAuthStatus();
    setupNavigation();

    // Detectar página actual para ejecutar scripts específicos
    const path = window.location.pathname;

    if (path.includes('contact.html')) {
        initContactForm();
    } else if (path.includes('login.html')) {
        initLoginForm();
    } else if (path.includes('register.html')) {
        initRegisterForm();
    }
}

function checkAuthStatus() {
    const user = Auth.getCurrentUser();
    const navList = document.querySelector('.header__list');

    if (user && navList) {
        // Ejemplo simple: Cambiar "Login" por "Logout" o mostrar usuario
        // Esto requeriría identificar el elemento de login en el DOM específicamente
        console.log(`Usuario logueado: ${user.email}`);
    }
}

function setupNavigation() {
    // Lógica para menú móvil si se implementa
}

function initContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = form.querySelector('[name="email"]').value;
        const message = form.querySelector('[name="message"]').value;

        if (!Validation.validateEmail(email)) {
            alert('Email inválido');
            return;
        }

        if (message.length < 5) {
            alert('El mensaje es muy corto');
            return;
        }

        alert('Mensaje enviado (simulado)');
        form.reset();
    });
}

function initLoginForm() {
    const form = document.querySelector('#login-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('[name="email"]').value;
        const password = form.querySelector('[name="password"]').value;

        const result = Auth.login(email, password);
        if (result.success) {
            window.location.href = '../index.html'; // Ajustar ruta
        } else {
            alert(result.message);
        }
    });
}

function initRegisterForm() {
    const form = document.querySelector('#register-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('[name="email"]').value;
        const password = form.querySelector('[name="password"]').value;

        if (!Validation.validateEmail(email)) {
            alert('Email inválido');
            return;
        }

        if (!Validation.validatePassword(password)) {
            alert('La contraseña debe tener al menos 8 caracteres, una letra y un número.');
            return;
        }

        const result = Auth.register(email, password);
        alert(result.message);
        if (result.success) {
            window.location.href = 'login.html';
        }
    });
}
