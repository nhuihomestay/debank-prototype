"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = void 0;
const deleteProject = ({ httpClient, }) => ({ project_id, }) => {
    const path = '/projects';
    const url = `${path}/${project_id}`;
    return httpClient.delete(url);
};
exports.deleteProject = deleteProject;
//# sourceMappingURL=delete-project.js.map