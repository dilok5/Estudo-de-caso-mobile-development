import { Image, Text, View } from "react-native";
import { styles } from "./manDetailsStyles";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";

export type DetailsManItem = {
  images: string[];
  title: string;
  price: string;
  description: string;
};

export const DetailsMan = () => {
  const detailsMan = useSelector(
    (state: RootState) => state.detailsMan.details
  ) as DetailsManItem[];

  const item = detailsMan[0];

  return (
    <View style={styles.tela}>
      <Image 
        style={styles.imagem} 
        source={{ uri: item?.images[0] }} 
      />
      <Text style={styles.titulo}>{item?.title}</Text>
      <Text style={styles.preco}>R$ {item?.price}</Text>
      <Text style={styles.desc}>{item?.description}</Text>
    </View>
  );
};