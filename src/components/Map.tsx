import React, { useEffect } from 'react'
import MapView, { MapMarkerProps, Marker, PROVIDER_GOOGLE } from 'react-native-maps'


import Geolocation from '@react-native-community/geolocation';




interface Props {
    markers?: MapMarkerProps[];
}




export const Map = ({markers}:Props) => {



    useEffect(() => {
        Geolocation.getCurrentPosition(
            info => console.log(info),
            (err) => console.log({err}),
            {
                enableHighAccuracy: true
            }
            
            );
    }, [])
    



  return (
    <>
        <MapView
          style={{flex:1}}
        //   provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >

            
                {/* <Marker
                    image={require('../assets/pngegg.png')}
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title='Esto es un titulo'
                    description='La descripcion de laksjflakfjas flkasjflkasf j'
                /> */}
        
        </MapView>
    </>
  )
}
