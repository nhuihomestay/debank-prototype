"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameDroplet = void 0;
const renameDroplet = ({ httpClient, }) => ({ droplet_id, name, }) => {
    const path = '/droplets';
    const type = 'rename';
    const body = { name, type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.renameDroplet = renameDroplet;
//# sourceMappingURL=rename-droplet.js.map