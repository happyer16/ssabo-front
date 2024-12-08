// src/containers/DomainHomeContainer/constants.ts
import {Post} from "@/src/components/post/PostCard/types";

export const POSTS: Record<string, Post[]> = {
  '전후사진': [
    {
      id: 1,
      title: '[비포&애프터] 눈매교정+앞트임 3개월 후기 공유',
      excerpt: '안녕하세요! 3개월 전 눈매교정이랑 앞트임 수술받은 후기 공유드립니다. 붓기가 빠지고 흉터도 많이 좋아졌어요. 수술 전후 사진과 함께 자세한 경험담을 공유해드립니다.',
      author: {
        id: 1,
        name: '눈성형후기',
        image: '/api/placeholder/24/24'
      },
      category: '전후사진',
      thumbnail: '/api/placeholder/120/90',
      likes: 428,
      comments: 45,
      timestamp: '방금 전',
      tag: 'HOT'
    },
    {
      id: 2,
      title: '콧대+코끝 수술 6개월 후기 (사진多)',
      excerpt: '콧대와 코끝 수술한지 6개월이 지났습니다. 자연스러운 라인으로 잘 잡혔고 붓기도 다 빠졌어요. 수술 과정과 회복 과정을 상세히 기록했습니다.',
      author: {
        id: 2,
        name: '코성형생생후기',
        image: '/api/placeholder/24/24'
      },
      category: '전후사진',
      thumbnail: '/api/placeholder/120/90',
      likes: 312,
      comments: 28,
      timestamp: '10분 전',
      tag: 'NEW'
    }
  ],
  '시술정보': [
    {
      id: 3,
      title: '보톡스 시술 전 알아야 할 10가지',
      excerpt: '보톡스 시술 전 꼭 체크해야 할 사항들을 정리했습니다. 부작용 예방을 위한 체크리스트와 함께 시술 후 관리법까지 상세히 알려드립니다.',
      author: {
        id: 3,
        name: '시술전문의',
        image: '/api/placeholder/24/24'
      },
      category: '시술정보',
      likes: 267,
      comments: 39,
      timestamp: '15분 전'
    },
    {
      id: 4,
      title: '지방흡입 마취 종류별 장단점 비교',
      excerpt: '지방흡입 시술시 선택할 수 있는 마취 종류와 각각의 장단점을 전문의가 설명해드립니다. 수면마취, 부분마취의 차이점을 알아보세요.',
      author: {
        id: 4,
        name: '홍길동의원장',
        image: '/api/placeholder/24/24'
      },
      category: '시술정보',
      thumbnail: '/api/placeholder/120/90',
      likes: 189,
      comments: 23,
      timestamp: '30분 전'
    }
  ],
  '가격정보': [
    {
      id: 5,
      title: '2024 상반기 눈성형 가격 정보 (병원별 비교)',
      excerpt: '2024년 상반기 기준 주요 성형외과 20곳의 눈성형 수술 가격을 비교 분석했습니다. 쌍꺼풀, 눈매교정, 트임 수술 등 항목별 가격표 제공.',
      author: {
        id: 5,
        name: '가격비교왕',
        image: '/api/placeholder/24/24'
      },
      category: '가격정보',
      likes: 521,
      comments: 47,
      timestamp: '1시간 전',
      tag: 'HOT'
    },
    {
      id: 6,
      title: '이달의 성형 이벤트 모음 (12월)',
      excerpt: '12월 한달간 진행되는 각 병원별 성형 이벤트를 한눈에 비교해볼 수 있도록 정리했습니다. 이벤트 기간과 혜택을 꼼꼼히 확인하세요.',
      author: {
        id: 6,
        name: '이벤트헌터',
        image: '/api/placeholder/24/24'
      },
      category: '가격정보',
      thumbnail: '/api/placeholder/120/90',
      likes: 433,
      comments: 29,
      timestamp: '2시간 전'
    }
  ],
  '병원후기': [
    {
      id: 7,
      title: '강남 OO성형외과 눈성형 후기 (상담부터 수술까지)',
      excerpt: '강남 OO성형외과에서 눈성형을 받은 과정을 공유합니다. 상담부터 수술, 그리고 회복까지의 전 과정을 솔직하게 기록했습니다.',
      author: {
        id: 7,
        name: '성형일기',
        image: '/api/placeholder/24/24'
      },
      category: '병원후기',
      thumbnail: '/api/placeholder/120/90',
      likes: 367,
      comments: 42,
      timestamp: '3시간 전'
    },
    {
      id: 8,
      title: 'XX의원 안면거상술 시술 후기',
      excerpt: 'XX의원에서 안면거상술을 받은 후기입니다. 시술 과정과 비용, 의료진의 전문성과 서비스 등 병원 선택에 도움될 정보를 공유합니다.',
      author: {
        id: 8,
        name: '리프팅후기',
        image: '/api/placeholder/24/24'
      },
      category: '병원후기',
      likes: 289,
      comments: 31,
      timestamp: '4시간 전'
    }
  ]
};
export const TOP_POSTS = [
  {
    id: 1,
    rank: 1,
    title: '눈매교정+눈성형 1년 후기 (전후사진 첨부)',
    category: '전후사진',
    date: '12.08',
    likes: 845,
    comments: 236
  },
  {
    id: 2,
    rank: 2,
    title: '지방흡입 시술 전 꼭 알아야 할 체크리스트',
    category: '시술정보',
    date: '12.08',
    likes: 756,
    comments: 184
  },
  {
    id: 3,
    rank: 3,
    title: '코필러 vs 코성형 - 고민 해결 완벽 가이드',
    category: '시술정보',
    date: '12.07',
    likes: 677,
    comments: 145
  },
  {
    id: 4,
    rank: 4,
    title: '보톡스 가격 비교 (12월 병원별 정리)',
    category: '가격정보',
    date: '12.07',
    likes: 589,
    comments: 123
  },
  {
    id: 5,
    rank: 5,
    title: '안면윤곽 3개월 차 후기 (사진有)',
    category: '전후사진',
    date: '12.07',
    likes: 512,
    comments: 98
  }
];
