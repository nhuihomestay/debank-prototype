"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyReadOnlyReplica = void 0;
const destroyReadOnlyReplica = ({ httpClient, }) => ({ database_cluster_id, read_only_replica_name, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}/replicas/${read_only_replica_name}`;
    return httpClient.delete(url);
};
exports.destroyReadOnlyReplica = destroyReadOnlyReplica;
//# sourceMappingURL=destroy-read-only-replica.js.map