import type { Metadata } from 'next';

export const metadata = {
  title: 'AI marketingový agent pro personalizovanou komunikaci',
  description:
    'Seznamte se s AI marketingovým agentem Verbosus, který nonstop segmentuje trh, píše personalizovaná oslovení a škáluje vaše B2B kampaně.',
  alternates: {
    canonical: '/ai-agent/',
  },
} satisfies Metadata;

import AIAgentHero from '@/components/ai-agent-hero';
import AIAgentAdaptability from '@/components/ai-agent-adaptability';
import AIAgentIntelligence from '@/components/ai-agent-intelligence';
import AIAgentControl from '@/components/ai-agent-control';
import AIAgentWorkflow from '@/components/ai-agent-workflow';
import AIAgentLearning from '@/components/ai-agent-learning';
import AIAgentCta from '@/components/ai-agent-cta';

export default function AIAgent() {
  return (
    <>
      <AIAgentHero />
      <AIAgentAdaptability />
      <AIAgentIntelligence />
      <AIAgentControl />
      <AIAgentWorkflow />
      <AIAgentLearning />
      <AIAgentCta />
    </>
  );
}
