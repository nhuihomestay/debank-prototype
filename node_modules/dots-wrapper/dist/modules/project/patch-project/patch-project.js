"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchProject = void 0;
const patchProject = ({ httpClient, }) => ({ description, environment, is_default, name, project_id, purpose, }) => {
    const path = '/projects';
    const body = {
        description,
        environment,
        is_default,
        name,
        purpose,
    };
    const url = `${path}/${project_id}`;
    return httpClient.patch(url, body);
};
exports.patchProject = patchProject;
//# sourceMappingURL=patch-project.js.map