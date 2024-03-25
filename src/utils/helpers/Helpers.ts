import { educationList, factsList, funList, investmentList, newsList, sportsList } from "../../services/databaseList";

export const filterContentList = (key: string) => {
    let returnList
    switch (key) {
        
        case "Fun":
            returnList = funList
            console.log("\n\nswitch value: ", key)
            break;

        case "Education":
            returnList = educationList
            console.log("\n\nswitch value: ", key)
            break;

        case "Sports":
            returnList = sportsList
            console.log("\n\nswitch value: ", key)
            break;

        case "News":
            returnList = newsList
            break;

        case "Investment":
            returnList = investmentList
            break;

        case "Facts":
            returnList = factsList
            break;

        default:
            returnList = funList
            break;
    }

    return returnList
}