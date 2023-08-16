"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSizes = void 0;
const listSizes = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/sizes';
    const query_params = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: query_params });
};
exports.listSizes = listSizes;
//# sourceMappingURL=list-sizes.js.map