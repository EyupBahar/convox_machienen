import { tr } from './tr';
import { en } from './en';
import { de } from './de';
import { fr } from './fr';

export type Language = 'tr' | 'en' | 'de' | 'fr';

export { tr, en, de, fr };

export const translations = {
  tr,
  en,
  de,
  fr,
};

export type TranslationKeys = typeof translations[Language];

