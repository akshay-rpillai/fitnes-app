// Use the local API during development and Render after deployment.
const localApiHosts = ['localhost', '127.0.0.1'];
const isLocalApiSession = localApiHosts.includes(window.location.hostname);
window.VAH_API_BASE = isLocalApiSession
	? (window.location.port === '3000' ? `${window.location.origin}/api` : 'http://localhost:3000/api')
	: 'https://fitnes-app-8isi.onrender.com/api';
