"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shutdownDroplet = void 0;
const shutdownDroplet = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'shutdown';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.shutdownDroplet = shutdownDroplet;
//# sourceMappingURL=shutdown-droplet.js.map