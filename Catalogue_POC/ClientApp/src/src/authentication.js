import { PublicClientApplication, EventType, InteractionType } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "./authConfig";

const config = { ...msalConfig }
const instance = new PublicClientApplication(config);

const id =  instance.addEventCallback(message => {

    switch (message.eventType) {
        case EventType.LOGIN_SUCCESS:
        case EventType.ACQUIRE_TOKEN_SUCCESS:
            if (message.interactionType === InteractionType.Redirect) {

                const account = message.payload.account;
                instance.setActiveAccount(account);
            }
        break;        
    }
});

export const getInstance = () => {

    return instance

};
export const  getAccessToken = async () => {

    await instance.handleRedirectPromise();

    // const accounts = instance.getAllAccounts();

    //if (accounts.length > 0 && !instance.getActiveAccount()) {
    //    console.log("Set accoount again");
    //    instance.setActiveAccount(accounts[0]);
    //}

    const request = {
        ...loginRequest,
        //account: instance.getActiveAccount()
    };

    try {
        let response = await instance.acquireTokenSilent(request);
        return response.accessToken
    }
    catch (e) {
        let response = await instance.acquireTokenRedirect(request);
        return response.accessToken
    }
}
