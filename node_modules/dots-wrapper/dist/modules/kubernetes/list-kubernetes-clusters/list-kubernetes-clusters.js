"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listKubernetesClusters = void 0;
const listKubernetesClusters = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/kubernetes/clusters';
    const query_params = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: query_params });
};
exports.listKubernetesClusters = listKubernetesClusters;
//# sourceMappingURL=list-kubernetes-clusters.js.map