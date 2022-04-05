import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TotoHeadBlock = styled.div`
  padding-top: 48px;
  padding-bottom: 24px;
  padding-left: 32px;
  padding-right: 32px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

let today = new Date();
let dateString = today.toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
let dayName = today.toLocaleDateString("ko-KR", {
  weekday: "long",
});

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);
  return (
    <TotoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TotoHeadBlock>
  );
}

export default TodoHead;
