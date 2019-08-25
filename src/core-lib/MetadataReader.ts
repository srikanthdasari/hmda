import { IMetadata } from 'src/viewmodels/metadata';


export class MetadataReader {
    public static readMetadata(): IMetadata  {
        let data={};
        if(window.localStorage && window.localStorage.length>0) {
            const metadata =window.localStorage.getItem("metadata");
            if(metadata !== null && metadata !== undefined) {
                data = JSON.parse(metadata);                
                return data as IMetadata;
            }
        }        
        return data as IMetadata;
    }
}