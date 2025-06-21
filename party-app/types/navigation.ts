import Party from "./party";

export type RootStackParamList = {
    Home: undefined;
    Register: undefined;
    Party: { party: Party };
    Order: { userId: string, party: Party };
    Profile: { userId: string };
    Host: { userId: string };
};