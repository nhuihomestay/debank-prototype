"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchDefaultProject = void 0;
const patchDefaultProject = ({ httpClient, }) => ({ description, environment, is_default, name, purpose, }) => {
    const path = '/projects';
    const body = {
        description,
        environment,
        is_default,
        name,
        purpose,
    };
    const url = `${path}/default`;
    return httpClient.patch(url, body);
};
exports.patchDefaultProject = patchDefaultProject;
//# sourceMappingURL=patch-default-project.js.map