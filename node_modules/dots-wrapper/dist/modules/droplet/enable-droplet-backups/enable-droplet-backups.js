"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableDropletBackups = void 0;
const enableDropletBackups = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'enable_backups';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.enableDropletBackups = enableDropletBackups;
//# sourceMappingURL=enable-droplet-backups.js.map