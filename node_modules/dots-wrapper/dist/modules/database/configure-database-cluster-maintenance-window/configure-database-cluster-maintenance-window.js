"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureDatabaseClusterMaintenanceWindow = void 0;
const configureDatabaseClusterMaintenanceWindow = ({ httpClient, }) => ({ database_cluster_id, day, hour, }) => {
    const path = '/databases';
    const body = { day, hour };
    const url = `${path}/${database_cluster_id}/maintenance`;
    return httpClient.put(url, body);
};
exports.configureDatabaseClusterMaintenanceWindow = configureDatabaseClusterMaintenanceWindow;
//# sourceMappingURL=configure-database-cluster-maintenance-window.js.map