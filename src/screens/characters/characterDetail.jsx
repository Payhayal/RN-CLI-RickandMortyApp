import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {screenStyles} from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {getSingleCharacter} from '../../store/actions/charactersActions';
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
      console.log(characterID);
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
                singleCharacter.status === StatusTypes.ALIVE
                  ? characterDetailStyle.statusAliveContainer
                  : characterDetailStyle.statusDeadContainer,
                singleCharacter.status === StatusTypes.UNKNOWN
                  ? characterDetailStyle.statusUnknownContainer
                  : null,
              ]}
              source={{uri: singleCharacter.image}}
            />
            <View
              style={[
                singleCharacter.status === StatusTypes.ALIVE
                  ? characterDetailStyle.aliveStatusContainer
                  : characterDetailStyle.deadStatusContainer,
                singleCharacter.status === StatusTypes.UNKNOWN
                  ? characterDetailStyle.unknownStatusContainer
                  : null,
              ]}>
              <Text style={characterDetailStyle.status}>
                {singleCharacter.status}
              </Text>
            </View>
          </View>
          <View style={characterDetailStyle.nameContainer}>
            <Text style={characterDetailStyle.name}>
              {singleCharacter.name}
            </Text>
          </View>
          <View>
            <Text>PROPERTIES</Text>
          </View>
          <View>
            <Text>WHEREABOUTS</Text>
          </View>
          <View>
            <Text>FEATURED CHAPTERS</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CharacterDetail;
