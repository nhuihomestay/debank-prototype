import axios from "axios";


class DebankSvcs {

    public async getUserData(wallet: string): Promise<any> {

        const getData = await axios.get(`https://api.debank.com/user?id=${wallet}`)
            .then(resp => {
                return resp.data
            })
            .catch(err => {
                return err.data
            })

        return getData

    }

    public async postRepost(headers: any, body: any): Promise<any> {
        headers = {
            headers: {
                account: { 
                    random_at: 1686945307,
                    random_id: "6496ee24d0d44e61b4be31868a694e58",
                    session_id: "38700ebae3f94b3d9a3a85a709a3f4fe",
                    user_addr: "0xd4562d7d62cefebada19449a0ebd4a8d2afd0976",
                    wallet_type: "metamask",
                    is_verified: true 
                },
                "X-Api-Sign": "b5e6f8dd656663335bd389f40a669c20fbe833eb49ce04389c8d997da86095d1"
        }
    }

    body = {
        id: 437706
    }

    const postData = await axios.post(`https://api.debank.com/article/repost`, body, headers)
        .then(resp => {
            return resp
        })
        .catch(err => {
            return err
        })

        return postData

    }
}

export default DebankSvcs