"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rebootDroplet = void 0;
const rebootDroplet = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'reboot';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.rebootDroplet = rebootDroplet;
//# sourceMappingURL=reboot-droplet.js.map