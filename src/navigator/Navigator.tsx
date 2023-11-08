import { createStackNavigator } from '@react-navigation/stack';
import { MapScreen } from '../pages/MapScreen';
import { PermissionsScreen } from '../pages/PermissionsScreen';
import { useContext, useEffect } from 'react';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadingScreen } from '../pages/LoadingScreen';


import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();

export const Navigator = ()=> {


  useEffect(() => {
    SplashScreen.hide();
  
  }, [])
  


  const {permissions}=useContext(PermissionsContext)

  if(permissions.locationStatus === 'unavailable'){
    return <LoadingScreen/>
  }



  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >

      {
        (permissions.locationStatus === 'granted')
        ?<Stack.Screen name="MapScreen" component={MapScreen} />
        :<Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      }
    </Stack.Navigator>
  );
}