import { IConceptsMenuViewModel } from './concepts-menu-viewmodel';

export interface IMetadata {
    readonly stateCodes : IConceptsMenuViewModel;
    readonly ethnicity : IConceptsMenuViewModel;
    readonly purchaserType: IConceptsMenuViewModel;
    readonly fips:IConceptsMenuViewModel;
    readonly preapproval: IConceptsMenuViewModel;
    readonly leinStatus: IConceptsMenuViewModel;
    readonly actionTaken: IConceptsMenuViewModel;
    readonly race:IConceptsMenuViewModel;
    readonly msamd: IConceptsMenuViewModel;
    readonly ownerOccupancy: IConceptsMenuViewModel;
    readonly loanType: IConceptsMenuViewModel;
    readonly agencyCode: IConceptsMenuViewModel;
    readonly propertyType:IConceptsMenuViewModel;
    readonly sex:IConceptsMenuViewModel;
}