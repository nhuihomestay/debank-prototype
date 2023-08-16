"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAvailableOptionsOfKubernetes = void 0;
const listAvailableOptionsOfKubernetes = ({ httpClient, }) => () => {
    const path = '/kubernetes/options';
    const url = `${path}`;
    return httpClient.get(url);
};
exports.listAvailableOptionsOfKubernetes = listAvailableOptionsOfKubernetes;
//# sourceMappingURL=list-available-options-of-kubernetes.js.map