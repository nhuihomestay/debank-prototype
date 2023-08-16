"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefaultProject = void 0;
const updateDefaultProject = ({ httpClient, }) => ({ description, environment, is_default, name, purpose, }) => {
    const path = '/projects';
    const body = {
        description,
        environment,
        is_default,
        name,
        purpose,
    };
    const url = `${path}/default`;
    return httpClient.put(url, body);
};
exports.updateDefaultProject = updateDefaultProject;
//# sourceMappingURL=update-default-project.js.map