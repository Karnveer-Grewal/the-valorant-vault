import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AgentContext } from '../../contexts/AgentsContext';

const AgentsNavBar = () => {
  const { agents } = useContext(AgentContext);
  const rolesArr = [];

  for (let i = 0; i < agents.length; i++) {
    if (agents[i].isPlayableCharacter) {
      const role = agents[i].role.displayName;
      if (!rolesArr.includes(role)) rolesArr.push(role);
    }
  }

  const sortedRolesArr = rolesArr.sort();

  const rolesLinks = sortedRolesArr.map((role, index) => (
    <li key={index}>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'agents-nav-active' : 'agents-nav-link'
        }
        to={`/agents/${role.toLowerCase()}s`}
      >{`${role}s`}</NavLink>
    </li>
  ));

  return (
    <nav className='agents-nav'>
      <ul>
        <li>
          <NavLink
            end
            to='/agents'
            className={({ isActive }) =>
              isActive ? 'agents-nav-active' : 'agents-nav-link'
            }
          >
            All Agents
          </NavLink>
        </li>
        {rolesLinks}
      </ul>
    </nav>
  );
};

export default AgentsNavBar;
