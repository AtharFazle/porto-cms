/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export type Gallery =
  | {
      image: string | Media;
      id?: string | null;
    }[]
  | null;

export interface Config {
  collections: {
    users: User;
    news: News;
    pages: Page;
    media: Media;
    carousel: Carousel;
    affiliates: Affiliate;
    'app-promotions': AppPromotion;
    'header-items': HeaderItem;
    galery: Galery;
    tickets: Ticket;
    'job-vacancies': JobVacancy;
    'job-positions': JobPosition;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    'jangkauan-distribusi': JangkauanDistribusi;
    Banner2: Banner2;
    Footers: Footer;
    Faq: Faq;
    'pop-up': PopUp;
  };
}
export interface User {
  id: string;
  name?: string | null;
  roles?: ('admin' | 'content-manager' | 'content-editor' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface News {
  id: string;
  title?: string | null;
  headingImage: string | Media;
  body?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  publishedOn?: string | null;
  authors?: (string | User)[] | null;
  populatedAuthors?:
    | {
        id?: string | null;
        name?: string | null;
      }[]
    | null;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface Media {
  id: string;
  alt: string;
  caption?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
export interface Page {
  id: string;
  title?: string | null;
  body?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface Carousel {
  id: string;
  title: string;
  image: string | Media;
  updatedAt: string;
  createdAt: string;
}
export interface Affiliate {
  id: string;
  title: string;
  companyLogo: string | Media;
  whiteCompanyLogo: string | Media;
  companyName: string;
  companyUrl: string;
  productLogos?:
    | {
        image?: string | Media | null;
        id?: string | null;
      }[]
    | null;
  description?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface AppPromotion {
  id: string;
  title?: string | null;
  image?: string | Media | null;
  body?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface HeaderItem {
  id: string;
  type?: ('category' | 'reference' | 'custom') | null;
  newTab?: boolean | null;
  reference?: (string | null) | Page;
  url?: string | null;
  label?: string | null;
  parent?: string | null;
  orderRank?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface Galery {
  id: string;
  title: string;
  desc: {
    [k: string]: unknown;
  }[];
  photos?: Gallery;
  updatedAt: string;
  createdAt: string;
}
export interface Ticket {
  id: string;
  name: string;
  phone?: string | null;
  email: string;
  job: string;
  question: string;
  detail: string;
  status?: ('open' | 'closed' | 'reject') | null;
  assignee?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
}
export interface JobVacancy {
  id: string;
  title: string;
  type?: ('permanent' | 'contract' | 'internship') | null;
  category: string | JobPosition;
  updatedAt: string;
  createdAt: string;
}
export interface JobPosition {
  id: string;
  name: string;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
export interface JangkauanDistribusi {
  id: string;
  title: string;
  description: string;
  content?:
    | {
        count?: string | null;
        title?: string | null;
        caption?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface Banner2 {
  id: string;
  title?: string | null;
  description?: string | null;
  Button?: string | null;
  ButtonLink?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface Footer {
  id: string;
  Logo: string | Media;
  items?:
    | {
        title: string;
        children?:
          | {
              title?: string | null;
              icon?: string | Media | null;
              link?: string | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  TitleBottom: string;
  SocialMedia?:
    | {
        icon: string | Media;
        link: string;
        id?: string | null;
      }[]
    | null;
  CopyrightText: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface Faq {
  id: string;
  Headtitle: string;
  SubTitle: string;
  content?:
    | {
        Category: string;
        QnA?:
          | {
              Question: string;
              Answer: string;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface PopUp {
  id: string;
  image?: string | Media | null;
  waitUntilOpen?: number | null;
  waitUntilClose?: number | null;
  href?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}