import './style.css';

const app = document.createElement('div');
app.id = 'app';

const title = document.createElement('h1');
title.textContent = 'Country Search';

app.append(title);

document.body.append(app);
