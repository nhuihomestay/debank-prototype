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
        const headers = {
            "accept": "*/*",
            "accept-language": "th-TH,th;q=0.9,en;q=0.8,sn;q=0.7",
            "account": { "random_at": 1686945307, "random_id": "6496ee24d0d44e61b4be31868a694e58", "session_id": "474979f243e840f5b7a6f8cc55c2aa9f", "user_addr": "0xd4562d7d62cefebada19449a0ebd4a8d2afd0976", "wallet_type": "metamask", "is_verified": true },
            "content-type": "application/json",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "Windows",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "source": "web",
            "x-api-nonce": "n_KNwBJhy7fkxM8TzqQyErcnTgLzonJmRem0eiFkO2",
            "x-api-sign": "d35549b2d6e574ec524da8d8a83fe01a5385ae64fccf4520303595e737dce70c",
            "x-api-ts": "1692198594",
            "x-api-ver": "v2"
        }

        const body = {
            id: 437706
        }

        const debankService = new DebankSvcs()
        const postData = await debankService.postRepost(headers, body)
        console.log("postData ==> ", postData)
        return {
            data: postData,
            devMessage: "Success"
        }
    }
}

export default DebankCtr