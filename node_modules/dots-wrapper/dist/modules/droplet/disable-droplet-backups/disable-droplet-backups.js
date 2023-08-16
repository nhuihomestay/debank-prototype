"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableDropletBackups = void 0;
const disableDropletBackups = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'disable_backups';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.disableDropletBackups = disableDropletBackups;
//# sourceMappingURL=disable-droplet-backups.js.map