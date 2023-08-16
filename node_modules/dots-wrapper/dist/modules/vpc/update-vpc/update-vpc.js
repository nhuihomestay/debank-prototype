"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVpc = void 0;
const updateVpc = ({ httpClient, }) => ({ description, is_default, name, vpc_id, }) => {
    const path = '/vpcs';
    const body = {
        default: is_default,
        description,
        name,
    };
    const url = `${path}/${vpc_id}`;
    return httpClient.patch(url, body);
};
exports.updateVpc = updateVpc;
//# sourceMappingURL=update-vpc.js.map