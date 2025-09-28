import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export const getCity = () => {
    const [city, setCity] = useState<String | null>(null);
    const [errorMsg, setErrorMsg] = useState<String | null>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;

            let geocodedLocation = await Location.reverseGeocodeAsync({ latitude, longitude });

            if (geocodedLocation && geocodedLocation.length > 0) {
                setCity(geocodedLocation[0].city);
            } else {
                setErrorMsg('Could not determine city from location.');
            }
        })();
    }, []);


    return city;
};
