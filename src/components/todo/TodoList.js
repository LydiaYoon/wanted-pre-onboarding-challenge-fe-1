import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <ul className="todo-list-container">
      <TodoItem
        title="프로젝트 생성하기"
        content="제공해드리는 API Repository를 활용하여 가이드에 따라 Todo App을 작성, 본인의 github에 Public으로 올려주세요. (주의: Public이 아닐 경우 과제를 확인할 수 없습니다)
        완성한 과제는 모집 마감 후 설문 조사를 통해 제출해주세요. (개강 시 설문 조사 링크 전달 예정)
        제출 레파지토리 명은 wanted-pre-onboarding-challenge-fe-1로 생성해 주세요.
        과제 수행 개수에 따라 기본적인 평가가 이루어지며, 커리큘럼 운영 과정에서 최소한의 수준을 파악하기 위한 용도입니다.
코드의 일관성, 가독성, 함수 분리, 컴포넌트 설계, 코드 퀄리티 등을 기준으로 세부적인 평가가 이루어집니다.
해당 과제에 대한 해설은 개강 후 진행될 예정입니다.
README.md를 꼭 작성해 주세요. 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.
반드시 함수 컴포넌트로 개발해주세요. (React Hooks)"
      />
      <TodoItem title="컴포넌트 스타일링 하기" content="22222222" />
      <TodoItem title="Context 만들기" content="33333" />
      <TodoItem title="기능 구현하기" content="44444444" />
    </ul>
  );
};

export default TodoList;
