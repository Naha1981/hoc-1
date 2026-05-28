import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import { useColors } from "@/hooks/useColors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const steps = [
  { n: "01", t: "Diagnose", d: "Audit current systems. Identify where inclusion fails." },
  { n: "02", t: "Design", d: "Architect how SASL integrates into your organisation." },
  { n: "03", t: "Scale", d: "Optimise, measure, and expand impact." },
];

const services = [
  {
    title: "SASL-Inclusive Brand Strategy",
    body: "We help brands integrate South African Sign Language meaningfully into campaigns, advertising, social media, events, storytelling, customer experience, and brand culture.",
  },
  {
    title: "Accessibility, Inclusivity & Creative Integration",
    body: "We assess organisational accessibility across customer experience, communication systems, digital platforms, campaigns, events, and institutional culture.",
  },
  {
    title: "Institutional & Curriculum Development",
    body: "We provide Deaf education strategy, literacy development, curriculum alignment, academic consultation, teacher development, and educational resource design.",
  },
  {
    title: "SASL Training & Cultural Competency",
    body: "We offer training for corporate teams, customer-facing staff, hospitality environments, retail spaces, universities, and public institutions.",
  },
];

export default function ServicesScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : 0;

  const handleCTA = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/(tabs)/request");
  };

  const s = makeStyles(colors);

  return (
    <ScrollView
      style={[s.scroll, { backgroundColor: colors.background }]}
      contentContainerStyle={[
        s.container,
        { paddingTop: topPad + 20, paddingBottom: bottomPad + 100 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={s.sectionLabel}>SERVICES</Text>
      <Text style={s.heading}>We build inclusion into systems. Not around them.</Text>

      {/* Process steps */}
      <Text style={[s.subLabel, { color: colors.mutedForeground }]}>Our process</Text>
      <View style={s.stepsGrid}>
        {steps.map((s_) => (
          <View
            key={s_.n}
            style={[stepsStyle.card, { backgroundColor: colors.card, borderColor: colors.border }]}
          >
            <Text style={[stepsStyle.num, { color: colors.accent }]}>{s_.n}</Text>
            <Text style={[stepsStyle.title, { color: colors.foreground }]}>{s_.t}</Text>
            <Text style={[stepsStyle.desc, { color: colors.mutedForeground }]}>{s_.d}</Text>
          </View>
        ))}
      </View>

      {/* Service cards */}
      <Text style={[s.subLabel, { color: colors.mutedForeground }]}>What we do</Text>
      {services.map((svc, i) => (
        <View
          key={i}
          style={[s.svcCard, { backgroundColor: colors.card, borderColor: colors.border }]}
        >
          <View style={s.svcHeader}>
            <Text style={[s.svcTitle, { color: colors.foreground }]}>{svc.title}</Text>
            <View style={[s.svcArrow, { backgroundColor: colors.foreground }]}>
              <Text style={[s.svcArrowText, { color: colors.primaryForeground }]}>↗</Text>
            </View>
          </View>
          <Text style={[s.svcBody, { color: colors.mutedForeground }]}>{svc.body}</Text>
        </View>
      ))}

      {/* CTA */}
      <Pressable
        style={({ pressed }) => [s.ctaBtn, { backgroundColor: colors.primary }, pressed && s.ctaBtnPressed]}
        onPress={handleCTA}
      >
        <Text style={[s.ctaText, { color: colors.primaryForeground }]}>Get a Quote</Text>
        <Text style={[s.ctaArrow, { color: colors.primaryForeground }]}>→</Text>
      </Pressable>
    </ScrollView>
  );
}

const stepsStyle = StyleSheet.create({
  card: {
    width: "48%",
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 8,
  },
  num: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 4,
  },
  desc: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    lineHeight: 17,
  },
});

function makeStyles(colors: ReturnType<typeof import("@/hooks/useColors").useColors>) {
  return StyleSheet.create({
    scroll: { flex: 1 },
    container: { paddingHorizontal: 20 },

    sectionLabel: {
      fontSize: 10,
      fontFamily: "Inter_600SemiBold",
      color: colors.accent,
      letterSpacing: 2,
      marginBottom: 10,
      textTransform: "uppercase",
    },
    heading: {
      fontSize: 28,
      fontFamily: "Inter_700Bold",
      color: colors.foreground,
      lineHeight: 34,
      letterSpacing: -0.5,
      marginBottom: 32,
    },
    subLabel: {
      fontSize: 11,
      fontFamily: "Inter_500Medium",
      letterSpacing: 1.5,
      textTransform: "uppercase",
      marginBottom: 14,
    },

    stepsGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginBottom: 32,
    },

    svcCard: {
      borderRadius: 12,
      borderWidth: 1,
      padding: 20,
      marginBottom: 12,
    },
    svcHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 10,
      gap: 12,
    },
    svcTitle: {
      fontSize: 18,
      fontFamily: "Inter_600SemiBold",
      letterSpacing: -0.3,
      flex: 1,
    },
    svcArrow: {
      width: 32,
      height: 32,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
    },
    svcArrowText: {
      fontSize: 14,
    },
    svcBody: {
      fontSize: 14,
      fontFamily: "Inter_400Regular",
      lineHeight: 21,
    },

    ctaBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      borderRadius: 100,
      paddingVertical: 16,
      paddingHorizontal: 28,
      marginTop: 8,
    },
    ctaBtnPressed: { opacity: 0.85 },
    ctaText: {
      fontSize: 15,
      fontFamily: "Inter_600SemiBold",
      letterSpacing: 0.3,
    },
    ctaArrow: { fontSize: 15 },
  });
}
