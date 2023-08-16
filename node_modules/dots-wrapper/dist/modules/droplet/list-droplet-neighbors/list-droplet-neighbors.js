"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDropletNeighbors = void 0;
const listDropletNeighbors = ({ httpClient, }) => ({ droplet_id, page = 1, per_page = 25, }) => {
    const path = '/droplets';
    const query_params = { page, per_page };
    const url = `${path}/${droplet_id}/neighbors`;
    return httpClient.get(url, {
        params: query_params,
    });
};
exports.listDropletNeighbors = listDropletNeighbors;
//# sourceMappingURL=list-droplet-neighbors.js.map