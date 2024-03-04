import React from 'react';
import {Card, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../types/navigation.ts';
import {StyleSheet} from 'react-native';

type Props = {
  cardImageLink: string;
  cardTitle: string;
  cardAuthorName: string;
  cardPrice: string;
  description: string;
};

export const ListItem = (props: Props) => {
  const {cardImageLink, cardTitle, cardAuthorName, cardPrice, description} =
    props;
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  return (
    <Card
      style={styles.cardStyle}
      onPress={() =>
        navigation.navigate('Details', {
          item: {
            cardImageLink,
            cardTitle,
            cardAuthorName,
            cardPrice,
            description,
          },
        })
      }>
      <Card.Cover
        source={{
          uri: cardImageLink,
        }}
        style={styles.cardImage}
      />
      <Card.Title
        title={cardTitle}
        titleStyle={styles.titleStyle}
        subtitle={`Author: ${cardAuthorName}`}
        titleNumberOfLines={3}
        subtitleStyle={styles.cardSubtitle}
      />
      <Card.Content>
        <Text variant="bodyMedium" style={styles.price}>
          Price: {cardPrice}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    marginBottom: 16,
    backgroundColor: 'white',
  },
  cardSubtitle: {
    marginVertical: 8,
  },
  titleStyle: {
    fontWeight: 'bold',
  },
  cardImage: {
    marginBottom: 16,
  },
  price: {
    fontWeight: 'bold',
    color: '#a144ef',
  },
});
