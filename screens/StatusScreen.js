import React from 'react';
import {StyleSheet, View , ScrollView} from 'react-native';
import Header from '../Components/Header'
import PartiesResultContainer from '../Components/PartiesResultContainer'

const StatusScreen = (props) => {
    return (
        <View style={styles.container}>
          <Header navigation={props.navigation} screenToGo='VoteScreen' />
          <ScrollView>
            <PartiesResultContainer />
          </ScrollView>
        </View>
    );
}
export default StatusScreen;

/* ..styles.. */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 1000,
    justifyContent: 'flex-start',
    backgroundColor: '#33313b',
  },
});

