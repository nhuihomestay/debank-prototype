"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabaseCluster = void 0;
const createDatabaseCluster = ({ httpClient, }) => ({ engine, name, num_nodes, private_network_uuid, region, size, tags, version, }) => {
    const path = '/databases';
    const body = {
        engine,
        name,
        num_nodes,
        private_network_uuid,
        region,
        size,
        tags,
        version,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.createDatabaseCluster = createDatabaseCluster;
//# sourceMappingURL=create-database-cluster.js.map