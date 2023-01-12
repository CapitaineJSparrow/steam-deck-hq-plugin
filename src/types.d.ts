declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

export interface HQResult {
  id:                   number;
  date:                 Date;
  date_gmt:             Date;
  guid:                 GUID;
  modified:             Date;
  modified_gmt:         Date;
  slug:                 string;
  status:               string;
  type:                 string;
  link:                 string;
  title:                GUID;
  content:              Content;
  excerpt:              Content;
  author:               number;
  featured_media:       number;
  comment_status:       string;
  ping_status:          string;
  template:             string;
  categories:           any[];
  genre:                any[];
  acf:                  Acf;
  featured_img:         string;
  coauthors:            any[];
  author_meta:          AuthorMeta;
  relative_dates:       AbsoluteDates;
  absolute_dates:       AbsoluteDates;
  absolute_dates_time:  AbsoluteDates;
  featured_img_caption: string;
  tax_additional:       TaxAdditional;
  series_order:         string;
  _links:               Links;
}

export interface Links {
  self:               About[];
  collection:         About[];
  about:              About[];
  author:             Author[];
  replies:            Author[];
  "version-history":  VersionHistory[];
  "wp:featuredmedia": Author[];
  "wp:attachment":    About[];
  "wp:term":          WpTerm[];
  curies:             Cury[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href:       string;
}

export interface Cury {
  name:      string;
  href:      string;
  templated: boolean;
}

export interface VersionHistory {
  count: number;
  href:  string;
}

export interface WpTerm {
  taxonomy:   string;
  embeddable: boolean;
  href:       string;
}

export interface AbsoluteDates {
  created:  string;
  modified: string;
}

export interface Acf {
  best_on_deck:                       boolean;
  is_first_look:                      boolean;
  last_revised_date:                  null;
  sdhq_rating:                        number;
  sdhq_rating_tags:                   SdhqRatingTag[];
  sdhq_rating_categories:             SdhqRatingCategories;
  optimized_and_recommended_settings: OptimizedAndRecommendedSettings;
  ratings:                            Ratings;
  deck_builds:                        DeckBuild[];
  links:                              LinksClass;
  "":                                 Empty;
  gallery:                            string;
  steam_app_id:                       string;
}

export interface Empty {
  game_logo:  number;
  cover_art:  number;
  square_art: number;
  box_art:    number;
}

export interface DeckBuild {
  deck_build_category_title: string;
  deck_builds_accordion:     string;
}

export interface LinksClass {
  steam_store_url: string;
  protondb_url:    string;
}

export interface OptimizedAndRecommendedSettings {
  steamos_settings:                        SteamosSettings;
  proton_version:                          string;
  game_settings:                           string;
  projected_battery_usage_and_temperature: ProjectedBatteryUsageAndTemperature;
}

export interface ProjectedBatteryUsageAndTemperature {
  wattage:       string;
  temperatures:  string;
  gameplay_time: string;
}

export interface SteamosSettings {
  fps_cap:             string;
  fps_refresh_rate:    number;
  half_rate_shading:   boolean;
  tdp_limit:           string;
  scaling_filter:      string;
  gpu_clock_frequency: string;
}

export interface Ratings {
  deck_verified_rating: string;
  proton_db_rating:     string;
}

export interface SdhqRatingCategories {
  performance:     number;
  visuals:         number;
  stability:       number;
  controls:        number;
  battery:         number;
  score_breakdown: string;
}

export interface SdhqRatingTag {
  sdhq_rating_tag: string;
}

export interface AuthorMeta {
  author_link:  string;
  display_name: string;
}

export interface Content {
  rendered:  string;
  protected: boolean;
}

export interface GUID {
  rendered: string;
}

export interface TaxAdditional {
  category: Category;
  genre:    Category;
}

export interface Category {
  linked:   any[];
  unlinked: any[];
  slug:     string;
  name:     string;
}
