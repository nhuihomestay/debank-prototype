"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = void 0;
const createProject = ({ httpClient, }) => ({ name, description, purpose, environment, }) => {
    const path = '/projects';
    const body = {
        name,
        description,
        purpose,
        environment,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.createProject = createProject;
//# sourceMappingURL=create-project.js.map