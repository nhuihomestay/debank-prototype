"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClusterlintDiagnostics = void 0;
const getClusterlintDiagnostics = ({ httpClient, }) => ({ kubernetes_cluster_id, }) => {
    const path = '/kubernetes/clusters';
    const url = `${path}/${kubernetes_cluster_id}/clusterlint`;
    return httpClient.get(url);
};
exports.getClusterlintDiagnostics = getClusterlintDiagnostics;
//# sourceMappingURL=get-clusterlint-diagnostics.js.map