"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreDroplet = void 0;
const restoreDroplet = ({ httpClient, }) => ({ droplet_id, image, }) => {
    const path = '/droplets';
    const type = 'restore';
    const body = { image, type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.restoreDroplet = restoreDroplet;
//# sourceMappingURL=restore-droplet.js.map