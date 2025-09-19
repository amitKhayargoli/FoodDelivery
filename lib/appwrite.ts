import { Client } from "react-native-appwrite";

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