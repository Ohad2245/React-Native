import React,{useRef, useMemo, useState} from 'react';
import { StyleSheet, Text, View ,FlatList, SafeAreaView} from 'react-native';
import ListItem from './components/ListItem';
import Chart from './components/Chart';
import {SAMPLE_DATA} from './assets/data/sampleData'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';


const ListHeader = () => (
  <>
  <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Markets</Text>
    </View>
  <View style={styles.divider} />
</>
)

export default function App() {
  const [selectedCoinData , setSelectedCoinData] = useState(null);
   
   const bottomSheetModalRef = useRef(null);

   const snapPoints = useMemo(() => ['50%'], []);
 
   const openModal = (item) => {
     setSelectedCoinData(item);
     bottomSheetModalRef.current.present();
   }

  return (
    <BottomSheetModalProvider>
    <SafeAreaView style={styles.container}>
     <FlatList
     keyExtractor={(item) => item.id}
     data={SAMPLE_DATA}
     renderItem={({ item }) => (
       <ListItem
          name={item.name}
          symbol={item.symbol}
          currentPrice={item.current_price}
          priceChancePercentage7d={SAMPLE_DATA[0].price_change_percentage_7d_in_currency}
          logoUrl={item.image}
          onPress={()=>openModal(item)}
        />
      )}
      ListHeaderComponent={<ListHeader />}
    />
    </SafeAreaView>


    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      style={styles.bottomSheet}
   >
     {selectedCoinData ? (
   <Chart 
    currentPrice={selectedCoinData.current_price}
    logoUrl={selectedCoinData.image}
    name={selectedCoinData.name}
    symbol={selectedCoinData.symbol}
    priceChancePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
    sparkline={selectedCoinData.sparkline_in_7d.price}
   />
     )
    : null }
    </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  titleWrapper:{
    marginTop:20,
    paddingHorizontal:16,
  },
  largeTitle:{
    fontSize:24,
    fontWeight:"bold",
  },
  divider:{
    height: StyleSheet.hairlineWidth,
    backgroundColor:'gray',
    marginHorizontal:16,
    marginTop:16,
  },
  bottomSheet:{
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:-4, 
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,
  }


});
