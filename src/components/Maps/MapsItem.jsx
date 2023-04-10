import { Link } from 'react-router-dom';

const MapsItem = (props) => {
  const { displayName, splash } = props;
  console.log(displayName);
  return (
    <div className='maps-item'>
      <div className='maps-header'>
        <h1>{displayName}</h1>
        <Link to={`/maps/${displayName.toLowerCase()}`} state={props}>
          Click to see minimap
        </Link>
      </div>

      <img src={splash} alt={displayName} />
    </div>
  );
};

export default MapsItem;
