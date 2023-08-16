"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContainerRegistry = void 0;
const addContainerRegistry = ({ httpClient, }) => ({ cluster_uuids, }) => {
    const path = '/kubernetes/clusters/registry';
    const body = { cluster_uuids };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.addContainerRegistry = addContainerRegistry;
//# sourceMappingURL=add-container-registry.js.map