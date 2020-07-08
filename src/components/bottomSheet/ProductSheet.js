import React from 'react'
import SwipeableBottomSheet from '../react-swipeable-bottom-sheet/SwipeableBottomSheet';

export default function ProductSheet(props) {
    return (
        <SwipeableBottomSheet overflowHeight={0} {...props} style={{ zIndex: '100' }} bodyStyle={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px"}} >
            <div style={{ maxHeight: '90%', minHeight: "240px", padding: "20px"}}>
                {props.children}
            </div>
        </SwipeableBottomSheet>
    )
}
