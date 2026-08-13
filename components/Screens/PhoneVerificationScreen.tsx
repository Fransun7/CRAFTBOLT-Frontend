import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import CountryCodePickerModal, { Country } from '../components/CountryCodePickerModal';

export default function PhoneVerificationScreen() {
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: 'Nigeria',
    code: 'NG',
    dialCode: '+234',
    flag: '🇳🇬',
  });
  const [phoneNumber, setPhoneNumber] = useState<string>('701 234 5678');
  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false);

  const handleSendCode = () => {
    console.log(`Sending code to ${selectedCountry.dialCode} ${phoneNumber}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.innerContainer}
      >
        {/* Top Content Area */}
        <View style={styles.topContent}>
          {/* Header Navigation */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
              <ChevronLeft size={20} color="#000" strokeWidth={1.5} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Sign Up</Text>
          </View>

          {/* Heading & Subtitle */}
          <View style={styles.textGroup}>
            <Text style={styles.title}>Enter your phone number</Text>
            <Text style={styles.subtitle}>
              Enter your phone number to get a verification code.
            </Text>
          </View>

          {/* Input Fields */}
          <View style={styles.inputRow}>
            {/* Country Code Trigger Button */}
            <TouchableOpacity
              style={styles.countryCodeButton}
              activeOpacity={0.7}
              onPress={() => setIsPickerVisible(true)}
            >
              <Text style={styles.countryCodeText}>{selectedCountry.dialCode}</Text>
            </TouchableOpacity>

            {/* Phone Number Input */}
            <TextInput
              style={[styles.input, styles.phoneInput]}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="701 234 5678"
              placeholderTextColor="#A0A0A0"
              keyboardType="phone-pad"
            />
          </View>

          {/* Action Button */}
          <TouchableOpacity
            style={styles.sendButton}
            activeOpacity={0.8}
            onPress={handleSendCode}
          >
            <Text style={styles.buttonText}>Send Code</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Area */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text style={styles.signUpLink}>Sign Up</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>

      {/* Country Picker Modal */}
      <CountryCodePickerModal
        visible={isPickerVisible}
        selectedCode={selectedCountry.dialCode}
        onSelect={(country) => setSelectedCountry(country)}
        onClose={() => setIsPickerVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'android' ? 24 : 8,
    paddingBottom: 16,
  },
  topContent: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  textGroup: {
    marginBottom: 28,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111111',
    letterSpacing: -0.3,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: '#666666',
    fontWeight: '400',
  },
  inputRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  countryCodeButton: {
    width: 80,
    height: 56,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryCodeText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111111',
  },
  input: {
    height: 56,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
    fontWeight: '600',
    color: '#111111',
  },
  phoneInput: {
    flex: 1,
  },
  sendButton: {
    height: 56,
    backgroundColor: '#111111',
    borderRadius: 28,
    justify: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  footerText: {
    fontSize: 13,
    color: '#666666',
  },
  signUpLink: {
    fontWeight: '700',
    color: '#111111',
  },
});