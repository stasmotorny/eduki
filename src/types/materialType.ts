export interface MaterialsItem {
  title: string;
  coverPath: string;
  isInYellowList: boolean;
  distributionType: number;
  sources: string;
  bundleListTotal: string;
  description: string;
  customPagesTotal: number;
  language: string;
  isActive: boolean;
  titleUpdatedByHuman: boolean;
  materialFiles: MaterialFile[];
  createdAt: Date;
  firstPreviewImage: FirstPreviewImage;
  world: string;
  price: number;
  inFavorites: number;
  averageRating: number;
  id: number;
  isCompletedByAuthor: boolean;
  bundle: boolean;
  slug: string;
  schoolPrices: SchoolPrices;
  totalFeedbacks: number;
  ccStatus: string;
  descriptionUpdatedByHuman: boolean;
  materialTopCategories: Material[];
  author: Author;
  fileTypes: string;
  schoolTypes: SchoolType[];
  authorFeatured: boolean;
  totalPages: number;
  isShadow: boolean;
  materialTypes: Material[];
  isStandaloneInteractive: boolean;
  hasBibPreview: boolean;
  materialClassGrades: Material[];
  status: string;
  hasFixedPrice: boolean;
}

export interface Author {
  followersNumber: number;
  becameSellerAt: Date;
  searchMode: boolean;
  details: Details;
  id: number;
  slug: string;
}

export interface Details {
  profileBackgroundPath: string;
  world: string;
  totalMaterials: number;
  publicName: string;
  imagePath: string;
  needsSellerInfo: boolean;
  subjects: string[];
  classes: string[];
  privateProfile: boolean;
  teachableCertified: boolean;
  instagramProfile: string;
}

export interface FirstPreviewImage {
  plain: string;
  watermarked: string;
}

export interface Material {
  id: number;
  title: string;
}

export interface MaterialFile {
  createdAt: Date;
  type: string;
}

export interface SchoolPrices {
  price: {[key: string]: number};
}

export interface SchoolType {
  id: number;
  title: string;
  interdisciplinary: boolean;
}

export type Data = {
  items: {
    materials: MaterialsItem[];
    suggestion: null | string;
  };
  total: number;
};

export type Page = {
  data: Data;
};

export type Resp = {
  code: number;
  data: Data;
  errors: any;
  status: string;
};
