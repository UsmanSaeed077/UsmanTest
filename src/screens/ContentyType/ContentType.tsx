import { View, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import AppHeader from '../../components/AppHeaders/AppHeaders'
import LANG from '../../assets/translations/en.json'
import { AppImages } from '../../constants/AppImages'
import LargeText from '../../components/AppText/LargeText'
import NormalText from '../../components/AppText/NormalText'
import SmallText from '../../components/AppText/SmallText'
import { AppFonts } from '../../constants/AppFonts'
import { funList, topicList } from '../../services/databaseList'
import TopicChips from './components/TopicChips'
import AppButton from '../../components/Buttons/AppButton'
import AppSlider from '../../components/Slider/AppSlider'
import CustomStepper from '../../components/Stepper/CustomStepper'
import AppDropdown from '../../components/Dropdown/AppDropdown'
import { filterContentList } from '../../utils/helpers/Helpers'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ContentType = () => {

    const [selectedTopic, setSelectedTopic] = useState<TopicInterface>({ id: 1, title: "Fun" })
    const [selectedTopicContentItems, setSelectedTopicContentItems] = useState<{}[]>(funList)

    return (
        <View style={styles.container}>
            <AppHeader
                title={LANG.ContentType.mediaManagement}
                subTitle={LANG.ContentType.draftCompaign}
            />
            <KeyboardAwareScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >

                {/* stepper container using image*/}
                {/* hide this component and unhide the next component to use the custom stepper */}

                <View style={styles.stepperBox}>
                    <Image
                        source={AppImages.steperFrame}
                        style={styles.stepperImage}
                        resizeMode='contain'
                    />
                </View>

                {/* designed custom stepper it is exact match with figma but curved between images are missing */}
                {/* unhide the below code to view the custom stepper */}

                {/* <View style={{ marginTop: 20 }}>
                    <CustomStepper progress={3} />
                </View> */}

                <View style={styles.contentContainer}>

                    {/* content type header */}
                    <View style={styles.contentTypeHeader}>
                        <LargeText text={LANG.ContentType.contentType} customStyle={styles.headingStyle} />
                        <SmallText text={LANG.ContentType.contentsThatBestFit} customStyle={styles.subTitleStyle} />
                    </View>

                    {/*  */}
                    <View style={styles.contentCreating}>
                        <NormalText
                            text={LANG.ContentType.whichTypeOf + " " + LANG.ContentType.contentRUCreating}
                            customStyle={{ fontFamily: AppFonts.Poppins.medium }}
                        />

                        {/* topic list item */}
                        <View style={styles.topicListBox}>
                            {topicList?.map((item, index) => (
                                <TopicChips
                                    key={index}
                                    item={item}
                                    index={index}
                                    selectedItem={selectedTopic}
                                    onPress={(item: TopicInterface) => {
                                        console.log("\n\nselected value: ", item.title)
                                        setSelectedTopic(item)
                                        const newContentList = filterContentList(item.title)
                                        setSelectedTopicContentItems(newContentList)
                                    }}
                                />
                            ))}
                        </View>
                    </View>

                    {/*  */}
                    <View style={styles.contentCreating}>
                        <NormalText
                            text={LANG.ContentType.whichTypeOf + ` "${selectedTopic.title}" ` + LANG.ContentType.contentRUCreating}
                            customStyle={{ fontFamily: AppFonts.Poppins.medium }}
                        />
                    </View>

                    {/* dropdown */}
                    <AppDropdown data={selectedTopicContentItems} />



                    {/* slider component */}
                    <View style={styles.sliderContainer}>
                        <NormalText
                            text={LANG.ContentType.setNumOfOutputText}
                            customStyle={{ fontFamily: AppFonts.Poppins.medium }}
                        />

                        <AppSlider minValue={100} maxValue={1000} />
                    </View>

                    {/* next button */}
                    <AppButton disabled={true} text={LANG.ContentType.next} onPress={() => { }} />
                </View>
            </KeyboardAwareScrollView>

        </View>
    )
}

export default ContentType