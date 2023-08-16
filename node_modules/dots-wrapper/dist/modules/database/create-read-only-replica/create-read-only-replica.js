"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReadOnlyReplica = void 0;
const createReadOnlyReplica = ({ httpClient, }) => ({ database_cluster_id, name, region, size, tags, }) => {
    const path = '/databases';
    const body = {
        name,
        region,
        size,
        tags,
    };
    const url = `${path}/${database_cluster_id}/replicas`;
    return httpClient.post(url, body);
};
exports.createReadOnlyReplica = createReadOnlyReplica;
//# sourceMappingURL=create-read-only-replica.js.map