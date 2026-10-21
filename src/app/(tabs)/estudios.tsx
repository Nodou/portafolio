import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../../components/Card';
import { estudios } from '../../data/portfolio';
import { colors, spacing } from '../../theme';

export default function EstudiosScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.titulo}>Mis estudios</Text>

        {estudios.map((e) => (
          <Card key={e.id}>
            <View style={styles.fila}>
              <Ionicons name={e.icon} size={18} color={colors.primary} />
              <Text style={styles.itemTitulo}>{e.titulo}</Text>
            </View>
            <Text style={styles.itemInstitucion}>{e.institucion}</Text>
            <Text style={styles.itemPeriodo}>{e.periodo}</Text>
            <Text style={styles.itemDescripcion}>{e.descripcion}</Text>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },
  titulo: { fontSize: 20, fontWeight: 'bold', color: colors.text, marginBottom: spacing.md },
  fila: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  itemTitulo: { fontSize: 16, fontWeight: 'bold', color: colors.text, flex: 1 },
  itemInstitucion: { fontSize: 14, color: colors.text, marginTop: 2 },
  itemPeriodo: { fontSize: 13, color: colors.textMuted, marginTop: 2 },
  itemDescripcion: { fontSize: 14, lineHeight: 20, color: colors.textMuted, marginTop: 6 },
});
