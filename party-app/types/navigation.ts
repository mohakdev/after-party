import Party from "./party";

export type RootStackParamList = {
    Home: undefined;
    Register: undefined;
    Party: { party: Party };
    Profile: { userId: string };
    Host: { userId: string };
    Order: { userId: string, partyId: string };
};