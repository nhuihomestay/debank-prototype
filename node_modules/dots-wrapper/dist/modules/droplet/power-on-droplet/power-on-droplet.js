"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powerOnDroplet = void 0;
const powerOnDroplet = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'power_on';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.powerOnDroplet = powerOnDroplet;
//# sourceMappingURL=power-on-droplet.js.map