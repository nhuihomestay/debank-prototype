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
}

export default DebankSvcs