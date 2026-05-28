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

const stats = [
  { value: "15+", label: "Years in the\nDeaf community" },
  { value: "4", label: "Continents of\ncollaboration" },
  { value: "100%", label: "Deaf-led\ndesign" },
];

const valueCards = [
  {
    k: "01",
    title: "Market Access",
    body: "Reach an underserved, high-value audience that competitors structurally cannot.",
  },
  {
    k: "02",
    title: "Innovation",
    body: "Deaf-led thinking reshapes how products, platforms, and systems are designed.",
  },
  {
    k: "03",
    title: "Growth",
    body: "Inclusion, when engineered correctly, drives measurable institutional outcomes.",
  },
];

const partners = [
  "MoonSport", "MTN", "SAMA Awards", "Darling Films",
  "Castle Milk Stout", "Lil-lets SA", "DeafTouch", "Sefako Makgatho Univ.",
];

export default function HomeScreen() {
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
      {/* Header Badge */}
      <View style={s.badge}>
        <View style={s.badgeDot} />
        <Text style={s.badgeText}>SASL-LED · DEAF-FOCUSED</Text>
      </View>

      {/* Hero */}
      <Text style={s.heroLine}>Inclusion</Text>
      <Text style={s.heroLine}>that works.</Text>
      <Text style={[s.heroLine, s.heroMuted]}>Strategy that grows.</Text>
      <Text style={[s.heroLine, s.heroAccent]}>SASL that transforms.</Text>

      <Text style={s.heroSub}>
        We don't run campaigns. We design systems that integrate South African Sign Language into institutions — at scale.
      </Text>

      {/* CTA */}
      <Pressable
        style={({ pressed }) => [s.ctaBtn, pressed && s.ctaBtnPressed]}
        onPress={handleCTA}
        testID="cta-button"
      >
        <Text style={s.ctaText}>Book a Strategy Call</Text>
        <Text style={s.ctaArrow}>→</Text>
      </Pressable>

      {/* Stats */}
      <View style={s.statsRow}>
        {stats.map((st, i) => (
          <View key={i} style={[s.statCard, { backgroundColor: colors.card }]}>
            <Text style={s.statValue}>{st.value}</Text>
            <Text style={s.statLabel}>{st.label}</Text>
          </View>
        ))}
      </View>

      {/* Positioning quote */}
      <View style={[s.quoteBlock, { backgroundColor: colors.surface }]}>
        <Text style={s.quoteText}>
          Most organisations approach inclusion as <Text style={s.quoteMuted}>visibility</Text>. That's why it <Text style={s.quoteBold}>fails</Text>. Inclusion is not messaging. It's <Text style={s.quoteAccentText}>infrastructure</Text>.
        </Text>
      </View>

      {/* Value cards */}
      <Text style={s.sectionLabel}>WHY THIS MATTERS</Text>
      <Text style={s.sectionHeading}>Executives invest in advantage, not awareness.</Text>
      {valueCards.map((c) => (
        <View key={c.k} style={[s.valueCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={s.valueNum}>{c.k}</Text>
          <Text style={s.valueTitle}>{c.title}</Text>
          <Text style={s.valueBody}>{c.body}</Text>
        </View>
      ))}

      {/* Partners */}
      <Text style={s.sectionLabel}>TRUSTED BY</Text>
      <View style={s.partnersGrid}>
        {partners.map((p) => (
          <View key={p} style={[s.partnerPill, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={s.partnerName}>{p}</Text>
          </View>
        ))}
      </View>

      {/* Problem */}
      <View style={[s.problemBlock, { backgroundColor: colors.foreground }]}>
        <Text style={s.problemLabel}>THE PROBLEM</Text>
        <Text style={s.problemHeading}>Current inclusion models are broken.</Text>
        {[
          "Sit outside core business systems",
          "Fail to reach Deaf audiences",
          "Deliver no measurable ROI",
          "Treat compliance as the ceiling",
        ].map((b, i) => (
          <View key={i} style={s.problemItem}>
            <Text style={s.problemNum}>0{i + 1}</Text>
            <Text style={s.problemText}>{b}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function makeStyles(colors: ReturnType<typeof import("@/hooks/useColors").useColors>) {
  return StyleSheet.create({
    scroll: { flex: 1 },
    container: { paddingHorizontal: 20 },

    badge: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      alignSelf: "flex-start",
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 100,
      paddingHorizontal: 12,
      paddingVertical: 6,
      backgroundColor: colors.card,
      marginBottom: 24,
    },
    badgeDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: colors.accent,
    },
    badgeText: {
      fontSize: 10,
      fontFamily: "Inter_600SemiBold",
      letterSpacing: 1.5,
      color: colors.mutedForeground,
    },

    heroLine: {
      fontSize: 44,
      fontFamily: "Inter_700Bold",
      color: colors.foreground,
      lineHeight: 50,
      letterSpacing: -1,
    },
    heroMuted: { color: colors.mutedForeground },
    heroAccent: { color: colors.foreground, marginBottom: 16 },

    heroSub: {
      fontSize: 15,
      fontFamily: "Inter_400Regular",
      color: colors.mutedForeground,
      lineHeight: 22,
      marginBottom: 28,
      maxWidth: 320,
    },

    ctaBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      backgroundColor: colors.primary,
      borderRadius: 100,
      paddingVertical: 16,
      paddingHorizontal: 28,
      marginBottom: 32,
    },
    ctaBtnPressed: { opacity: 0.85 },
    ctaText: {
      fontSize: 15,
      fontFamily: "Inter_600SemiBold",
      color: colors.primaryForeground,
      letterSpacing: 0.3,
    },
    ctaArrow: {
      fontSize: 15,
      color: colors.primaryForeground,
    },

    statsRow: {
      flexDirection: "row",
      gap: 10,
      marginBottom: 32,
    },
    statCard: {
      flex: 1,
      borderRadius: colors.radius,
      padding: 14,
      alignItems: "center",
      shadowColor: colors.foreground,
      shadowOpacity: 0.04,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 1,
    },
    statValue: {
      fontSize: 26,
      fontFamily: "Inter_700Bold",
      color: colors.foreground,
      letterSpacing: -0.5,
    },
    statLabel: {
      fontSize: 10,
      fontFamily: "Inter_400Regular",
      color: colors.mutedForeground,
      textAlign: "center",
      marginTop: 4,
      letterSpacing: 0.5,
      textTransform: "uppercase",
    },

    quoteBlock: {
      borderRadius: colors.radius,
      padding: 20,
      marginBottom: 32,
    },
    quoteText: {
      fontSize: 18,
      fontFamily: "Inter_400Regular",
      color: colors.foreground,
      lineHeight: 26,
    },
    quoteMuted: { color: colors.mutedForeground },
    quoteBold: {
      fontFamily: "Inter_700Bold",
      textDecorationLine: "underline",
    },
    quoteAccentText: {
      fontFamily: "Inter_700Bold",
      color: colors.accent,
    },

    sectionLabel: {
      fontSize: 10,
      fontFamily: "Inter_600SemiBold",
      color: colors.accent,
      letterSpacing: 2,
      marginBottom: 8,
      textTransform: "uppercase",
    },
    sectionHeading: {
      fontSize: 22,
      fontFamily: "Inter_700Bold",
      color: colors.foreground,
      lineHeight: 28,
      letterSpacing: -0.4,
      marginBottom: 20,
    },

    valueCard: {
      borderRadius: colors.radius,
      borderWidth: 1,
      padding: 20,
      marginBottom: 12,
    },
    valueNum: {
      fontSize: 11,
      fontFamily: "Inter_400Regular",
      color: colors.mutedForeground,
      marginBottom: 8,
    },
    valueTitle: {
      fontSize: 18,
      fontFamily: "Inter_600SemiBold",
      color: colors.foreground,
      marginBottom: 6,
    },
    valueBody: {
      fontSize: 14,
      fontFamily: "Inter_400Regular",
      color: colors.mutedForeground,
      lineHeight: 20,
    },

    partnersGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 32,
    },
    partnerPill: {
      borderRadius: 100,
      borderWidth: 1,
      paddingHorizontal: 14,
      paddingVertical: 8,
    },
    partnerName: {
      fontSize: 12,
      fontFamily: "Inter_500Medium",
      color: colors.foreground,
    },

    problemBlock: {
      borderRadius: colors.radius * 1.5,
      padding: 24,
      marginBottom: 12,
    },
    problemLabel: {
      fontSize: 10,
      fontFamily: "Inter_600SemiBold",
      color: colors.accent,
      letterSpacing: 2,
      marginBottom: 12,
      textTransform: "uppercase",
    },
    problemHeading: {
      fontSize: 22,
      fontFamily: "Inter_700Bold",
      color: "#FFFFFF",
      lineHeight: 28,
      letterSpacing: -0.4,
      marginBottom: 20,
    },
    problemItem: {
      flexDirection: "row",
      gap: 16,
      paddingVertical: 14,
      borderTopWidth: 1,
      borderTopColor: "rgba(255,255,255,0.12)",
    },
    problemNum: {
      fontSize: 12,
      fontFamily: "Inter_400Regular",
      color: "rgba(255,255,255,0.4)",
      width: 24,
      marginTop: 2,
    },
    problemText: {
      fontSize: 16,
      fontFamily: "Inter_500Medium",
      color: "#FFFFFF",
      flex: 1,
    },
  });
}
