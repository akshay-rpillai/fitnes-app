# Deployment

## 1. Deploy the backend to Render

1. Push this project to GitHub.
2. In Render, choose **New > Blueprint** and select the repository.
3. Render will use `render.yaml` to run `node server.js`.
4. Copy the backend URL, for example `https://vah-health-api.onrender.com`.

The SQLite database is stored on Render's persistent disk at `/var/data/vah-health.db`. Render persistent disks require a paid service plan.

## 2. Connect the Netlify frontend

Before deploying to Netlify, edit `api-config.js`:

```js
window.VAH_API_BASE = 'https://YOUR-RENDER-URL.onrender.com/api';
```

Then deploy the repository to Netlify. Netlify uses `netlify.toml` and serves `main.html` at `/`.

## 3. Test from another device

Open the Netlify URL on the other device, create an account, and add activity. The data is sent to the Render API and saved in its SQLite database. Open the Render service shell or download the persistent database to inspect it.

Do not use `localhost` in `api-config.js` for production.
