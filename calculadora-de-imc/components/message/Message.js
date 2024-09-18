import { Text, View } from 'react-native';
import styles from './styles.js'

export default function Message({ message, imc }){
  return(
    <View style={styles.message}>
      <Text style={styles.imc}>{ message }</Text>
      <Text style={styles.imc}>{ imc }</Text>
    </View>
  )
}