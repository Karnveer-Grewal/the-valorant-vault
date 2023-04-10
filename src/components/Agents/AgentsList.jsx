import { Link } from 'react-router-dom';

const AgentsList = (props) => {
  const { displayIcon, displayName, role } = props;
  console.log(displayName);
  return (
    <Link
      to={`/agents/details/${displayName.toLowerCase()}`}
      className='agents-item'
    >
      <img src={displayIcon} alt={displayName} className='agents-item-img' />
      <h2 className='agents-item-heading'>{displayName}</h2>
      <div className='agents-item-content'>
        <p>{role.displayName}</p>
        <img src={role.displayIcon} alt={role.displayName} />
      </div>
    </Link>
  );
};
export default AgentsList;
