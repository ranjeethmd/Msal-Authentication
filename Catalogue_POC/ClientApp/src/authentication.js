import { useMsal  } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { EventType, InteractionStatus, InteractionType } from "@azure/msal-browser";

export const useGetAccessToken = () => {
    const { instance, inProgress } = useMsal();

    const handleRedirection = () => {
        return new Promise((resolve, reject) => {          

            instance.addEventCallback(message => {
                
                console.log(message.eventType);


                switch (message.eventType) {
                    case EventType.LOGIN_SUCCESS:
                    case EventType.ACQUIRE_TOKEN_SUCCESS:
                        if (message.interactionType === InteractionType.Redirect) {

                            const account = message.payload.account;
                            instance.setActiveAccount(account);

                            resolve(message);
                        }
                        break;
                    case EventType.LOGIN_FAILURE:
                        reject(message);
                        break;
                    default:
                        break;
                }
            });
        });
    }


    const getAccessToken = async (callback) => {

        const request = {
            ...loginRequest
        };

        if (inProgress == InteractionStatus.None) {
           

            try {
                let response = await instance.acquireTokenSilent(request);
                callback(response.accessToken);
            }
            catch (e) {
                let response = await instance.acquireTokenRedirect(request);
                callback(response.accessToken);
            }
        }
        else {
            await handleRedirection();
            let response = await instance.acquireTokenSilent(request);
            callback(response.accessToken);
        }
        

        
    }

    return  getAccessToken;
}