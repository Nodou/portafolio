import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../../components/Card';
import { habilidadesBlandas, habilidadesTecnicas } from '../../data/portfolio';
import { colors, radius, spacing } from '../../theme';

export default function HabilidadesScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.titulo}>Mis habilidades</Text>

        <Card>
          <Text style={styles.subtitulo}>Habilidades técnicas</Text>
          {habilidadesTecnicas.map((h) => (
            <View key={h.id} style={styles.skillBlock}>
              <Text style={styles.skillNombre}>{h.nombre}</Text>
              <View style={styles.barraFondo}>
                <View style={[styles.barraRelleno, { width: `${h.nivel}%` }]} />
              </View>
            </View>
          ))}
        </Card>

        <Card>
          <Text style={styles.subtitulo}>Habilidades blandas</Text>
          {habilidadesBlandas.map((h) => (
            <Text key={h.id} style={styles.blanda}>
              - {h.nombre}
            </Text>
          ))}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },
  titulo: { fontSize: 20, fontWeight: 'bold', color: colors.text, marginBottom: spacing.md },
  subtitulo: { fontSize: 15, fontWeight: 'bold', color: colors.text, marginBottom: spacing.md },
  skillBlock: { marginBottom: spacing.md },
  skillNombre: { fontSize: 14, color: colors.text, marginBottom: 4 },
  barraFondo: {
    height: 8,
    borderRadius: radius.sm,
    backgroundColor: colors.chip,
    overflow: 'hidden',
  },
  barraRelleno: { height: '100%', backgroundColor: colors.primary },
  blanda: { fontSize: 15, color: colors.text, lineHeight: 24 },
});
