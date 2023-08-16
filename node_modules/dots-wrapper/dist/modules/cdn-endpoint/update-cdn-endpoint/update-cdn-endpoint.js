"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCdnEndpoint = void 0;
const updateCdnEndpoint = ({ httpClient, }) => ({ cdn_endpoint_id, ttl, certificate_id, custom_domain, }) => {
    const path = '/cdn/endpoints';
    const body = {
        ttl,
        certificate_id,
        custom_domain,
    };
    const url = `${path}/${cdn_endpoint_id}`;
    return httpClient.put(url, body);
};
exports.updateCdnEndpoint = updateCdnEndpoint;
//# sourceMappingURL=update-cdn-endpoint.js.map