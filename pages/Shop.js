import { SafeAreaView, Text, View } from "react-native";
import { STYLES } from "../styles/styles";
import ShopCard from "../components/ShopCard";

export default Shop = () => {
    const buy = (name) => {
        console.log("Bought " + name);
    }

    return (
        <SafeAreaView>
            <Text style={STYLES.title}>Shop</Text>
            <ShopCard name="Dark Mode" price={100} callback={buy} />
        </SafeAreaView>
    );
}