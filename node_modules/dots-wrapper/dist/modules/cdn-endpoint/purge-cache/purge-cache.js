"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purgeCache = void 0;
const purgeCache = ({ httpClient, }) => ({ cdn_endpoint_id, files, }) => {
    const path = '/cdn/endpoints';
    const body = { files };
    const url = `${path}/${cdn_endpoint_id}/cache`;
    return httpClient.delete(url, { data: body });
};
exports.purgeCache = purgeCache;
//# sourceMappingURL=purge-cache.js.map