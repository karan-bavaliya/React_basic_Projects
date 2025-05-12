import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appWriteProjectId)
        this.account = new Account(this.client);
    }
    //async aetala use karee chee ke ke ,jaya user navu account na banave taya sudhi aagad na vadhvu joiyeee
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ login, password })
            }
        }
        catch (error) {
            throw error;
        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        }
        catch (error) {
            console.log(error);
        }
    }
    // joi koi user direct home page ma aavee to khabar pade ke te login chee ke nahi
    async getcurrectUser(){
        try{
            return  await this.account.get();
        }
        catch(error){
            console.log("Appwrite service ::getcurrentUser ::error",error);
            
        }
        return null;
    }
    async logout(){
        try{
            await this.account.deleteSessions('all')
        } 
        catch{
            console.log("appwrite service ::logout::error",error);
            
        }
    }
}



const authService = new AuthService();


export default authService
