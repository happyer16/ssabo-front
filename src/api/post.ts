
import {type ApiResponse} from '../entity/api';
import {AxiosResponse} from "axios";
import {AbstractApiService} from "@/src/api/abstractApiService";
import {User} from '../entity/user';
import {api} from "@/src/utils/http-util";
import {Post} from "@/src/types/post";

class PostService extends AbstractApiService {
  constructor() {
    super(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/ssabo/posts`, );
  }

  /**
   * 게시글 조회
   * TODO id 난수로 변경
   * @param id
   */
  async getPostDetail(id: string): Promise<ApiResponse<Post>> {
    return this.get<Post>(id);
  }
}

const postService = new PostService();
export default postService;
