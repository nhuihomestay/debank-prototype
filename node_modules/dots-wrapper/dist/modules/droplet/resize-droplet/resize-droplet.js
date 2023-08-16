"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeDroplet = void 0;
const resizeDroplet = ({ httpClient, }) => ({ disk, droplet_id, size, }) => {
    const path = '/droplets';
    const type = 'resize';
    const body = { disk, size, type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.resizeDroplet = resizeDroplet;
//# sourceMappingURL=resize-droplet.js.map