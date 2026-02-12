export const featuredProjectId = 'refrigerator'

export const projects = [
  {
    id: 'refrigerator',
    title: '약품고',
    period: '2026.01 - 2026.01 (1개월)',
    role: 'Embedded / Edge System Lead',
    summary:
      '수기 기반 냉장 의약품 관리의 기록 누락·감사 대응 문제를 해결하기 위해 냉장고를 Edge 서버로 재설계하고 실시간 로그 자동화 시스템을 구축해 센서 이벤트 저장 latency를 100ms 이내로 낮춘 프로젝트입니다.',
    thumbnail: '/images/projects/refrigerator/thumbnail.jpg',
    heroMedia: {
      type: 'video',
      src: '/images/projects/refrigerator/video_portfolio.mp4',
      poster: '/images/projects/refrigerator/thumbnail.jpg',
      alt: '약품고 대표 영상',
      caption: '약품고 Edge 시스템 시연 영상',
    },
    techStack: ['C', 'Python', 'Embedded Linux', 'Raspberry Pi 5', 'FastAPI', 'PostgreSQL'],
    sections: [
      {
        type: 'statement',
        title: '① 한 줄 정의',
        content:
          '수기 기반 냉장 의약품 관리의 기록 누락·감사 대응 문제를 해결하기 위해 냉장고를 Edge 서버로 재설계하고 실시간 로그 자동화 시스템을 구현한 프로젝트입니다.',
      },
      {
        type: 'bullets',
        title: '② 핵심 기여',
        bullets: [
          '센서-Arduino-Raspberry Pi UART 통신 구조 설계 및 전체 하드웨어 통합 구현',
          '장난감 냉장고 내부에 센서/보드/배선 구조 설계 및 실구동 환경 완성',
          '냉장고 이벤트 중심 DB ERD 설계',
          '온도 Boundary 정책 CRUD API 및 업무별 로그 상세조회 API 전체 구현',
          '운영 대시보드 UX 개선 및 시연 환경 전체 구축',
        ],
      },
      {
        type: 'bullets',
        title: '③ 기술 스택',
        bullets: [
          'Embedded / HW: Arduino, UART 통신, 온도/Reed Switch/RFID 센서',
          'Edge Layer: Raspberry Pi 5, FastAPI, PostgreSQL',
          'AI / Cloud(팀 구현): LLM 기반 SQL 자동 생성, n8n Workflow, AWS EC2',
        ],
      },
      {
        type: 'metrics',
        title: '④ 정량 성과',
        metrics: [
          {
            label: '온도 기록 주기',
            before: '일 1회 수기 입력',
            after: '3초 자동 기록',
          },
          {
            label: '누적 온도 로그',
            before: '누락 발생',
            after: '8,392건 적재',
          },
          {
            label: '센서 이벤트 저장 latency',
            before: '가시성 부족',
            after: '100ms 이내',
          },
          {
            label: '시스템 의존 구조',
            before: '문서 저장',
            after: 'Edge Device 자동기록',
          },
        ],
      },
      {
        type: 'tags',
        title: '⑤ 키워드 태그',
        tags: [
          '#EdgeComputing',
          '#EmbeddedSystem',
          '#IoT',
          '#FastAPI',
          '#PostgreSQL',
          '#의료IT',
        ],
      },
    ],
  },
  {
    id: 'campus-routine',
    title: '지능형 물류 운반/적재 통합 제어 및 디지털 트윈 플랫폼',
    period: '2025.11 - 2025.12 (2개월)',
    role: 'AI / Robotics Engineer',
    summary:
      '실환경-Gazebo 시뮬레이션 간 Domain Gap을 줄이기 위해 YOLOv8-OBB 기반 객체 중심좌표·회전값 추론과 Jetank 제어 로직을 연계하고, 디지털 트윈 대응 자동화 흐름을 구현한 프로젝트입니다.',
    thumbnail: '/images/projects/smart_logistics/thumbnail.png',
    heroMedia: {
      type: 'video',
      src: '/images/projects/smart_logistics/result_inference.mp4',
      poster: '/images/projects/smart_logistics/thumbnail.png',
      alt: '지능형 물류 운반/적재 통합 제어 및 디지털 트윈 플랫폼 대표 영상',
      caption: '지능형 물류 운반/적재 통합 제어 및 디지털 트윈 플랫폼 시연 영상',
    },
    techStack: [
      'YOLOv8-OBB',
      'Domain Adaptation',
      'ROS2',
      'Gazebo',
      'Cartographer SLAM',
      'Roboflow',
      'State Machine',
    ],
    sections: [
      {
        type: 'statement',
        title: '① 한 줄 정의',
        content:
          '실환경-Gazebo 시뮬레이션 간 Domain Gap을 해결한 YOLOv8-OBB 기반 객체 중심좌표·회전값 추론 전달 및 팔레타이징 연계 Digital Twin 대응 자동화 시스템입니다.',
      },
      {
        type: 'bullets',
        title: '② 핵심 기여',
        bullets: [
          'YOLOv8-OBB 기반 하이퍼파라미터 조정 및 Fine-tuning 수행',
          '실환경 Raw 데이터 110장 직접 촬영 및 자체 라벨링',
          'Roboflow 기반 데이터 증강 파이프라인 설계',
          '실환경 + 시뮬레이션 동시 고려 Domain Adaptation 전략 적용',
          'ROS2 Topic 기반 통신 구조에서 동일 AI 모델 노드 2개 병렬 실행 (실환경 웹캠 / Gazebo 카메라)',
          'ROI 내 객체 탐지 시 Bounding Box 4점 평균으로 중심점 계산 후 객체 회전값(theta) 추출 및 ROS2 Topic으로 Jetank 전달',
          'Jetank 측 State Machine 구조 설계 (신호 대기 -> 파지 수행 -> 완료 후 대기 복귀)',
          {
            text: 'AI Model Huggingface 배포',
            url: 'https://huggingface.co/jwson1614/Rectangle_Object_Detection_model',
          },
          {
            text: 'Dataset Huggingface 배포',
            url: 'https://huggingface.co/datasets/jwson1614/Rectangle_Object_Detection_Dataset',
          },
        ],
      },
      {
        type: 'bullets',
        title: '③ 기술 스택',
        bullets: [
          'AI / CV: YOLOv8-OBB, Domain Adaptation, Fine-tuning, Bounding Box 좌표 연산',
          'Robotics / Middleware: ROS2 (Topic publish/subscribe), State Machine 기반 로봇 제어',
          'Simulation: Gazebo, Digital Twin 환경',
          'Data Pipeline: Roboflow, Custom Dataset 구축',
        ],
      },
      {
        type: 'metrics',
        title: '④ 정량 성과',
        metrics: [
          { label: '단일 도메인 학습 정확도', before: '약 0.90', after: '기준 성능 확보' },
          { label: 'Domain Adaptation 적용 정확도', before: '0.60 수준', after: '두 도메인 모두 0.88 수준' },
          { label: '실환경 Raw 데이터 직접 촬영', before: '0장', after: '110장' },
          { label: '증강 포함 데이터셋 규모', before: '기본셋', after: '약 300장' },
          { label: '동시 추론 및 시각화', before: '단일 도메인', after: '실환경/시뮬레이션 동시 추론' },
        ],
      },
      {
        type: 'gallery',
        title: '⑤ 시연 영상',
        media: [
          {
            type: 'video',
            src: '/images/projects/smart_logistics/result_inference.mp4',
            poster: '/images/projects/smart_logistics/thumbnail.png',
            caption: 'Inference 결과 영상',
          },
          {
            type: 'video',
            src: '/images/projects/smart_logistics/result_simulation.mp4',
            poster: '/images/projects/smart_logistics/thumbnail.png',
            caption: 'Simulation 결과 영상',
          },
          {
            type: 'video',
            src: '/images/projects/smart_logistics/result_realWorld.mp4',
            poster: '/images/projects/smart_logistics/thumbnail.png',
            caption: 'Real World 결과 영상',
          },
        ],
      },
      {
        type: 'tags',
        title: '⑥ 키워드 태그',
        tags: ['#ComputerVision', '#DomainAdaptation', '#YOLOv8', '#ROS2', '#Robotics', '#StateMachine', '#SLAM', '#DigitalTwin'],
      },
    ],
  },
  {
    id: 'ssafy-ai-challenge',
    title: 'SSAFY AI Challenge (VLM)',
    period: '대회 프로젝트',
    role: 'Team Lead / VLM Engineer',
    summary:
      'Qwen3-VL-8B 기반 멀티모달 VQA 모델 성능 최적화를 목표로 Fine-tuning과 하이퍼파라미터 최적화 전략을 설계해, 대형 모델 의존 없이 전국 Top 10 성과를 달성한 프로젝트입니다.',
    thumbnail: '/images/projects/ai_challenge/thumbnail.png',
    heroMedia: {
      type: 'image',
      src: '/images/projects/ai_challenge/thumbnail.png',
      alt: 'SSAFY AI Challenge 대표 이미지',
      caption: 'SSAFY AI Challenge (VLM) 프로젝트 대표 이미지',
    },
    techStack: [
      'Qwen3-VL-8B',
      'Multimodal VQA',
      'Vision-Language Model',
      'Fine-tuning',
      'Hyperparameter Tuning',
      'Python',
    ],
    sections: [
      {
        type: 'statement',
        title: '① 한 줄 정의',
        content:
          '이미지와 자연어 질문을 동시에 이해하는 Qwen3-VL-8B 기반 VQA 모델을 Fine-tuning 및 하이퍼파라미터 최적화 전략으로 개선하여, 대형 모델 의존 없이 전국 Top 10 성과를 달성한 AI 챌린지 프로젝트입니다.',
      },
      {
        type: 'bullets',
        title: '② 핵심 기여',
        bullets: [
          '팀장으로 프로젝트 전반 기획, 전략 수립, 일정 관리 주도',
          'Qwen3-VL-8B 기반 VQA 모델 Fine-tuning 수행',
          'Learning Rate, Batch Size, Epoch, Optimizer 비교 실험 설계',
          '성능 변화 분석을 통한 최적 조합 도출',
          '프롬프트 설계 및 모델 응답 안정성 개선 전략 적용',
          '최종 발표 자료 구성 및 모델 개선 전략 정리',
        ],
      },
      {
        type: 'bullets',
        title: '③ 기술 스택',
        bullets: [
          'Model: Qwen3-VL-8B (Vision-Language Model)',
          'Multimodal AI: VQA (Visual Question Answering)',
          'Optimization: Fine-tuning, Hyperparameter Tuning',
          'Language / Framework: Python',
        ],
      },
      {
        type: 'metrics',
        title: '④ 정량 성과',
        metrics: [
          { label: '대회 최종 성과', before: '일반 참가', after: 'Kaggle 전국 Top 10 진입' },
          { label: '운영 모델 규모', before: '상위권 다수 32B 모델', after: '8B 모델 운영' },
          { label: '성능 확보 방식', before: '대형 모델 의존', after: '효율적 튜닝 전략으로 확보' },
        ],
      },
      {
        type: 'gallery',
        title: '⑤ 결과 이미지',
        images: [
          {
            src: '/images/projects/ai_challenge/leaderboard.png',
            alt: 'SSAFY AI Challenge 리더보드 결과',
            caption: '대회 리더보드 결과 이미지',
          },
        ],
      },
      {
        type: 'tags',
        title: '⑥ 키워드 태그',
        tags: ['#MultimodalAI', '#VLM', '#VQA', '#HyperparameterTuning', '#FineTuning', '#ModelOptimization', '#AICompetition'],
      },
    ],
  },
]
