import { Phone, ClipboardList, HardHat, Sparkles, type LucideIcon } from 'lucide-react';

export type ProcessStep = {
  id: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
};

export const processSteps: readonly ProcessStep[] = [
  {
    id: 'connect',
    Icon: Phone,
    title: 'CONNECT',
    desc: 'Call us or use the free quote form—we respond quickly and keep the conversation easy and pressure-free.',
  },
  {
    id: 'plan',
    Icon: ClipboardList,
    title: 'PLAN',
    desc: 'We walk your property, listen to your goals, and send a clear written estimate so you know exactly what to expect.',
  },
  {
    id: 'complete',
    Icon: HardHat,
    title: 'COMPLETE',
    desc: 'Our crew shows up on time, works efficiently, and respects your home—clean lines and a tidy job site when we’re finished.',
  },
  {
    id: 'enjoy',
    Icon: Sparkles,
    title: 'ENJOY',
    desc: 'Step back and enjoy healthier turf, sharp edges, and a landscape you’re proud to pull up to every day.',
  },
];
