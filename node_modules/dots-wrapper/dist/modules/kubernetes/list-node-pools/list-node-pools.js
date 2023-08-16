"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listNodePools = void 0;
const listNodePools = ({ httpClient, }) => ({ kubernetes_cluster_id, page = 1, per_page = 25, }) => {
    const path = '/kubernetes/clusters';
    const query_params = { page, per_page };
    const url = `${path}/${kubernetes_cluster_id}/node_pools`;
    return httpClient.get(url, { params: query_params });
};
exports.listNodePools = listNodePools;
//# sourceMappingURL=list-node-pools.js.map