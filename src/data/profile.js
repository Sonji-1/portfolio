export const profile = {
  name: '손지원',
  role: 'Embedded Systems Engineer',
  hero: {
    keywords: [
      'System Architecture',
      'Constraint Optimization',
      'Data-driven Validation',
      'Cross-domain Integration',
    ],
    subcopy:
      '제약을 먼저 정의하고, 설계 대안을 비교해 선택한 뒤, 실험 로그와 지표를 기반으로 개선 결과를 검증합니다.',
  },
  declaration: {
    title: '제약 속에서 구조를 설계하는 개발자',
    body: '현상을 질문으로 재정의하고, 시스템 흐름을 재구성하며, 수치와 실험으로 개선을 증명합니다.',
  },
  headline: '제약 속에서 구조를 설계하는 개발자',
  intro: '현상을 질문으로 재정의하고, 시스템 흐름을 재구성하며, 수치와 실험으로 개선을 증명합니다.',
  heroCard: {
    photo: '/images/profile/profile.jpeg',
    birth: '1996.06.15',
    quickFacts: [
      { label: '이름', value: '손지원' },
      { label: '포지션', value: 'Embedded Systems Engineer' },
      { label: '코어 스택', value: 'C++ / Embedded Linux' },
      { label: '학습 중 기술', value: 'AI-driven Robotics' },
    ],
    contacts: [
      {
        label: 'E-Mail',
        value: 'godgod7765@naver.com',
        href: 'mailto:godgod7765@naver.com',
        icon: '✉️',
      },
      {
        label: 'Instagram',
        value: 'https://www.instagram.com/sonji_1/',
        href: 'https://www.instagram.com/sonji_1/',
        icon: '📷',
        hidden: true,
      },
      {
        label: 'GitHub',
        value: 'https://github.com/Sonji-1',
        href: 'https://github.com/Sonji-1',
        icon: '🐱',
      },
      {
        label: 'Tech Blog',
        value: 'https://sonlog.tistory.com/',
        href: 'https://sonlog.tistory.com/',
        icon: '📝',
      },
    ],
  },
  strengths: [
    {
      title: '시스템 구조 설계',
      description: '요구사항을 모듈 경계와 데이터 흐름으로 변환해 복잡도를 제어합니다.',
      bullets: [
        '기능을 책임 단위로 분해해 결합도를 낮춤',
        '인터페이스 명세를 먼저 고정',
      ],
    },
    {
      title: '제약 기반 최적화',
      description: '시간, 자원, 정확도 같은 제약을 기준으로 설계 대안을 선택합니다.',
      bullets: [
        '트레이드오프를 수치 기준으로 정리',
        '우선순위를 명확히 해 구현 범위 결정',
      ],
    },
    {
      title: '수치 기반 검증',
      description: '전후 지표와 실험 로그를 통해 개선 여부를 명확히 판단합니다.',
      bullets: ['성능 지표를 배포 기준과 연결', '재현 가능한 실험 조건 유지'],
    },
    {
      title: '복합 시스템 통합',
      description: 'AI, 시스템, 웹 계층을 하나의 운영 흐름으로 연결합니다.',
      bullets: ['데이터 파이프라인과 UI 피드백 루프 결합', '운영 관점의 장애 포인트 선제 대응'],
    },
  ],
  motto: [
    '문제 정의를 먼저 고정하고 구현은 유연하게 바꾼다.',
    '숫자로 검증되지 않는 개선은 완료로 보지 않는다.',
    '기술 선택은 팀의 유지보수 비용까지 포함해 결정한다.',
  ],
  background: [
    '대학 연구실에서 실험 데이터 수집/정제 파이프라인을 유지보수했습니다.',
    '운영체제 과목 조교로서 메모리/스케줄러 과제 디버깅을 코칭했습니다.',
    'SSAFY 팀 프로젝트에서 기획-개발-회고 전 과정을 반복하며 제품 감각을 키웠습니다.',
  ],
  interests: ['AI-driven Robotics'],
  extras: ['기술 글쓰기', '작곡/연주'],
}
