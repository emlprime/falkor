import { Member } from "../Member";

export default {
  title: "Falkor/Member",
  component: Member,
  argTypes: {},
};

const Template = (args) => <Member {...args} />;

export const Driver = Template.bind({});
Driver.args = {
  isDriver: true,
  initials: "CC",
};

export const Navigator = Template.bind({});
Navigator.args = {
  initials: "PS",
};
