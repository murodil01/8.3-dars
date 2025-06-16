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
