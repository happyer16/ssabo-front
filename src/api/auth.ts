
import {type ApiResponse} from '../entity/api';
import {AxiosResponse} from "axios";
import {AbstractApiService} from "@/src/api/abstractApiService";
import {User} from '../entity/user';
import {api} from "@/src/utils/http-util";

class AuthApiService extends AbstractApiService {
  constructor(token?: string) {
    super(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/ssabo/`, token);
  }

  async kakaoLogin(token: string): Promise<ApiResponse<User>> {
    return this.post<User>('login/kakao', {token});
  }
}

const authApiService = new AuthApiService();
export default authApiService;
