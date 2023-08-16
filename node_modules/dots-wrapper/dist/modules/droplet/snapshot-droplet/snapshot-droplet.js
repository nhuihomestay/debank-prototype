"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snapshotDroplet = void 0;
const snapshotDroplet = ({ httpClient, }) => ({ droplet_id, name, }) => {
    const path = '/droplets';
    const type = 'snapshot';
    const body = { name, type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.snapshotDroplet = snapshotDroplet;
//# sourceMappingURL=snapshot-droplet.js.map