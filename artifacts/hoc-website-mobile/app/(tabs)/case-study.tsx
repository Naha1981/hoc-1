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

const meta = [
  { k: "Category", v: "EdTech · Deaf Education" },
  { k: "Platform", v: "Accessible reading platform" },
  { k: "Audience", v: "Deaf learners, primary school" },
  { k: "Status", v: "In development" },
];

const features = [
  {
    n: "01",
    title: "Educational Accessibility",
    body: "Every interface decision was made with SASL-first principles. Visual language replaces audio cues. Interaction patterns are built around how Deaf children actually learn.",
  },
  {
    n: "02",
    title: "Literacy Development",
    body: "SASL Animation System offers Reader (passive comprehension) and Comprehension (active engagement) modes — allowing learners to move through text with SASL support at every step.",
  },
  {
    n: "03",
    title: "Inclusive Child Engagement",
    body: "Designed with inclusion at the core. Every feature exists to engage Deaf children on their terms, using visual communication systems as the primary cognitive bridge.",
  },
];

export default function CaseStudyScreen() {
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
      <Text style={s.sectionLabel}>PRODUCT</Text>
      <Text style={s.heading}>Hands On Kidz</Text>
      <Text style={s.subHeading}>Building the future of inclusive learning.</Text>

      {/* Hero accent block */}
      <View style={[s.heroBlock, { backgroundColor: colors.foreground }]}>
        <Text style={s.heroBlockLabel}>HANDS ON KIDZ</Text>
        <Text style={s.heroBlockTitle}>Reader · SASL</Text>
        <Text style={s.heroBlockSub}>Accessible education for Deaf learners</Text>
      </View>

      {/* Meta info */}
      <View style={[s.metaCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        {meta.map((m, i) => (
          <View
            key={m.k}
            style={[s.metaRow, i < meta.length - 1 && { borderBottomWidth: 1, borderBottomColor: colors.border }]}
          >
            <Text style={[s.metaKey, { color: colors.accent }]}>{m.k.toUpperCase()}</Text>
            <Text style={[s.metaValue, { color: colors.foreground }]}>{m.v}</Text>
          </View>
        ))}
      </View>

      {/* Overview */}
      <Text style={s.sectionLabel}>OVERVIEW</Text>
      <Text style={[s.challengeHeading, { color: colors.foreground }]}>
        Deaf children deserve learning tools built for them — not adapted from hearing models.
      </Text>
      <Text style={[s.challengeBody, { color: colors.mutedForeground }]}>
        Hands On Kidz focuses on accessible educational experiences for children, with a strong emphasis on SASL-led learning and literacy. Existing tools are built around phonics — a system grounded in spoken language. For Deaf learners, this is structurally exclusionary. Hands On Kidz was built to rethink literacy from first principles, using SASL as the primary cognitive bridge.
      </Text>

      {/* Features */}
      <Text style={s.sectionLabel}>KEY FEATURES</Text>
      {features.map((f) => (
        <View
          key={f.n}
          style={[s.featureCard, { backgroundColor: colors.card, borderColor: colors.border }]}
        >
          <View style={s.featureHeader}>
            <Text style={[s.featureNum, { color: colors.mutedForeground }]}>{f.n}</Text>
            <View style={s.featureContent}>
              <Text style={[s.featureTitle, { color: colors.foreground }]}>{f.title}</Text>
              <Text style={[s.featureBody, { color: colors.mutedForeground }]}>{f.body}</Text>
            </View>
          </View>
        </View>
      ))}

      {/* Quote */}
      <View style={[s.quoteBlock, { borderLeftColor: colors.accent, backgroundColor: colors.surface }]}>
        <Text style={[s.quoteText, { color: colors.foreground }]}>
          "Inclusion is not a campaign. It's an operating system — and SASL is its interface."
        </Text>
        <Text style={[s.quoteAuthor, { color: colors.mutedForeground }]}>
          MMATLOU MOLOTO · FOUNDER
        </Text>
      </View>

      {/* CTA */}
      <Pressable
        style={({ pressed }) => [
          s.ctaBtn,
          { backgroundColor: colors.primary },
          pressed && s.ctaBtnPressed,
        ]}
        onPress={handleCTA}
      >
        <Text style={[s.ctaText, { color: colors.primaryForeground }]}>Discuss your project</Text>
        <Text style={[s.ctaArrow, { color: colors.primaryForeground }]}>→</Text>
      </Pressable>
    </ScrollView>
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
      fontSize: 36,
      fontFamily: "Inter_700Bold",
      color: colors.foreground,
      letterSpacing: -0.8,
      marginBottom: 8,
    },
    subHeading: {
      fontSize: 16,
      fontFamily: "Inter_400Regular",
      color: colors.mutedForeground,
      lineHeight: 22,
      marginBottom: 28,
    },

    heroBlock: {
      borderRadius: colors.radius * 1.5,
      padding: 24,
      marginBottom: 20,
      alignItems: "flex-start",
    },
    heroBlockLabel: {
      fontSize: 9,
      fontFamily: "Inter_600SemiBold",
      color: "#FFFFFF",
      letterSpacing: 2.5,
      marginBottom: 10,
    },
    heroBlockTitle: {
      fontSize: 28,
      fontFamily: "Inter_700Bold",
      color: "#FFFFFF",
      letterSpacing: -0.5,
      marginBottom: 4,
    },
    heroBlockSub: {
      fontSize: 13,
      fontFamily: "Inter_400Regular",
      color: "rgba(255,255,255,0.55)",
    },

    metaCard: {
      borderRadius: colors.radius,
      borderWidth: 1,
      marginBottom: 28,
      overflow: "hidden",
    },
    metaRow: {
      padding: 14,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    metaKey: {
      fontSize: 9,
      fontFamily: "Inter_600SemiBold",
      letterSpacing: 1.8,
    },
    metaValue: {
      fontSize: 13,
      fontFamily: "Inter_500Medium",
    },

    challengeHeading: {
      fontSize: 20,
      fontFamily: "Inter_600SemiBold",
      lineHeight: 26,
      letterSpacing: -0.3,
      marginBottom: 12,
    },
    challengeBody: {
      fontSize: 14,
      fontFamily: "Inter_400Regular",
      lineHeight: 22,
      marginBottom: 28,
    },

    featureCard: {
      borderRadius: colors.radius,
      borderWidth: 1,
      padding: 16,
      marginBottom: 10,
    },
    featureHeader: {
      flexDirection: "row",
      gap: 14,
    },
    featureNum: {
      fontSize: 11,
      fontFamily: "Inter_400Regular",
      marginTop: 2,
      width: 24,
    },
    featureContent: { flex: 1 },
    featureTitle: {
      fontSize: 15,
      fontFamily: "Inter_600SemiBold",
      marginBottom: 6,
    },
    featureBody: {
      fontSize: 13,
      fontFamily: "Inter_400Regular",
      lineHeight: 19,
    },

    quoteBlock: {
      borderLeftWidth: 4,
      borderRadius: 4,
      paddingLeft: 16,
      paddingRight: 16,
      paddingVertical: 16,
      marginBottom: 28,
      marginTop: 8,
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

    ctaBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      borderRadius: 100,
      paddingVertical: 16,
      paddingHorizontal: 28,
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
