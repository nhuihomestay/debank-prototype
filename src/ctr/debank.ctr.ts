import { DebankSvcs } from "@svcs";
import CryptoJS from 'crypto-js'
class DebankCtr {
  public async getUser(req: any): Promise<any> {
    const getToken: any = CryptoJS.AES.encrypt(JSON.stringify({
      id: 1,
      permission: 'USER'
    }), 'helloworld').toString()

    const deToken: any = CryptoJS.AES.decrypt(getToken, 'helloworld').toString(CryptoJS.enc.Utf8)
    console.log(deToken)
    return {
      data: {
        token: getToken
      },
      devMessage: 'SUCCESS'
    }
    // console.log("wallet ==> ", req.wallet);
    // if (!req.wallet) {
    //   return {
    //     data: {},
    //     devMessage: "Parameter is incomplete",
    //   };
    // }

    // const debankService = new DebankSvcs();
    // const getData = await debankService.getUserData(req.wallet);
    // if (!getData) {
    //   return {
    //     data: {},
    //     devMessage: "Forbidden",
    //   };
    // }

    // console.log("debank getUserData ==> ", getData);
    // return {
    //   data: getData,
    //   devMessage: "Success",
    // };
  }

  public async repostDebank(req: any): Promise<any> {
    const headers = {
      accept: "*/*",
      "accept-language": "th-TH,th;q=0.9,en;q=0.8,sn;q=0.7",
      account: {
        random_at: 1686945307,
        random_id: "6496ee24d0d44e61b4be31868a694e58",
        session_id: "474979f243e840f5b7a6f8cc55c2aa9f",
        user_addr: "0xd4562d7d62cefebada19449a0ebd4a8d2afd0976",
        wallet_type: "metamask",
        is_verified: true,
      },
      "content-type": "application/json",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "Windows",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      source: "web",
      "x-api-nonce": "n_JnonLt8ZWw01ozfkxiHigMdrVeQye0aEHbM8ezcX",
      "x-api-sign":
        "b606158419656143d660492c9e9649f77b7c38429eaa99c9f1ae42cf1bc56139",
      "x-api-ts": "1692199905",
      "x-api-ver": "v2",
    };

    const body = {
      id: req.body.id,
    };

    const debankService = new DebankSvcs();
    const postData = await debankService.postRepost(headers, body);
    console.log("postData ==> ", postData);
    return {
      data: postData,
      devMessage: "Success",
    };
  }

  public async movieDb(req: any): Promise<any> {
    const debankService = new DebankSvcs();
    const getDetail = await debankService.getDetail(req.headers.id)
    const getImage = await debankService.getImage(req.headers.id, req.headers.type)
    const imageUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2`
    let imageData: any[] = []
    const backdropList: any[] = []
    const posterList: any[] = []
    const logoList: any[] = []
    if (req.headers.type) {
      getImage.forEach((img: any) => {
        imageData.push({
          aspect_ratio: img.aspect_ratio,
          height: img.height,
          width: img.width,
          path: imageUrl + img.file_path
        })
      })
    } else {
      getImage.backdrops.forEach((img: any) => {
        backdropList.push({
          aspect_ratio: img.aspect_ratio,
          height: img.height,
          width: img.width,
          path: imageUrl + img.file_path
        })
      })

      getImage.posters.forEach((img: any) => {
        posterList.push({
          aspect_ratio: img.aspect_ratio,
          height: img.height,
          width: img.width,
          path: imageUrl + img.file_path
        })
      })

      getImage.logos.forEach((img: any) => {
        logoList.push({
          aspect_ratio: img.aspect_ratio,
          height: img.height,
          width: img.width,
          path: imageUrl + img.file_path
        })
      })

      imageData = [{
        backdrops: backdropList,
        posters: posterList,
        logos: logoList
      }]
    }

    const reponse = {
      id: getDetail.id,
      homepage: getDetail.homepage,
      original_title: getDetail.original_title,
      overview: getDetail.overview,
      genres: getDetail.genres,
      release_date: getDetail.release_date,
      runtime: getDetail.runtime,
      poster_path: imageUrl + getDetail.poster_path,
      popularity: getDetail.popularity,
      image: imageData
    }

    return {
      data: reponse,
      devMessage: "Success",
    };
  }
}


export default DebankCtr;
