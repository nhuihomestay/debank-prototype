"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDropletActions = void 0;
const listDropletActions = ({ httpClient, }) => ({ droplet_id, page = 1, per_page = 25, }) => {
    const path = '/droplets';
    const query_params = { page, per_page };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.get(url, {
        params: query_params,
    });
};
exports.listDropletActions = listDropletActions;
//# sourceMappingURL=list-droplet-actions.js.map