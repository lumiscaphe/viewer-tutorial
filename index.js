// Import stylesheets
import './style.css';

// Import Lumiscaphe Viewer
import { Viewer } from '@lumiscaphe/viewer';

// Write Javascript code!
const container = document.getElementById('viewer');
const server = 'https://wr-lumis3d.lumiscaphe.com';
const database = '4ce50892-0f6e-4be5-8ee3-282ef7924af0';

const viewer = new Viewer(container, { server });

viewer.setView({
    mode: 'image',
    camera: '/34AV',
});

viewer.setView({
    mode: 'objectvr',
    camera: '/Turntable',
    frames: 24,
    loop: true,
});

viewer.load({ database });
