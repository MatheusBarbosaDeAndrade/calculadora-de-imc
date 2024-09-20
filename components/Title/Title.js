import { Text, View } from 'react-native'
import style from './style.js'

export default function Title(){
  return (
    <View>
      <Text style={style.title}>Calculo de IMC</Text>
    </View>
  )
}