"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDroplets = void 0;
const listDroplets = ({ httpClient, }) => ({ page = 1, per_page = 25, tag_name = undefined, }) => {
    const path = '/droplets';
    const query_params = {
        page,
        per_page,
        tag_name,
    };
    const url = `${path}`;
    return httpClient.get(url, { params: query_params });
};
exports.listDroplets = listDroplets;
//# sourceMappingURL=list-droplets.js.map