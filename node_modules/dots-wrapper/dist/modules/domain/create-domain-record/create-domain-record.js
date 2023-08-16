"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDomainRecord = void 0;
const createDomainRecord = ({ httpClient, }) => ({ domain_name, data, flags, name, port, priority, tag, ttl, type, weight, }) => {
    const path = '/domains';
    const body = {
        data,
        flags,
        name,
        port,
        priority,
        tag,
        ttl,
        type,
        weight,
    };
    const url = `${path}/${domain_name}/records`;
    return httpClient.post(url, body);
};
exports.createDomainRecord = createDomainRecord;
//# sourceMappingURL=create-domain-record.js.map