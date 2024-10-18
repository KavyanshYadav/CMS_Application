export  interface ResourceFieldType {
    name:string,
    type : 'int' | 'date' | 'array' | "json" | "string" | 'email' |  'longText' | 'bool'
}
export interface Collection {
    [fieldName: string]: ResourceFieldType; 
}
export interface DataStructure {
    [collectionName: string]: Collection; // Dynamic collections
}


