/**
 * validation.js
 * Módulo para validaciones de formularios con Expresiones Regulares
 */

const Validation = {
    regex: {
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // Mínimo 8 caracteres, al menos 1 letra y 1 número
        text: /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{2,50}$/ // Solo letras y espacios, 2-50 chars
    },

    /**
     * Valida un email
     * @param {string} email 
     * @returns {boolean}
     */
    validateEmail: (email) => {
        return Validation.regex.email.test(email);
    },

    /**
     * Valida una contraseña simple
     * @param {string} password 
     * @returns {boolean}
     */
    validatePassword: (password) => {
        return Validation.regex.password.test(password);
    },

    /**
     * Valida texto genérico (nombre, asunto)
     * @param {string} text 
     * @returns {boolean}
     */
    validateText: (text) => {
        return Validation.regex.text.test(text);
    }
};

export default Validation;
