import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style= {{color: 'black'}}>Home Screen</Text>
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.navigate('CounterScreen')}
        >
          <Icon name="home" size={25} color={'black'} />
          <Text style={{ color: 'black', marginLeft: 20 }}>Counter</Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.navigate('ApiScreen')}
        >
          <Icon name="planet" size={25} color={'black'} />
          <Text style={{ color: 'black', marginLeft: 20 }}>Rick and Morty</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
