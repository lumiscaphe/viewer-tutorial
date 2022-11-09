const container = document.getElementById('viewer');

const config = {
    server: 'https://wr-lumis3d.lumiscaphe.com',
    api: 'v1',
    fit: 'cover',
    events: {
        onLoadStart: () => { },
        onLoadProgress: () => { },
        onLoadEnd: () => { },
        onLoadError: () => { },
        onInteraction: () => { },
        onVrcubeInteraction: () => { },
        onVrobjectInteraction: () => { },
    },
};

const viewer = new LumiscapheViewer.Viewer(container, config);

viewer.setView({ mode: 'image', camera: '/360' });

viewer.load({ database: '00476bf8-1356-45dd-8d41-960477d9fdd3' });