import { OfferListType } from "@/types/OfferType";

export type NewUserInfoType = {
  id: number;
  key: string;
  value: boolean;
};

export type ResponseFromServerType = {
  offers: OfferListType;
};
