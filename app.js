import { Viewer } from './lib/Viewer';

const container = document.getElementById("viewer-content");
const form = document.getElementById('viewer-form');

const server = 'https://wr.coatifactory.com';
const databaseId = 'e9005c40-60cf-4344-b4f2-65847923faee';

Viewer.setServer(server);
Viewer.setDatabaseId(databaseId);
Viewer.setContainer(container);
Viewer.setForm(form);
