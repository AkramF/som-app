import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FileText, BookOpen } from 'lucide-react-native';

export default function DemoScreen() {
  const demoDocuments = [
    {
      id: '1',
      title: 'Programme de l\'événement',
      description: 'Découvrez le programme complet',
      category: 'programme',
    },
    {
      id: '2',
      title: 'Présentation Special Olympics',
      description: 'En savoir plus sur notre organisation',
      category: 'presentation',
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Documents Disponibles</Text>
        <Text style={styles.subtitle}>Version de démonstration</Text>
      </View>

      {demoDocuments.map((doc) => (
        <TouchableOpacity key={doc.id} style={styles.card} activeOpacity={0.7}>
          <View style={styles.iconContainer}>
            {doc.category === 'programme' ? (
              <BookOpen size={28} color="#ee1b21" />
            ) : (
              <FileText size={28} color="#ee1b21" />
            )}
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{doc.title}</Text>
            <Text style={styles.cardDescription}>{doc.description}</Text>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{doc.category.toUpperCase()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Mode Démonstration</Text>
        <Text style={styles.infoText}>
          Cette version utilise des données de test. Connectez la base de données Supabase
          pour afficher les vrais documents.
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
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#d4cfc9',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#3d3530',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#ee1b21',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(238, 27, 33, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#d4cfc9',
    marginBottom: 10,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(238, 27, 33, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ee1b21',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ee1b21',
  },
  infoBox: {
    marginTop: 24,
    backgroundColor: 'rgba(238, 27, 33, 0.1)',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(238, 27, 33, 0.3)',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ee1b21',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#d4cfc9',
    lineHeight: 20,
  },
});
