export interface IQuery {
    selectFields: string[];
    whereCondition: IWhereClause[];
    orderBy:string[];
}


export interface IWhereClause {
    key: string;
    value: string;    
}