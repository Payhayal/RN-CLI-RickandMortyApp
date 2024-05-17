import {StyleSheet} from 'react-native';
import Colors from '../themes/colors';

const characterDetailStyle = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 200,
    borderWidth: 4,
  },
  name: {
    marginVertical: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  aliveStatusContainer: {
    backgroundColor: Colors.GREEN,
    borderRadius: 7,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
  },
  deadStatusContainer: {
    backgroundColor: Colors.RED,
    borderRadius: 7,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
  },
  unknownStatusContainer: {
    backgroundColor: Colors.GRAY,
    borderRadius: 7,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
  },
  status: {
    color: Colors.WHITE,
    margin: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  statusAliveContainer: {
    borderColor: Colors.GREEN,
  },
  statusDeadContainer: {
    borderColor: Colors.RED,
  },
  statusUnknownContainer: {
    borderColor: Colors.GRAY,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    color: Colors.BACKGROUNDCOLOR,
    textAlign: 'center',
    marginVertical: 5,
    fontWeight: '700',
    fontSize: 18,
    fontStyle: 'italic',
  },
  sectionContainer: {
    margin: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  firstField: {
    backgroundColor: Colors.DETAILTEXT,
    padding: 10,
    flex: 1,
    borderRadius: 10,
  },
  secondField: {
    backgroundColor: Colors.DETAILTEXT,
    padding: 10,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 10,
  },
});
export {characterDetailStyle};
