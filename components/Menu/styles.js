
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    menuItems:{
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,

    },

    icon:{
        color:"white"
    },

    menuText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    textTransform: "uppercase",
    },

    menuRow: {
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
    },

    menuTextBox: {
        flexGrow: 1,

    },
    arrowIcon: {
        color: "#4d4d4e"
    },
    subTitle: {
        color: "grey",
        fontSize: 14,
        marginLeft: 15,
        

    }
        


})

export default styles;