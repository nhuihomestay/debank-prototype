"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDropletNeighborhoods = void 0;
const listDropletNeighborhoods = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/reports/droplet_neighbors_ids';
    const query_params = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, {
        params: query_params,
    });
};
exports.listDropletNeighborhoods = listDropletNeighborhoods;
//# sourceMappingURL=list-droplet-neighborhoods.js.map