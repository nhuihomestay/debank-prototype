import { DebankSvcs } from "@svcs"

class DebankCtr {
    public async getUser(req: any): Promise<any> {
        console.log('wallet ==> ', req.wallet)
        if (!req.wallet) {
            return {
                data: {},
                devMessage: "Parameter is incomplete"
            }
        }

        const debankService = new DebankSvcs()
        const getData = await debankService.getUserData(req.wallet)
        if (!getData) {
            return {
                data: {},
                devMessage: "Forbidden"
            }
        }

        console.log('debank getUserData ==> ', getData)
        return {
            data: getData,
            devMessage: "Success"
        }
    }

    public async repostDebank(req: any): Promise<any> {
        const debankService = new DebankSvcs()
        const postData = await debankService.postRepost(req, req)
        console.log("postData ==> ", postData)
        return {
            data: postData,
            devMessage: "Success"
        }
    }
}

export default DebankCtr