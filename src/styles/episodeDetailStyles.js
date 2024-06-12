import {StyleSheet} from 'react-native';
import Colors from '../themes/colors';

const episodeDetailStyle = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    flexWrap: 'wrap',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 200,
    borderWidth: 4,
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  columnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
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
  firstColumnField: {
    backgroundColor: Colors.DETAILTEXT,
    padding: 10,
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  secondColumnField: {
    backgroundColor: Colors.DETAILTEXT,
    padding: 20,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 10,
  },
  mapCharacters: {
    marginBottom: 8,
  },
});
export {episodeDetailStyle};
