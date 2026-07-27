import { artistType } from "./artist";
import { artistCategoryType } from "./artistCategory";
import { eventType } from "./event";
import { eventTypeType } from "./eventType";
import { faqItemType } from "./faqItem";
import { heroSlideType } from "./heroSlide";
import {
  contentSectionType,
  ctaType,
  faqType,
  navigationItemType,
  seoType,
} from "./objects";
import { pageType } from "./page";
import { projectType } from "./project";
import { serviceType } from "./service";
import { siteSettingsType } from "./siteSettings";

export const schemaTypes = [
  navigationItemType,
  ctaType,
  seoType,
  faqType,
  contentSectionType,
  artistType,
  artistCategoryType,
  eventType,
  serviceType,
  projectType,
  eventTypeType,
  heroSlideType,
  faqItemType,
  pageType,
  siteSettingsType,
];
