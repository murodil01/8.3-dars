export interface AuthType {
  billing_address: {
    country: string;
    zip: string;
    town: string;
    street_address: string;
    extra_address: string;
    state: string;
  };
  created_at: string;
  created_by: string;
  email: string;
  followers: [];

  name: string;
  order_list: [];
  password: string;
  permisson: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: [];
  _id: string;
}

export interface CategoriesType {
  count: number;
  route_path: string;
  title: string;
  _id: string;
}

export interface DataType<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
}

export interface DiscountFlowerType {
  discoount_up_to: number;
  id: number;
  poster_image_url: string;
  title: string;
}
