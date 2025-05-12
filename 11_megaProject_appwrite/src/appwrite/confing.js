import conf from '../conf/conf'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client()
    databases;
    storage;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appWriteProjectId)
        this.databases = new Databases()
        this.storage = new Storage()
    }
    async createpost({ title, post, slug, featureimage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    post,
                    featureimage, 
                    status, 
                    userId
                }
            )
        }
        catch (error) {
            console.log("post is not created",error);
        }
    }
    //slug ma id hovathi tene object mathi bahar lakheloo chee // je post update karase tene j edit option aapavama aavase, tethi userid ni jarur nathi
    async upadatePost(slug,{title, post,featureimage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug, // documant id ni jagayaye slug use thay chee
                {
                    title,
                    post,
                    featureimage, 
                    status, 
            
                }
            )
        }
        catch(error){
            console.log("Appwrite Service ::update post error ",error);
            

        }
    }

    //only need slug id
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true;
        }
        catch(error){
            console.log(" Appwrite service ::delete post error",error);
            return false
        }
    }

    // get a only one post
    async getPost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true;
        }
        catch(error){
            console.log(" Appwrite service ::getPost error",error);
            return false
        }
    }

    async getPosts(quires =[Query.equal("status","active")]){
        try{
            await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                quires,
            
            )
            return true;
        }
        catch(error){
            console.log(" Appwrite service ::getPosts error",error);
            return false
        }
    }
    //upload file
    async upploadfile(file){
        try{
            await this.storage.upploadfile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
            return true;
        }
        catch(error){
            console.log(" Appwrite service ::uploadfile error",error);
            return false
        }
    }

    async deletefile(fileId){
        try{
            await this.storage.deleteFile(
                conf.appWriteBucketId,
                fileId,
            )
            return true;
        }
        catch(error){
            console.log(" Appwrite service ::uploadfile error",error);
            return false
        }
    }
    getfilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }
}

const service = new Service()
export default Service 