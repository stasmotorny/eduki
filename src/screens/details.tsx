import React from 'react';
import {Card, Text} from 'react-native-paper';
import {ScrollView, StyleSheet, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../types/navigation.ts';

type Props = StackScreenProps<StackParamList, 'Details'>;

export const Details = (props: Props) => {
  const {cardImageLink, cardTitle, cardAuthorName, cardPrice, description} =
    props.route.params.item;
  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <ScrollView>
          <Card.Cover
            style={styles.cardImage}
            source={{
              uri: cardImageLink,
            }}
          />
          <Card.Title
            title={cardTitle}
            titleStyle={styles.titleStyle}
            subtitle={`Author: ${cardAuthorName}`}
            titleNumberOfLines={3}
            subtitleStyle={styles.cardSubtitle}
          />
          <Card.Content>
            <Text variant="bodyMedium" style={styles.cardContentText}>
              Price: {cardPrice}
            </Text>
            <Text variant="bodyLarge" style={styles.descrtiptionHeader}>
              Description:
            </Text>
            <Text>{description}</Text>
          </Card.Content>
        </ScrollView>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  cardStyle: {
    marginBottom: 16,
    paddingBottom: 24,
  },
  cardSubtitle: {
    marginVertical: 8,
  },
  cardContentText: {
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#a144ef',
  },
  titleStyle: {
    fontWeight: 'bold',
  },
  cardImage: {
    marginBottom: 16,
  },
  descrtiptionHeader: {
    fontWeight: 'bold',
  },
});
