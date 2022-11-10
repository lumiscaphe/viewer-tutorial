const container = document.getElementById('viewer');

const viewer = new LumiscapheViewer.Viewer(container, {
    server: 'https://wr.coatifactory.com',
});

viewer.setView({ mode: 'image', camera: '/360' });

viewer.load({ database: 'e9005c40-60cf-4344-b4f2-65847923faee' });