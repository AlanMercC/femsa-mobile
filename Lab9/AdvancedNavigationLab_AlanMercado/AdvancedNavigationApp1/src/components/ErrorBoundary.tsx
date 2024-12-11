import React, { Component, ReactNode } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
  modalVisible: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      modalVisible: false, 
    };
  }
  

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    
    return { hasError: true, error: error, errorInfo: null, modalVisible: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    
    console.log('Capturado un error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleResetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null, modalVisible: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Modal
          visible={this.state.modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={this.handleResetError} 
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.errorText}>¡Algo salió mal!</Text>
              {this.state.error && (
                <Text style={styles.errorDetails}>{this.state.error.message}</Text>
              )}
              <Button title="Reintentar" onPress={this.handleResetError} />
            </View>
          </View>
        </Modal>
      );
    }

    return this.props.children; // Renderiza los hijos si no hay error
  }
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro translúcido
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  errorDetails: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
});

export default ErrorBoundary;