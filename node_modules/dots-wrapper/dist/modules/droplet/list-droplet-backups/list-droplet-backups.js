"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDropletBackups = void 0;
const listDropletBackups = ({ httpClient, }) => ({ droplet_id, page = 1, per_page = 25, }) => {
    const path = '/droplets';
    const query_params = { page, per_page };
    const url = `${path}/${droplet_id}/backups`;
    return httpClient.get(url, {
        params: query_params,
    });
};
exports.listDropletBackups = listDropletBackups;
//# sourceMappingURL=list-droplet-backups.js.map