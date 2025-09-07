import { Text, View } from "react-native";
import "./global.css";
 
export default function index() {
  return (
     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
<Text className="font-quicksand-bold text-2xl text-primary">
  This is Quicksand Bold
</Text>

<Text className="font-quicksand text-lg text-dark-100">
  This is Quicksand Regular
</Text>

    </View>
  );
}