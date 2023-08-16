"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDropletSnapshots = void 0;
const listDropletSnapshots = ({ httpClient, }) => ({ droplet_id, page = 1, per_page = 25, }) => {
    const path = '/droplets';
    const query_params = { page, per_page };
    const url = `${path}/${droplet_id}/snapshots`;
    return httpClient.get(url, {
        params: query_params,
    });
};
exports.listDropletSnapshots = listDropletSnapshots;
//# sourceMappingURL=list-droplet-snapshots.js.map