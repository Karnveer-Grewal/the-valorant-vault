import { useState, useEffect } from 'react';
import MapsItem from '../components/Maps/MapsItem';
import instance from '../axios';

const Maps = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const getMaps = async () => {
      try {
        const request = await instance.get('/maps');
        setMaps(request.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getMaps();
  }, []);

  const mapsList = maps.map((individualMap) => (
    <MapsItem key={individualMap.uuid} {...individualMap} />
  ));

  return <main className='maps-container'>{mapsList}</main>;
};
export default Maps;
