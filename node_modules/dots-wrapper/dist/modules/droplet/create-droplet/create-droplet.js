"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDroplet = void 0;
const createDroplet = ({ httpClient, }) => ({ backups, image, ipv6, monitoring, name, private_networking, region, size, ssh_keys, tags, user_data, volumes, vpc_uuid, }) => {
    const path = '/droplets';
    const body = {
        backups,
        image,
        ipv6,
        monitoring,
        name,
        private_networking,
        region,
        size,
        ssh_keys,
        tags,
        user_data,
        volumes,
        vpc_uuid,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.createDroplet = createDroplet;
//# sourceMappingURL=create-droplet.js.map