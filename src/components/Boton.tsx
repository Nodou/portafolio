import { Pressable, StyleSheet, Text, type ViewStyle } from 'react-native';
import { colors, radius, spacing } from '../theme';

type Props = {
  titulo: string;
  onPress: () => void;
  variante?: 'principal' | 'secundario';
  style?: ViewStyle;
};

export function Boton({ titulo, onPress, variante = 'principal', style }: Props) {
  const secundario = variante === 'secundario';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.boton,
        secundario ? styles.secundario : styles.principal,
        pressed && { opacity: 0.7 },
        style,
      ]}
      accessibilityRole="button"
      accessibilityLabel={titulo}
    >
      <Text style={[styles.texto, secundario ? styles.textoSecundario : styles.textoPrincipal]}>
        {titulo}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    paddingVertical: 12,
    paddingHorizontal: spacing.md,
    borderRadius: radius.sm,
    alignItems: 'center',
    borderWidth: 1,
  },
  principal: { backgroundColor: colors.primary, borderColor: colors.primary },
  secundario: { backgroundColor: '#FFFFFF', borderColor: colors.primary },
  texto: { fontSize: 15, fontWeight: '600' },
  textoPrincipal: { color: '#FFFFFF' },
  textoSecundario: { color: colors.primary },
});
