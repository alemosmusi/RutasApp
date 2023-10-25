import React, { useEffect, useRef } from 'react'
import MapView, { MapMarkerProps } from 'react-native-maps'


import Geolocation from '@react-native-community/geolocation';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../pages/LoadingScreen';
import { Fab } from './Fab';




interface Props {
    markers?: MapMarkerProps[];
}




export const Map = ({markers}:Props) => {


  const {
    hasLocation,
    initialPosition, 
    getCurrentLocation, 
    followUserLocation,
    userLocation,
    stopFollowUserLocation } = useLocation()

  const mapViewRef = useRef<MapView>()
  const following = useRef<boolean>(true)


  useEffect(() => {
    followUserLocation();
    return ()=>{
      stopFollowUserLocation
    }
  }, [])

  useEffect(() => {

    if ( !following.current ) return
    
    const { latitude, longitude } = userLocation

    mapViewRef.current?.animateCamera({
      center: {
        latitude: latitude,
        longitude: longitude
      }
    })


  }, [userLocation])
  
  

  const centerPosition = async()=>{

    const location = await getCurrentLocation()

    following.current = true

    mapViewRef.current?.animateCamera({
      center: {
        latitude: location.latitude,
        longitude: location.longitude
      }
    })
  }

  if(!hasLocation){
    return <LoadingScreen />
  }



    
    



  return (
    <>
        <MapView
          ref={ (el) => mapViewRef.current = el!}
          style={{flex:1}}
        //   provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: initialPosition!.latitude,
            longitude: initialPosition!.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          // este es para cuando mueve el mapa
          onTouchStart={()=> following.current = false}
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

        <Fab 
          iconName='compass-outline'
          onPress={centerPosition}
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20
          }}
          
        />
    </>
  )
}
