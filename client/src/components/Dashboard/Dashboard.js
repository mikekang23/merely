import React from 'react';
import Action from '../Action/Action';
import Focus from '../Focus/Focus';
import Group from '../Group/Group';
import { connect } from "react-redux";

const Dashboard = ({users}) => {
  return (
    <div>

      <Action />
      <Focus />
      <Group />
    </div>
  );
}

export default connect(null, null)(Dashboard);
