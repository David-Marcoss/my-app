import { Text } from "@react-navigation/elements";
import { useRoute } from "@react-navigation/native";
import { TRouteProps } from "../Routes";

export default function DetailScreen() {
  const { params } = useRoute<TRouteProps<"details">>();

  return <Text>Detail rate: {params.rate}</Text>;
}
