import { Viewer } from './lib/Viewer';

Viewer.server = 'https://wr.coatifactory.com';
Viewer.databaseId = 'e9005c40-60cf-4344-b4f2-65847923faee';
Viewer.container = document.getElementById("viewer-content");
Viewer.form = document.getElementById('viewer-form');

Viewer.addEventsOnForm();
Viewer.setViewerImageURL()