"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodePool = void 0;
const getNodePool = ({ httpClient, }) => ({ kubernetes_cluster_id, node_pool_id, }) => {
    const path = '/kubernetes/clusters';
    const url = `${path}/${kubernetes_cluster_id}/node_pools/${node_pool_id}`;
    return httpClient.get(url);
};
exports.getNodePool = getNodePool;
//# sourceMappingURL=get-node-pool.js.map