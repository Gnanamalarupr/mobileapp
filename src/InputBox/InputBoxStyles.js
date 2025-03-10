import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "20%",
  },
  input: {
    width: 360,
    height: 48,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingLeft: 12,
    marginBottom: 12,
    color: 'black',
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  darkInput: {
    backgroundColor: '#222', 
    color: 'white',
    borderColor: '#444',
  },
});

export default styles;
