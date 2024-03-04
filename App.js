import React from "react";
import { StyleSheet,StatusBar,SafeAreaView } from "react-native";
import Header from "./AlbumDetailComponent/src/components/Header";
import Albumlist from "./AlbumDetailComponent/src/components/AlbumList";
const App=()=>{
  return(
    <SafeAreaView style={styles.contauner}>
      <StatusBar />
      <Header />
      <Albumlist />
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
});
export default App;