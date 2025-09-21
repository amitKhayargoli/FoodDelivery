import { CreateUserParams, SignInParams } from "@/type";
import { Account, Avatars, Client, Databases, ID, Query } from "react-native-appwrite";

export const appwriteConfig = {
    endpoint : process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    platform: "com.food.delivery",
    databaseId: '68c99e3c000f6f503141',
    userCollectionId: 'user',
    
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}


 export const client = new Client();

 client
    .setEndpoint(appwriteConfig.endpoint!) 
    .setProject(appwriteConfig.projectId!)
    .setPlatform(appwriteConfig.platform);

export const account = new Account(client);
export const databases = new Databases(client);
const avatars = new Avatars(client);

export const createUser = async ({email,password,name}:CreateUserParams)=>{
    try{
        const newAccount = await account.create(ID.unique(),email,password,name);

        if(!newAccount) throw Error;

        await SignIn({email,password});

        const avatarUrl = avatars.getInitialsURL(name);

        return await databases.createDocument(
            appwriteConfig.databaseId!,
            appwriteConfig.userCollectionId!,
            ID.unique(),
            {
                email,name,
                accountId: newAccount.$id,
                avatar : avatarUrl
            }
        );

    }
    catch(err){
        throw new Error(err as string);
    }

}

export const SignIn = async({ email, password } : SignInParams)  =>{
 
    try{
        const session = await account.createEmailPasswordSession(email, password);
    }
    catch(err){ 
        throw new Error(err as string);
    }
}

export const getCurrentUser = async () =>{
    try{
        const currentAccount = await account.get();

        if(!currentAccount) throw Error('User not found');

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId!,
            appwriteConfig.userCollectionId!,
            [
                Query.equal('accountId', [currentAccount.$id])
            ]
        );

        if(currentUser.total === 0) throw Error('User not found');

        return currentUser.documents[0];

    } catch(err){
        throw new Error(err as string);
    }

}