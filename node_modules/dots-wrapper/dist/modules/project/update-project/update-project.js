"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProject = void 0;
const updateProject = ({ httpClient, }) => ({ description, environment, is_default, name, project_id, purpose, }) => {
    const path = '/projects';
    const body = {
        description,
        environment,
        is_default,
        name,
        purpose,
    };
    const url = `${path}/${project_id}`;
    return httpClient.put(url, body);
};
exports.updateProject = updateProject;
//# sourceMappingURL=update-project.js.map