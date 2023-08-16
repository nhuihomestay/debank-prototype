"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDomainRecords = void 0;
const listDomainRecords = ({ httpClient, }) => ({ domain_name, name, page = 1, per_page = 25, type, }) => {
    const path = '/domains';
    const query_params = {
        name,
        page,
        per_page,
        type,
    };
    const url = `${path}/${domain_name}/records`;
    return httpClient.get(url, { params: query_params });
};
exports.listDomainRecords = listDomainRecords;
//# sourceMappingURL=list-domain-records.js.map