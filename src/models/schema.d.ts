    export interface CoApplicantEthnicityName {
        column: string;
        concept: string;
        value: string;
    }

    export interface CountyName {
        column: string;
        concept: string;
        value: string;
    }

    export interface LienStatusName {
        column: string;
        concept: string;
        value: string;
    }

    export interface ApplicantRaceName2 {
        column: string;
        concept: string;
        value: string;
    }

    export interface PreapprovalName {
        column: string;
        concept: string;
        value: string;
    }

    export interface ApplicantRaceName1 {
        column: string;
        concept: string;
        value: string;
    }

    export interface ActionTakenName {
        column: string;
        concept: string;
        value: string;
    }

    export interface ApplicantRaceName5 {
        column: string;
        concept: string;
        value: string;
    }

    export interface DenialReasonName1 {
        column: string;
        concept: string;
        value: string;
    }

    export interface ApplicantEthnicityName {
        column: string;
        concept: string;
        value: string;
    }

    export interface OwnerOccupancyName {
        column: string;
        concept: string;
        value: string;
    }

    export interface LoanPurposeName {
        column: string;
        concept: string;
        value: string;
    }

    export interface ApplicantRaceName4 {
        column: string;
        concept: string;
        value: string;
    }

    export interface HoepaStatusName {
        column: string;
        concept: string;
        value: string;
    }

    export interface CoApplicantRaceName1 {
        column: string;
        concept: string;
        value: string;
    }

    export interface StateAbbr {
        column: string;
        concept: string;
        value: string;
    }

    export interface DenialReasonName3 {
        column: string;
        concept: string;
        value: string;
    }

    export interface EditStatusName {
        column: string;
        concept: string;
        value: string;
    }

    export interface LoanTypeName {
        column: string;
        concept: string;
        value: string;
    }

    export interface ApplicantSexName {
        column: string;
        concept: string;
        value: string;
    }

    export interface ApplicantRaceName3 {
        column: string;
        concept: string;
        value: string;
    }

    export interface StateName {
        column: string;
        concept: string;
        value: string;
    }

    export interface CoApplicantRaceName5 {
        column: string;
        concept: string;
        value: string;
    }

    export interface CoApplicantSexName {
        column: string;
        concept: string;
        value: string;
    }

    export interface PurchaserTypeName {
        column: string;
        concept: string;
        value: string;
    }

    export interface CoApplicantRaceName3 {
        column: string;
        concept: string;
        value: string;
    }

    export interface MsamdName {
        column: string[];
        concept: string;
        id: string[];
        value: string;
    }

    export interface AgencyName {
        column: string;
        concept: string;
        value: string;
    }

    export interface CoApplicantRaceName4 {
        column: string;
        concept: string;
        value: string;
    }

    export interface AgencyAbbr {
        column: string;
        concept: string;
        value: string;
    }

    export interface DenialReasonName2 {
        column: string;
        concept: string;
        value: string;
    }

    export interface PropertyTypeName {
        column: string;
        concept: string;
        value: string;
    }

    export interface CoApplicantRaceName2 {
        column: string;
        concept: string;
        value: string;
    }

    export interface References {
        co_applicant_ethnicity_name: CoApplicantEthnicityName;
        county_name: CountyName;
        lien_status_name: LienStatusName;
        applicant_race_name_2: ApplicantRaceName2;
        preapproval_name: PreapprovalName;
        applicant_race_name_1: ApplicantRaceName1;
        action_taken_name: ActionTakenName;
        applicant_race_name_5: ApplicantRaceName5;
        denial_reason_name_1: DenialReasonName1;
        applicant_ethnicity_name: ApplicantEthnicityName;
        owner_occupancy_name: OwnerOccupancyName;
        loan_purpose_name: LoanPurposeName;
        applicant_race_name_4: ApplicantRaceName4;
        hoepa_status_name: HoepaStatusName;
        co_applicant_race_name_1: CoApplicantRaceName1;
        state_abbr: StateAbbr;
        denial_reason_name_3: DenialReasonName3;
        edit_status_name: EditStatusName;
        loan_type_name: LoanTypeName;
        applicant_sex_name: ApplicantSexName;
        applicant_race_name_3: ApplicantRaceName3;
        state_name: StateName;
        co_applicant_race_name_5: CoApplicantRaceName5;
        co_applicant_sex_name: CoApplicantSexName;
        purchaser_type_name: PurchaserTypeName;
        co_applicant_race_name_3: CoApplicantRaceName3;
        msamd_name: MsamdName;
        agency_name: AgencyName;
        co_applicant_race_name_4: CoApplicantRaceName4;
        agency_abbr: AgencyAbbr;
        denial_reason_name_2: DenialReasonName2;
        property_type_name: PropertyTypeName;
        co_applicant_race_name_2: CoApplicantRaceName2;
    }

    export interface Info {
        name: string;
        description: string;
    }

    export interface Link {
        rel: string;
        href: string;
    }

    export interface Aggregations {
        census_tracts: string[];
    }

    export interface Slice {
        table: string;
        name: string;
        type: string;
        references: References;
        dimensions: string[];
        id: string;
        info: Info;
        indexes: any[];
        _links: Link[];
        metrics: string[];
        aggregations: Aggregations;
        slice: string;
    }

    export interface Link2 {
        rel: string;
        href: string;
    }

    export interface Datum {
        _id: any;
        name: string;
        code: string;
        year?: number;
        abbr: string;
        state_abbr: string;
        county_name: string;
    }

    export interface Table {
        data: Datum[];
    }

    export interface Concept {
        _links: Link2[];
        description: string;
        id: string;
        table: Table;
        type: string;
    }

    export interface Embedded {
        slices: Slice[];
        concepts: Concept[];
    }

    export interface Link3 {
        rel: string;
        href: string;
    }

    export interface RootObject {
        _embedded: Embedded;
        _links: Link3[];
        swagger_description: string;
        description: string;
        name: string;
        url: string;
        id: string;
    }


