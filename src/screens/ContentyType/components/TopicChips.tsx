import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import THEME from "../../../assets/theme/dark.json"
import SmallText from "../../../components/AppText/SmallText";

interface Props {
    item: TopicInterface,
    index: number,
    selectedItem: TopicInterface,
    onPress: CallableFunction
}

const TopicChips = ({ item, index, selectedItem, onPress }: Props) => {

    const onPressChip = () => {
        if (selectedItem?.id != item.id) {
            onPress(item)
        }
    }

    return (
        <TouchableOpacity key={index}
            disabled={selectedItem?.id === item.id}
            onPress={() => onPressChip()}
            activeOpacity={0.7}
            style={[styles.container,
            {
                backgroundColor: selectedItem?.id == item?.id ? THEME.button.primary : 'transparent',
                borderColor: selectedItem?.id == item?.id ? THEME.button.primary : THEME.border.secondary
            }]}
        >
            <SmallText text={item?.title} customStyle={{ lineHeight: 20 }} />
        </TouchableOpacity>
    );
};

export default TopicChips;

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: THEME.border.secondary,
        paddingHorizontal: 18,
        paddingVertical: 12,
        marginVertical: 6,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})