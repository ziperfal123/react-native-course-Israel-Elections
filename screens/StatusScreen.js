import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Header from '../Components/Header'
import PartiesResultContainer from '../Components/PartiesResultContainer'

/* ..styles.. */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 1000,
    justifyContent: 'flex-start',
    backgroundColor: '#33313b'
  }
})

const StatusScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} screenToGo="VoteScreen" />
      <ScrollView>
        <PartiesResultContainer />
      </ScrollView>
    </View>
  )
}

export default StatusScreen
