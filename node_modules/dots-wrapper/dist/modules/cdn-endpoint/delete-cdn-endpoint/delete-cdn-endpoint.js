"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCdnEndpoint = void 0;
const deleteCdnEndpoint = ({ httpClient, }) => ({ cdn_endpoint_id, }) => {
    const path = '/cdn/endpoints';
    const url = `${path}/${cdn_endpoint_id}`;
    return httpClient.delete(url);
};
exports.deleteCdnEndpoint = deleteCdnEndpoint;
//# sourceMappingURL=delete-cdn-endpoint.js.map