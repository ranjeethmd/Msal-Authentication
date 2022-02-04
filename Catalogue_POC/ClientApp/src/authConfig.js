
export const msalConfig = {
    auth: {
        clientId: "51f3e8a5-d941-4369-9b35-9c376befb826",
        authority: "https://login.microsoftonline.com/24d2eec2-c04e-4c44-830d-f374a7b9559e", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
        redirectUri:  window.location.origin
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: [
        "api://51f3e8a5-d941-4369-9b35-9c376befb826/Graph.Read",
        "api://51f3e8a5-d941-4369-9b35-9c376befb826/Graph.Write",
        
    ]
};