"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listReadOnlyReplicas = void 0;
const listReadOnlyReplicas = ({ httpClient, }) => ({ page = 1, per_page = 25, database_cluster_id, }) => {
    const path = '/databases';
    const query_params = { page, per_page };
    const url = `${path}/${database_cluster_id}/replicas`;
    return httpClient.get(url, { params: query_params });
};
exports.listReadOnlyReplicas = listReadOnlyReplicas;
//# sourceMappingURL=list-read-only-replicas.js.map