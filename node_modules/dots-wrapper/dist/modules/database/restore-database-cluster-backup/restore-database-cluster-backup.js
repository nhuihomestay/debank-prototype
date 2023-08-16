"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreDatabaseClusterBackup = void 0;
const restoreDatabaseClusterBackup = ({ httpClient, }) => ({ backup_restore, engine, name, num_nodes, region, size, tags, version, }) => {
    const path = '/databases';
    const body = {
        backup_restore,
        engine,
        name,
        num_nodes,
        region,
        size,
        tags,
        version,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.restoreDatabaseClusterBackup = restoreDatabaseClusterBackup;
//# sourceMappingURL=restore-database-cluster-backup.js.map