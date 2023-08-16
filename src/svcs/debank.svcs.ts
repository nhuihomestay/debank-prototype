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

    public async postRepost(header: any, body: any): Promise<any> {
        const request = {
            headers: header,
            body: body
        }
        console.log(request)
        const postData = await axios.post(`https://api.debank.com/article/repost`, request)
            .then(resp => {
                return resp.data
            })
            .catch(err => {
                return err.data
            })

        return postData

    }
}

export default DebankSvcs