import { Text, View, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import Form from './components/form/Form.js'


export default function App() {
  return (
    <SafeAreaView style={styles.all}>
      <Form />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  all:{
    flex: 1,
    justifyContent: 'center'
  }
})