import React, {useState, useEffect} from 'react';
import {useEduki2} from '../API/getQueries.ts';
import {FlatList, StyleSheet, View} from 'react-native';
import {Text, Searchbar, ActivityIndicator} from 'react-native-paper';
import {ListItem} from '../components/listItem.tsx';
import {MaterialsItem, Page} from '../types/materialType.ts';
import {clearCache} from '../../App.tsx';

export const Main = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {data, isError, refetch, hasNextPage, fetchNextPage} =
    useEduki2(searchQuery);

  useEffect(() => {
    clearCache();
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const loadNext = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  if (isError) {
    return <Text>Error fetching data</Text>;
  }

  const joinPageArrays = (pages: Page[]) => {
    let joinedPages: MaterialsItem[] = [];
    pages.forEach(page => {
      joinedPages = [...joinedPages, ...page.data?.items?.materials];
    });
    return joinedPages;
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      <FlatList
        data={data ? joinPageArrays(data.pages) : []}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ListItem
            cardAuthorName={item.author.details.publicName}
            cardImageLink={item.firstPreviewImage.watermarked}
            cardPrice={item.price.toString()}
            cardTitle={item.title}
            description={item.description}
          />
        )}
        ListEmptyComponent={<ActivityIndicator />}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          loadNext();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  searchBar: {
    marginBottom: 16,
  },
});
