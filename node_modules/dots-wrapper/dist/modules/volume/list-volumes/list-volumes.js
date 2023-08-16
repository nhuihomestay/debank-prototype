"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listVolumes = void 0;
const listVolumes = ({ httpClient, }) => ({ name = undefined, page = 1, per_page = 25, }) => {
    const path = '/volumes';
    const query_params = { name, page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: query_params });
};
exports.listVolumes = listVolumes;
//# sourceMappingURL=list-volumes.js.map