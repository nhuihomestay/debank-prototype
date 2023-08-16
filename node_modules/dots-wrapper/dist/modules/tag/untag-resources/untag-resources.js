"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.untagResources = void 0;
const untagResources = ({ httpClient, }) => ({ tag_name, resources, }) => {
    const path = '/tags';
    const body = { resources };
    const url = `${path}/${tag_name}/resources`;
    return httpClient.delete(url, { data: body });
};
exports.untagResources = untagResources;
//# sourceMappingURL=untag-resources.js.map