import { Member } from "./Member";
import styled from "styled-components";

export const Profile = () => {
  return (
    <Card>
      <Member id="currentMember" initials="PS" isDriver={true} />
      <h3>Peter Stradinger</h3>
      <h4>Team Lead</h4>
      <div class="enneagram">E7</div>
      <div class="swimlane">Bug Fix</div>
      <div class="currentTicket">DEV-12345</div>
    </Card>
  );
};

const Card = styled.div`
  background-color: rgba(49, 203, 255, 0.3);
  border-radius: 20px;
  display: grid;
  width: 280px;
  height: 100px;
  grid-template: "member name enneagram" 24px "member position position" 24px "swimlane swimlane currentTicket" 2fr / auto 1fr auto;
  gap: 4px;
  padding: 0.8rem;
  border: 2px solid rgba(49, 203, 255, 0.3);
  box-shadow: inset 0px 0px 4px 4px rgba(49, 203, 255, 0.3);

  #currentMember {
    grid-area: member;
  }
  h3 {
    grid-area: name;
  }
  h4 {
    grid-area: position;
    font-style: italic;
  }
  .enneagram {
    grid-area: enneagram;
    text-align: right;
  }
  .swimlane {
    grid-area: swimlane;
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
  .currentTicket {
    grid-area: currentTicket;
    height: 100%;
    display: flex;
    align-items: flex-end;
  }

  justify-content: center;
  align-items: center;
`;
