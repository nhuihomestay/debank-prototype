"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powerOffDroplet = void 0;
const powerOffDroplet = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'power_off';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.powerOffDroplet = powerOffDroplet;
//# sourceMappingURL=power-off-droplet.js.map