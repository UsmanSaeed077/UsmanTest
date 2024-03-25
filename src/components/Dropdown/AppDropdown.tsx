import { View, Text, Image } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import LANG from '../../assets/translations/en.json'
import { AppImages } from '../../constants/AppImages';
import { styles } from './styles';
import { AppFonts } from '../../constants/AppFonts';

interface Props {
    data: {}[]
}

const AppDropdown = ({ data }: Props) => {
    const [selected, setSelected] = React.useState("");

    return (
        <SelectList
            setSelected={setSelected}
            data={data}
            save="value"
            placeholder={LANG.ContentType.select}
            searchPlaceholder={LANG.ContentType.search}
            searchicon={<View />}
            fontFamily={AppFonts.Poppins.regular}
            arrowicon={
                <Image
                    source={AppImages.chevronDown}
                    resizeMode='contain'
                    style={styles.arrowIcon}
                />
            }
            closeicon={
                <Image
                    source={AppImages.chevronDown}
                    resizeMode='contain'
                    style={[styles.arrowIcon, { transform: [{ rotate: '180deg' }] }]}
                />
            }
            boxStyles={styles.boxStyle}
            dropdownStyles={styles.dropdownStyles}
            dropdownTextStyles={styles.dropdownTextStyles}
            inputStyles={styles.inputStyles}
        />
    )
}

export default AppDropdown