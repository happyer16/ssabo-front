import {User} from "@/src/entity/user";
import {AbstractApiService} from "@/src/api/abstractApiService";

class UserApiService extends AbstractApiService {
  constructor(token?: string) {
    super(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/ssabo/user`, token);
  }

  /**
   * 유저 검색
   */
  async getUserInfo() {
    return this.http.get<User>(
      '', {
        headers: {
          ...this.createAuthHeader(),
        },
      }
    )
  }
}

export const userApiService = new UserApiService();
