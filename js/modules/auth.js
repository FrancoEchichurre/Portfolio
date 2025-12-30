/**
 * auth.js
 * Módulo para manejo de autenticación simulada con LocalStorage
 */

const Auth = {
    /**
     * Registra un nuevo usuario
     * @param {string} email 
     * @param {string} password 
     * @returns {object} Resultado del registro
     */
    register: (email, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        if (users.find(user => user.email === email)) {
            return { success: false, message: 'El usuario ya existe.' };
        }

        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        return { success: true, message: 'Usuario registrado con éxito.' };
    },

    /**
     * Inicia sesión
     * @param {string} email 
     * @param {string} password 
     * @returns {object} Resultado del login
     */
    login: (email, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return { success: true, message: 'Login exitoso.' };
        } else {
            return { success: false, message: 'Credenciales inválidas.' };
        }
    },

    /**
     * Cierra sesión
     */
    logout: () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html'; // Redirige al inicio
    },

    /**
     * Verifica si hay un usuario logueado
     * @returns {boolean}
     */
    isAuthenticated: () => {
        return !!localStorage.getItem('currentUser');
    },

    /**
     * Obtiene el usuario actual
     */
    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
};

export default Auth;
