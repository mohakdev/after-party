import Party from "./party";

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Party: { party: Party };
    Order: { userId: string, party: Party };
    Profile: undefined;
    Host: { userId: string };
};