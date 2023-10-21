import React, { useContext } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { PERMISSIONS, PermissionStatus, check, request } from 'react-native-permissions'
import { PermissionsContext } from '../context/PermissionsContext'
import { BlackButton } from '../components/BlackButton'

export const PermissionsScreen = () => {

  const {permissions, askLocationPermission} =  useContext(PermissionsContext)








  return (
    <View style={styles.container}>
        <Text style={styles.title}>Se necesita usar el gps</Text>

        <BlackButton 
          title='Permiso'
          onPress={askLocationPermission}
        />

        <Text style={{marginTop: 20}}>{JSON.stringify(permissions)}</Text>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    width: 250,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  }
})
