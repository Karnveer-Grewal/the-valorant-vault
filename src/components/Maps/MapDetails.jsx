import { useParams, useLocation } from 'react-router-dom';

const MapDetails = () => {
  const params = useParams();
  const { state } = useLocation();
  console.log(state);
  return (
    <main className='maps-details-container'>
      <h1>{state.displayName}</h1>
      <p>Map Coordinates: {state.coordinates}</p>
      {state.displayIcon ? (
        <img src={state.displayIcon} alt={`${state.displayName} Mini Map`} />
      ) : (
        <h2 className='no-map'>No Mini Map Available</h2>
      )}
    </main>
  );
};

export default MapDetails;
