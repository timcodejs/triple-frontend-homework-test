## 트리플 프론트엔드 과제 전형 - 홈페이지 섹션 구현

### 폴더 정리
- src/components : 컴포넌트 폴더
- src/images : 이미지 폴더
- src/types : 공통 타입 지정
- src/hooks : 커스텀 훅
- src/pages : App.tsx에서 분리 시켜 컴포넌트를 관리하기 위한 main 페이지 컴포넌트
- src/contents : 이미지 등 전역으로 관리할 기타 콘텐츠 파일

### 프로젝트 실행 방법
- App.tsx > Main.tsx 에서 각 컴포넌트들을 불러오며 이미지 및 텍스트, 스타일을 화면에 랜더링.
- 각 컴포넌트들은 useFade 훅 함수에 값(지연시간)을 매개변수로 전달.
- 마운트(첫 랜더링)되며 상태값(불투명도, 애니메이션, 지연시간(매개변수)) 변경.
- useCount 훅 함수는 500ms가 지난 후 매개변수로 넘겨받은 카운트 값을 계산하여 setInterval을 실행.
  (등장 애니메이션과 동시에 실행 시 카운트가 제대로 보여지지 않기 때문에 지연시켰습니다.)
- 동시 카운트 증가를 위해 프레임 증가 값(frame)과 최종 도달 값(total)의 division이 0 ~ 1값으로 나오게 한 뒤
  전달받은 매개변수에 곱해주어 숫자가 달라도 최종엔(1) 동시에 카운트되도록 적용.
- 카운트가 점점 느려지게 하기 위해 최종 도달 값(total)에서 -3을 한 값까지 도달하면 첫번째 인터벌을 중지한 뒤
  지연시간을 늦춘(1000/10) 두번째 인터벌을 실행하여 느려지게 동작하도록 적용.

### 사용 라이브러리
#### dependencies 
- styled-components, @types/styled-components
#### devDependencies
- titicacadev/eslint-config-triple
