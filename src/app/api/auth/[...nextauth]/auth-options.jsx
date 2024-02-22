const PROVIDER_ATTRIBUTES_KEY = "custom";

// Define provider configuration
const provider = {
    id: "affinidi",
    name: "Affinidi",
    clientId: process.env.PROVIDER_CLIENT_ID,
    clientSecret: process.env.PROVIDER_CLIENT_SECRET,
    type: "oauth",
    wellKnown: `${process.env.PROVIDER_ISSUER}/.well-known/openid-configuration`,
    authorization: {
        params: {
            prompt: "login",
            scope: "openid offline_access",
        },
    },
    client: {
        token_endpoint_auth_method: "client_secret_post",
    },
    idToken: true,
    profile(profile) {
        // Define profile mapping function
        return {
            id: profile.sub,
            email: profile.custom?.find((i) => typeof i.email === "string")?.email,
            picture: profile.custom?.find((i) => typeof i.picture === "string")?.picture,
            country: profile.custom?.find((i) => typeof i.country === "string")?.country,
            givenName: profile.custom?.find((i) => typeof i.givenName === "string")?.giveNname,
            familyName: profile.custom?.find((i) => typeof i.familyName === "string")?.familyName,
            phoneNumber: profile.custom?.find((i) => typeof i.phoneNumber === "string")?.phoneNumber,
            postalCode: profile.custom?.find((i) => typeof i.postalCode === "string")?.postalCode,
            streetAddress: profile.custom?.find((i) => typeof i.streetAddress === "string")?.streetAddress,
            locality: profile.custom?.find((i) => typeof i.locality === "string")?.locality,
        };
    },
};

// Define options object
export const options = {
    debug: true,
    session: { strategy: "jwt" },
    providers: [provider],
    callbacks: {
        // Define sign-in callback
        async signIn({ account }) {
            return Boolean(
                account?.provider === provider.id &&
                account.access_token &&
                account.id_token
            );
        },
        // Define JWT callback
        async jwt({ token, account, profile }) {
            // Extract profile items from profile
            const profileItems = (profile)?.[PROVIDER_ATTRIBUTES_KEY];
            if (profile && profileItems) {
                // Extract user properties from profile items
                const user = profileItems.reduce((acc, item) => {
                    Object.entries(item).forEach(([key, value]) => {
                        if (typeof value === "string") {
                            acc[key] = value;
                        }
                    });
                    return acc;
                }, {});
                token = { ...token, user };
            }

            if (account) {
                token = {
                    ...token,
                    ...(account?.access_token && { accessToken: account.access_token }),
                    ...(account?.id_token && { idToken: account.id_token }),
                };
            }

            return token;
        },
        // Define session callback
        async session({ session, token }) {
            if (token.user && token.accessToken && token.idToken) {
                return {
                    session,
                    user: { ...session.user, ...token.user },
                    accessToken: token.accessToken,
                    idToken: token.idToken,
                };
            }
        },
    },
};
