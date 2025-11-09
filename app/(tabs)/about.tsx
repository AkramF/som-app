import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Users, Mail, Globe, Heart } from 'lucide-react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <<Users size={48} color="#ee1b21" strokeWidth={2} />          >
        </View>
        <Text style={styles.title}>Special Olympics Morocco</Text>
        <Text style={styles.subtitle}>
          Retrouvez toutes les informations importantes
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Calendar size={24} color="#ee1b21" />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Date de l'événement</Text>
          <Text style={styles.cardText}>À définir</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <MapPin size={24} color="#ee1b21" />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Lieu</Text>
          <Text style={styles.cardText}>À définir</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Users size={24} color="#ee1b21" />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Organisateurs</Text>
          <Text style={styles.cardText}>À définir</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>À propos de l'application</Text>
        <Text style={styles.sectionText}>
          Cette application vous permet de consulter facilement toutes les
          brochures et catalogues de l'événement. Parcourez les documents
          disponibles dans l'onglet Documents.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2420',
  },
  content: {
    padding: 24,
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(238, 27, 33, 0.1)',
    borderWidth: 2,
    borderColor: '#ee1b21',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#d4cfc9',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#3d3530',
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#ee1b21',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(238, 27, 33, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#d4cfc9',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
  },
  section: {
    marginTop: 32,
    backgroundColor: '#3d3530',
    borderRadius: 12,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#ee1b21',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 15,
    color: '#d4cfc9',
    lineHeight: 22,
  },
});
