"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCdnEndpoint = void 0;
const getCdnEndpoint = ({ httpClient, }) => ({ cdn_endpoint_id, }) => {
    const path = '/cdn/endpoints';
    const url = `${path}/${cdn_endpoint_id}`;
    return httpClient.get(url);
};
exports.getCdnEndpoint = getCdnEndpoint;
//# sourceMappingURL=get-cdn-endpoint.js.map