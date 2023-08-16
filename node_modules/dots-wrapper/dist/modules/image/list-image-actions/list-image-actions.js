"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listImageActions = void 0;
const listImageActions = ({ httpClient, }) => ({ page = 1, per_page = 25, image_id, }) => {
    const path = '/images';
    const query_params = { page, per_page };
    const url = `${path}/${image_id}/actions`;
    return httpClient.get(url, { params: query_params });
};
exports.listImageActions = listImageActions;
//# sourceMappingURL=list-image-actions.js.map