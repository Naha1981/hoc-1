import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  TextInput,
  Linking,
  Alert,
  Platform,
} from "react-native";
import * as Haptics from "expo-haptics";
import { useColors } from "@/hooks/useColors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollViewCompat } from "@/components/KeyboardAwareScrollViewCompat";

type Status = "idle" | "sending" | "sent";

export default function RequestScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    role: "",
    org: "",
    email: "",
    challenge: "",
  });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.org || !form.role || !form.challenge) {
      Alert.alert("Missing fields", "Please fill in all fields before submitting.");
      return;
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setStatus("sending");
    const subject = encodeURIComponent(`Review Request — ${form.org || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nRole: ${form.role}\nOrganisation: ${form.org}\nEmail: ${form.email}\n\nChallenge:\n${form.challenge}`
    );
    const url = `mailto:info@hoc.co.za?subject=${subject}&body=${body}`;
    try {
      await Linking.openURL(url);
      setStatus("sent");
    } catch {
      setStatus("idle");
      Alert.alert("Error", "Could not open your email client. Please email info@hoc.co.za directly.");
    }
  };

  const update = (field: keyof typeof form) => (val: string) =>
    setForm((f) => ({ ...f, [field]: val }));

  const s = makeStyles(colors);

  return (
    <KeyboardAwareScrollViewCompat
      style={[s.scroll, { backgroundColor: colors.background }]}
      contentContainerStyle={[
        s.container,
        { paddingTop: topPad + 20, paddingBottom: bottomPad + 100 },
      ]}
      keyboardShouldPersistTaps="handled"
      bottomOffset={20}
    >
      <Text style={s.sectionLabel}>REQUEST REVIEW</Text>
      <Text style={s.heading}>This is not a contact form.</Text>
      <Text style={s.subText}>
        We work with organisations ready to integrate inclusion into their systems — not those exploring ideas. Ask yourself: are you ready to restructure how your institution approaches inclusion?
      </Text>

      {/* Expectations */}
      <View style={[s.expectCard, { backgroundColor: colors.surface }]}>
        <Text style={s.expectLabel}>WHAT TO EXPECT</Text>
        {[
          "We review every submission carefully — not automated.",
          "If your organisation aligns, you'll hear back within 24–48 hours.",
          "We only take on work where we can deliver measurable, structural change.",
        ].map((item, i) => (
          <View key={i} style={s.expectItem}>
            <View style={[s.expectDot, { backgroundColor: colors.accent }]} />
            <Text style={[s.expectText, { color: colors.mutedForeground }]}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Form */}
      <View style={s.formGroup}>
        <Text style={[s.label, { color: colors.mutedForeground }]}>YOUR NAME *</Text>
        <TextInput
          style={[s.input, { borderColor: colors.border, backgroundColor: colors.card, color: colors.foreground }]}
          value={form.name}
          onChangeText={update("name")}
          placeholder="Full name"
          placeholderTextColor={colors.mutedForeground}
          returnKeyType="next"
          testID="input-name"
        />
      </View>

      <View style={s.formGroup}>
        <Text style={[s.label, { color: colors.mutedForeground }]}>YOUR ROLE *</Text>
        <TextInput
          style={[s.input, { borderColor: colors.border, backgroundColor: colors.card, color: colors.foreground }]}
          value={form.role}
          onChangeText={update("role")}
          placeholder="e.g. Head of Diversity & Inclusion"
          placeholderTextColor={colors.mutedForeground}
          returnKeyType="next"
          testID="input-role"
        />
      </View>

      <View style={s.formGroup}>
        <Text style={[s.label, { color: colors.mutedForeground }]}>ORGANISATION *</Text>
        <TextInput
          style={[s.input, { borderColor: colors.border, backgroundColor: colors.card, color: colors.foreground }]}
          value={form.org}
          onChangeText={update("org")}
          placeholder="Company or institution name"
          placeholderTextColor={colors.mutedForeground}
          returnKeyType="next"
          testID="input-org"
        />
      </View>

      <View style={s.formGroup}>
        <Text style={[s.label, { color: colors.mutedForeground }]}>WORK EMAIL *</Text>
        <TextInput
          style={[s.input, { borderColor: colors.border, backgroundColor: colors.card, color: colors.foreground }]}
          value={form.email}
          onChangeText={update("email")}
          placeholder="your@organisation.com"
          placeholderTextColor={colors.mutedForeground}
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="next"
          testID="input-email"
        />
      </View>

      <View style={s.formGroup}>
        <Text style={[s.label, { color: colors.mutedForeground }]}>THE SYSTEMIC CHALLENGE *</Text>
        <TextInput
          style={[
            s.input,
            s.textarea,
            { borderColor: colors.border, backgroundColor: colors.card, color: colors.foreground },
          ]}
          value={form.challenge}
          onChangeText={update("challenge")}
          placeholder="Be specific. What isn't working? What outcome are you trying to achieve?"
          placeholderTextColor={colors.mutedForeground}
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          returnKeyType="done"
          testID="input-challenge"
        />
      </View>

      {/* Submit */}
      <Pressable
        style={({ pressed }) => [
          s.submitBtn,
          { backgroundColor: status === "sent" ? colors.accent : colors.primary },
          (pressed || status === "sending") && s.submitPressed,
        ]}
        onPress={handleSubmit}
        disabled={status === "sending"}
        testID="submit-button"
      >
        <Text
          style={[
            s.submitText,
            { color: status === "sent" ? colors.accentForeground : colors.primaryForeground },
          ]}
        >
          {status === "sent"
            ? "Opening your email client…"
            : status === "sending"
            ? "Opening…"
            : "Submit for Review"}
        </Text>
        {status === "idle" && (
          <Text style={[s.submitArrow, { color: colors.primaryForeground }]}>→</Text>
        )}
      </Pressable>

      <Text style={[s.directEmail, { color: colors.mutedForeground }]}>
        Or email{" "}
        <Text
          style={[s.emailLink, { color: colors.foreground }]}
          onPress={() => Linking.openURL("mailto:info@hoc.co.za")}
        >
          info@hoc.co.za
        </Text>{" "}
        directly.
      </Text>
    </KeyboardAwareScrollViewCompat>
  );
}

function makeStyles(colors: ReturnType<typeof import("@/hooks/useColors").useColors>) {
  return StyleSheet.create({
    scroll: { flex: 1 },
    container: { paddingHorizontal: 20 },

    sectionLabel: {
      fontSize: 10,
      fontFamily: "Inter_600SemiBold",
      color: colors.accent,
      letterSpacing: 2,
      marginBottom: 8,
      textTransform: "uppercase",
    },
    heading: {
      fontSize: 30,
      fontFamily: "Inter_700Bold",
      color: colors.foreground,
      lineHeight: 36,
      letterSpacing: -0.5,
      marginBottom: 12,
    },
    subText: {
      fontSize: 14,
      fontFamily: "Inter_400Regular",
      color: colors.mutedForeground,
      lineHeight: 21,
      marginBottom: 24,
    },

    expectCard: {
      borderRadius: colors.radius,
      padding: 18,
      marginBottom: 28,
    },
    expectLabel: {
      fontSize: 9,
      fontFamily: "Inter_600SemiBold",
      color: colors.accent,
      letterSpacing: 2,
      marginBottom: 12,
    },
    expectItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 10,
      marginBottom: 10,
    },
    expectDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      marginTop: 6,
      flexShrink: 0,
    },
    expectText: {
      fontSize: 13,
      fontFamily: "Inter_400Regular",
      lineHeight: 19,
      flex: 1,
    },

    formGroup: { marginBottom: 18 },
    label: {
      fontSize: 9,
      fontFamily: "Inter_600SemiBold",
      letterSpacing: 1.8,
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderRadius: colors.radius,
      paddingHorizontal: 14,
      paddingVertical: 12,
      fontSize: 14,
      fontFamily: "Inter_400Regular",
    },
    textarea: {
      height: 110,
      paddingTop: 12,
    },

    submitBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      borderRadius: 100,
      paddingVertical: 16,
      paddingHorizontal: 28,
      marginTop: 8,
      marginBottom: 14,
    },
    submitPressed: { opacity: 0.8 },
    submitText: {
      fontSize: 15,
      fontFamily: "Inter_600SemiBold",
      letterSpacing: 0.3,
    },
    submitArrow: { fontSize: 15 },

    directEmail: {
      fontSize: 12,
      fontFamily: "Inter_400Regular",
      textAlign: "center",
    },
    emailLink: {
      textDecorationLine: "underline",
      fontFamily: "Inter_500Medium",
    },
  });
}
