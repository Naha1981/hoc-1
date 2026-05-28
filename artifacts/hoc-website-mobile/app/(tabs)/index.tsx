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
  { value: "100%", label: "SASL-led\ndesign" },
];

const offerItems = [
  "Communication systems: Internal and external channels rebuilt around language equity.",
  "Customer experience: Service design that includes Deaf customers as a first-class audience.",
  "Institutional frameworks: Policy, training, and operations restructured for adoption at scale.",
];

const partners = [
  "MoonSport", "MTN", "SAMA 29", "Darling Films",
  "Castle Milk Stout", "Lil-lets SA", "DeafTouch", "Sefako Makgatho Univ.",
  "Gopala Davies", "Nostalgia Productions",
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

      {/* The Offer */}
      <View style={[s.offerBlock, { backgroundColor: colors.foreground }]}>
        <Text style={s.offerLabel}>THE OFFER</Text>
        <Text style={s.offerHeading}>We redesign how inclusion works.</Text>
        {offerItems.map((item, i) => (
          <View key={i} style={s.offerItem}>
            <View style={s.offerDot} />
            <Text style={s.offerText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Partners */}
      <Text style={s.sectionLabel}>TRUSTED BY</Text>
      <View style={s.partnersGrid}>
        {partners.map((p) => (
          <View key={p} style={[s.partnerPill, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[s.partnerName, { color: colors.foreground }]}>{p}</Text>
          </View>
        ))}
      </View>

      {/* Founder quote */}
      <View style={[s.quoteBlock, { borderLeftColor: colors.accent, backgroundColor: colors.surface }]}>
        <Text style={[s.quoteText, { color: colors.foreground }]}>
          "Inclusion is not a campaign. It's an operating system — and SASL is its interface."
        </Text>
        <Text style={[s.quoteAuthor, { color: colors.mutedForeground }]}>
          MMATLOU MOLOTO · FOUNDER
        </Text>
      </View>

      {/* Secondary CTA */}
      <Pressable
        style={({ pressed }) => [s.secondaryCta, { borderColor: colors.border }, pressed && s.ctaBtnPressed]}
        onPress={() => router.push("/(tabs)/services")}
      >
        <Text style={[s.secondaryCtaText, { color: colors.foreground }]}>View all services</Text>
        <Text style={[s.ctaArrow, { color: colors.foreground }]}>→</Text>
      </Pressable>
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

    offerBlock: {
      borderRadius: colors.radius * 1.5,
      padding: 24,
      marginBottom: 32,
    },
    offerLabel: {
      fontSize: 9,
      fontFamily: "Inter_600SemiBold",
      color: colors.accent,
      letterSpacing: 2.5,
      marginBottom: 10,
      textTransform: "uppercase",
    },
    offerHeading: {
      fontSize: 22,
      fontFamily: "Inter_700Bold",
      color: "#FFFFFF",
      lineHeight: 28,
      letterSpacing: -0.4,
      marginBottom: 20,
    },
    offerItem: {
      flexDirection: "row",
      gap: 12,
      paddingVertical: 12,
      borderTopWidth: 1,
      borderTopColor: "rgba(255,255,255,0.12)",
      alignItems: "flex-start",
    },
    offerDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: colors.accent,
      marginTop: 7,
      flexShrink: 0,
    },
    offerText: {
      fontSize: 14,
      fontFamily: "Inter_400Regular",
      color: "rgba(255,255,255,0.80)",
      lineHeight: 20,
      flex: 1,
    },

    sectionLabel: {
      fontSize: 10,
      fontFamily: "Inter_600SemiBold",
      color: colors.accent,
      letterSpacing: 2,
      marginBottom: 12,
      textTransform: "uppercase",
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
    },

    quoteBlock: {
      borderLeftWidth: 4,
      borderRadius: 4,
      paddingLeft: 16,
      paddingRight: 16,
      paddingVertical: 16,
      marginBottom: 24,
    },
    quoteText: {
      fontSize: 17,
      fontFamily: "Inter_500Medium",
      lineHeight: 24,
      fontStyle: "italic",
      marginBottom: 8,
    },
    quoteAuthor: {
      fontSize: 9,
      fontFamily: "Inter_600SemiBold",
      letterSpacing: 2,
      textTransform: "uppercase",
    },

    secondaryCta: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      borderWidth: 1,
      borderRadius: 100,
      paddingVertical: 14,
      paddingHorizontal: 28,
    },
    secondaryCtaText: {
      fontSize: 14,
      fontFamily: "Inter_500Medium",
      letterSpacing: 0.2,
    },
  });
}
