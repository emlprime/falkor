import { Member } from "./Member";
import { Profile } from "./Profile";
import styled from "styled-components";

export const Roster = () => {
  return (
    <Section>
      <ul>
        <li>
          <Member initials="PS" isDriver />
        </li>
        <li>
          <Member initials="CC" isDriver={false} />
          <Member initials="CS" isDriver={false} />
          <Member initials="MC" isDriver={false} />
        </li>
        <li>
          <Member initials="JE" isDriver={false} />
          <Member initials="WA" isDriver={false} />
          <Member initials="JV" isDriver={false} />
        </li>
        <li>
          <Member initials="AP" isDriver={false} />
        </li>
      </ul>
      <Profile />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  gap: 12px;
  ul li {
    display: flex;
    gap: 4px;
    margin-bottom: 4px;
  }
`;
