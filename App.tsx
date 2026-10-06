import { View } from 'react-native';
import CardProduto from './src/components/CardProduto';

export default function App() {
  return (
    <View>
      <CardProduto
        nome="Camiseta"
        preco="R$ 59,90"
      />

      <CardProduto
        nome="Tênis"
        preco="R$ 199,90"
      />
    </View>
  );
}