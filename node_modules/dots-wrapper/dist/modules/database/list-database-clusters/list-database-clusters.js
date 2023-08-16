"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDatabaseClusters = void 0;
const listDatabaseClusters = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/databases';
    const query_params = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: query_params });
};
exports.listDatabaseClusters = listDatabaseClusters;
//# sourceMappingURL=list-database-clusters.js.map