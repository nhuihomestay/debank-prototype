"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVpc = void 0;
const getVpc = ({ httpClient, }) => ({ vpc_id, }) => {
    const path = '/vpcs';
    const url = `${path}/${vpc_id}`;
    return httpClient.get(url);
};
exports.getVpc = getVpc;
//# sourceMappingURL=get-vpc.js.map