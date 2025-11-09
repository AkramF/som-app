import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import { Users, X } from 'lucide-react-native';
import { Asset } from 'expo-asset';
import PDFViewer from '@/components/PDFViewer';

export default function HomeScreen() {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);
  const [pdfTitle, setPdfTitle] = useState<string>('');

  const openPDF = async (assetModule: number, title: string) => {
    const asset = Asset.fromModule(assetModule);
    await asset.downloadAsync();
    setSelectedPDF(asset.localUri || asset.uri);
    setPdfTitle(title);
  };

  const closePDF = () => {
    setSelectedPDF(null);
    setPdfTitle('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <View style={styles.iconCircle}>
              <Users size={80} color="#ee1b21" strokeWidth={1.5} />
            </View>
            <Text style={styles.logoText}>Special Olympics</Text>
            <Text style={styles.logoSubtext}>Morocco</Text>
          </View>

          <Text style={styles.subtitle}>
            Choisissez le document à consulter
          </Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => openPDF(require('../assets/documents/presentation.pdf'), 'Programme')}
              activeOpacity={0.8}>
              <Text style={styles.buttonText}>PROGRAMME</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => openPDF(require('../assets/documents/présentation.pdf'), 'Présentation')}
              activeOpacity={0.8}>
              <Text style={styles.buttonText}>PRÉSENTATION</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal
        visible={selectedPDF !== null}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closePDF}>
        {selectedPDF && (
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{pdfTitle}</Text>
              <TouchableOpacity onPress={closePDF} style={styles.closeButton}>
                <X size={24} color="#ffffff" />
              </TouchableOpacity>
            </View>
            <PDFViewer url={selectedPDF} />
          </View>
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#2a2420',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60,
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  iconCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(238, 27, 33, 0.1)',
    borderWidth: 3,
    borderColor: '#ee1b21',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },
  logoSubtext: {
    fontSize: 28,
    fontWeight: '600',
    color: '#d4cfc9',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: '#d4cfc9',
    fontStyle: 'italic',
    marginBottom: 80,
    textAlign: 'center',
    fontWeight: '600',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 60,
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    flex: 1,
    maxWidth: 300,
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderWidth: 2,
    borderColor: '#8b5c52',
    borderRadius: 24,
    backgroundColor: 'rgba(139, 92, 82, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#2a2420',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ee1b21',
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 16,
    elevation: 4,
  },
  modalTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginRight: 16,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
