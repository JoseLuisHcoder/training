

import * as React from 'react';
import * as RN from 'react-native';
import EmojiPicker from 'rn-emoji-keyboard';

export default function  Add() {
    const [isOpen, setisOpen] = React.useState(true)
    const [newItem, setNewItem] = React.useState({
        emoji:'#',
        name:'',
        price: 0,
        isSold: false,
        createAt: new Date(),

    })
  const handlePick = (emojiObject) => {
    setNewItem({
        ...newItem,
        emoji: emojiObject.emoji,
    });
  }

  return (
    <RN.View style={styles.container}>
        <RN.Text>Sell a new product</RN.Text>
        <RN.Text>{newItem.emoji}</RN.Text>
        {/* <EmojiPicker 
           onEmojiSelected={handlePick}
           open={isOpen}
           onClose={() => setisOpen(false)}
        /> */}
    </RN.View>
  )
}
const styles = RN.StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        
    }
})
