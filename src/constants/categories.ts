import {CategoryGroup} from "@/src/components/layout/Navigation/types";

export const navigationGroups: CategoryGroup[] = [
  // {
  //   title: '후기글',
  //   link: '/reviews',
  //   items: [],
  // },
  // {
  //   title: '질문글',
  //   link: '/questions',
  //   items: [],
  // },
  // {
  //   title: '자유글',
  //   link: '/free',
  //   items: [],
  // },
  {
    title: '꿀팁',
    link: '/tips',
    items: [],
  },
  {
    title: '이벤트',
    link: '/events',
    items: [],
  },
  {
    title: '병원',
    items: [
      {
        id: 'plasticsurgery',
        label: '성형',
        link: '/hospitals/plasticsurgery',
      },
      {
        id: 'procedure',
        label: '시술',
        link: '/hospitals/procedure',
      },
    ],
  },
  {
    title: '마이페이지',
    link: '/mypage',
    items: [],
  },
];
