export type OfferType = {
  id: number;
  image: string;
  type: string;
  title: string;
  location: string;
  dealer: string;
  productType: string;
  description: string;
  price: number;
  amount: number;
  priceForOne: number;
  userInformation: {
    isFavorite: boolean;
    isDeal: boolean;
    isPaid: boolean;
  };
};

export type OfferListType = OfferType[];
