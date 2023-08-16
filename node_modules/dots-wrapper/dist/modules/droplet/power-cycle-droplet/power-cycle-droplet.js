"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powerCycleDroplet = void 0;
const powerCycleDroplet = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'power_cycle';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.powerCycleDroplet = powerCycleDroplet;
//# sourceMappingURL=power-cycle-droplet.js.map