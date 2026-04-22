/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitCard {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  location: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Insurance Claims' | 'Repair Process' | 'Know Your Rights' | 'FAQs' | 'Real Stories';
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
}
