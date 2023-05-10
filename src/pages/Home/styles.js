import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  titulo: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    padding: 5,
    marginTop: 20,
    backgroundColor: '#fabb34',
    borderRadius: 10,
  },
  textoButton: {
    color: '#FFF',
    fontSize: 18,
    padding: 10,
    marginRight: 30,
    marginLeft: 10,
  },
});

export { styles };
