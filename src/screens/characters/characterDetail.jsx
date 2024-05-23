import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {screenStyles} from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  getSingleCharacter,
  resetData,
} from '../../store/actions/charactersActions';
import Spinner from '../../components/ui/spinner';
import {characterDetailStyle} from '../../styles/characterDetailsStyles';
import {StatusTypes} from '../../utils/constants';

const CharacterDetail = ({route}) => {
  const {characterID} = route?.params;
  const dispatch = useDispatch();
  const {pendingSingleCharacter, singleCharacter} = useSelector(
    state => state.characters,
  );

  useEffect(() => {
    dispatch(getSingleCharacter(characterID));

    return () => {
      dispatch(resetData());
    };
  }, []);

  return (
    <View style={screenStyles.container}>
      {pendingSingleCharacter ? (
        <Spinner />
      ) : (
        <ScrollView>
          <View style={characterDetailStyle.imageContainer}>
            <Image
              style={[
                characterDetailStyle.image,
                singleCharacter?.status === StatusTypes.ALIVE
                  ? characterDetailStyle.statusAliveContainer
                  : characterDetailStyle.statusDeadContainer,
                singleCharacter?.status === StatusTypes.UNKNOWN
                  ? characterDetailStyle.statusUnknownContainer
                  : null,
              ]}
              source={{uri: singleCharacter?.image}}
            />
            <View
              style={[
                singleCharacter?.status === StatusTypes.ALIVE
                  ? characterDetailStyle.aliveStatusContainer
                  : characterDetailStyle.deadStatusContainer,
                singleCharacter?.status === StatusTypes.UNKNOWN
                  ? characterDetailStyle.unknownStatusContainer
                  : null,
              ]}>
              <Text style={characterDetailStyle.status}>
                {singleCharacter?.status}
              </Text>
            </View>
          </View>
          <View style={characterDetailStyle.nameContainer}>
            <Text style={characterDetailStyle.name}>
              {singleCharacter?.name}
            </Text>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>PROPERTIES</Text>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.firstField}>
                <Text>Gender :</Text>
              </View>
              <View style={characterDetailStyle.secondField}>
                <Text>{singleCharacter?.gender}</Text>
              </View>
            </View>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.firstField}>
                <Text>Species :</Text>
              </View>
              <View style={characterDetailStyle.secondField}>
                <Text>{singleCharacter?.species}</Text>
              </View>
            </View>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.firstField}>
                <Text>Status :</Text>
              </View>
              <View style={characterDetailStyle.secondField}>
                <Text>{singleCharacter?.status}</Text>
              </View>
            </View>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>WHEREABOUTS</Text>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.firstField}>
                <Text>Origin :</Text>
              </View>
              <View style={characterDetailStyle.secondField}>
                <Text>{singleCharacter?.origin?.name}</Text>
              </View>
            </View>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.firstField}>
                <Text>Location :</Text>
              </View>
              <View style={characterDetailStyle.secondField}>
                <Text>{singleCharacter?.location?.name}</Text>
              </View>
            </View>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.firstField}>
                <Text>Url :</Text>
              </View>
              <View style={characterDetailStyle.secondField}>
                <Text>{singleCharacter?.url}</Text>
              </View>
            </View>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>
              FEATURED CHAPTERS
            </Text>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.firstField}>
                <Text>Created :</Text>
              </View>
              <View style={characterDetailStyle.secondField}>
                <Text>{singleCharacter?.created}</Text>
              </View>
            </View>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.firstField}>
                <Text>Episodes:</Text>
              </View>
              <View style={characterDetailStyle.secondField}>
                <Text>
                  {singleCharacter?.episode &&
                  singleCharacter.episode.length > 0
                    ? singleCharacter.episode[0]
                    : null}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CharacterDetail;
