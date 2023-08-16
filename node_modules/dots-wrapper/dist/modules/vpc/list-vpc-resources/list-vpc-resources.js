"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listVpcResources = void 0;
const listVpcResources = ({ httpClient, }) => ({ page = 1, per_page = 25, resource_type, vpc_id, }) => {
    const path = '/vpcs';
    const query_params = { page, per_page, resource_type };
    const url = `${path}/${vpc_id}/members`;
    return httpClient.get(url, { params: query_params });
};
exports.listVpcResources = listVpcResources;
//# sourceMappingURL=list-vpc-resources.js.map