"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVpc = void 0;
const createVpc = ({ httpClient, }) => ({ description, ip_range, is_default, name, region, }) => {
    const path = '/vpcs';
    const body = {
        default: is_default,
        description,
        ip_range,
        name,
        region,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.createVpc = createVpc;
//# sourceMappingURL=create-vpc.js.map