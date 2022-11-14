const container = document.getElementById('viewer');
container.style.width = "960px";
container.style.height = "720px";

const viewer = new LumiscapheViewer.Viewer(container, {
    server: 'https://wr.coatifactory.com',
});

viewer.setView({ mode: 'image', camera: '/360', background: 'product' });
viewer.setEncoder({ format: 'jpeg', quality: '80' });
viewer.setParameters({ antialiasing: false, superSampling: 2 });

viewer.load({ database: 'e9005c40-60cf-4344-b4f2-65847923faee' });
