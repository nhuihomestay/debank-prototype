"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDomainRecord = void 0;
const updateDomainRecord = ({ httpClient, }) => ({ data, domain_name, domain_record_id, flags, name, port, priority, tag, ttl, type, weight, }) => {
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
    const url = `${path}/${domain_name}/records/${domain_record_id}`;
    return httpClient.put(url, body);
};
exports.updateDomainRecord = updateDomainRecord;
//# sourceMappingURL=update-domain-record.js.map