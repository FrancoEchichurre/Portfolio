const API_URL = 'http://127.0.0.1:8000/api';

/**
 * Fetch all projects from the API
 * @returns {Promise<Array>} List of projects
 */
export async function fetchProjects() {
    try {
        const headers = { 'Content-Type': 'application/json' };
        const token = localStorage.getItem('api_token');
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_URL}/projects`, { headers });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();
        return projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

/**
 * Example function to render projects to a container
 * @param {string} containerId - ID of the DOM element to render into
 */
export async function renderProjects(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const projects = await fetchProjects();

    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image_url || 'img/placeholder.jpg'}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${Array.isArray(project.technologies)
            ? project.technologies.map(t => `<span>${t}</span>`).join('')
            : project.technologies}
            </div>
            ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ''}
        </div>
    `).join('');
}
