"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listConnectionPools = void 0;
const listConnectionPools = ({ httpClient, }) => ({ page = 1, per_page = 25, database_cluster_id, }) => {
    const path = '/databases';
    const query_params = { page, per_page };
    const url = `${path}/${database_cluster_id}/pools`;
    return httpClient.get(url, { params: query_params });
};
exports.listConnectionPools = listConnectionPools;
//# sourceMappingURL=list-connection-pools.js.map