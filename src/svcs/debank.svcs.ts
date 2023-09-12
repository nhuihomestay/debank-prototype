import axios from "axios";

class DebankSvcs {
  public async getUserData(wallet: string): Promise<any> {
    const getData = await axios
      .get(`https://api.debank.com/user?id=${wallet}`)
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        return err.data;
      });

    return getData;
  }

  public async postRepost(header: any, body: any): Promise<any> {
    const request = {
      headers: header,
      body: body,
    };
    console.log(request);

    const postData = await axios
      .post(`https://api.debank.com/article/repost`, request)
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        return err.data;
      });

    return postData;
  }

  public async getImage(id: any, type: any): Promise<any> {
    const header = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmVlZjdiYzI5YmUwOGU3MzM5MmVjOGNjMGI2NGM1MiIsInN1YiI6IjY0ZWE4YzM1NTk0Yzk0MDBhY2IwOTdlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fdtzCScTd_vnBhq5_C7UzGzm0LkMy49Jl9JbhzfJ1Ys',
        accept: 'application/json'
      }
    }
    const getData = await axios
      .get(`https://api.themoviedb.org/3/movie/${id}/images?include_image_language=en&language=en`, header)
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        return err.data;
      });

    if (type === 'backdrops') return getData.backdrops
    if (type === 'posters') return getData.posters
    if (type === 'logos') return getData.logos
    return getData
  }

  public async getDetail(id: any): Promise<any> {
    const header = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmVlZjdiYzI5YmUwOGU3MzM5MmVjOGNjMGI2NGM1MiIsInN1YiI6IjY0ZWE4YzM1NTk0Yzk0MDBhY2IwOTdlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fdtzCScTd_vnBhq5_C7UzGzm0LkMy49Jl9JbhzfJ1Ys',
        accept: 'application/json'
      }
    }
    const getData = await axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, header)
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        return err.data;
      });

    return getData
  }
}

export default DebankSvcs;
