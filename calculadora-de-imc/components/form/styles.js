import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    margin: 20,
    marginTop: 100,
    justifyContent: 'space-evenly',
    padding: 20,
    minHeight: 500, 
  },
  label: {
    fontSize: 18,
    margin: 5,
    padding: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#af2d3b', 
    padding: 10,
    margin: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#af2d3b',
    borderRadius: 10,
    padding: 20,
  },
  textButton :{
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default styles;
