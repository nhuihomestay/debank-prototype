"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rebuildDroplet = void 0;
const rebuildDroplet = ({ httpClient, }) => ({ droplet_id, image, }) => {
    const path = '/droplets';
    const type = 'rebuild';
    const body = { image, type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.rebuildDroplet = rebuildDroplet;
//# sourceMappingURL=rebuild-droplet.js.map