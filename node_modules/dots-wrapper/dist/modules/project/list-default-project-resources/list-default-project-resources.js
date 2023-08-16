"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDefaultProjectResources = void 0;
const listDefaultProjectResources = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/projects';
    const query_params = { page, per_page };
    const url = `${path}/default/resources`;
    return httpClient.get(url, { params: query_params });
};
exports.listDefaultProjectResources = listDefaultProjectResources;
//# sourceMappingURL=list-default-project-resources.js.map