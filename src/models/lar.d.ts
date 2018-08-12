    export interface Errors {
    }

    export interface Query {
        offset: number;
        limit: number;
        orderBy?: any;
        group?: any;
        where?: any;
        select?: any;
    }

    export interface Link {
        rel: string;
        href: string;
        templated?: boolean;
    }

    export interface Result {
        co_applicant_ethnicity: number;
        co_applicant_ethnicity_name: string;
        purchaser_type: number;
        county_name: string;
        respondent_id: string;
        preapproval: number;
        co_applicant_race_1: number;
        lien_status_name: string;
        sequence_number: string;
        applicant_income_000s: number;
        preapproval_name: string;
        applicant_race_name_1: string;
        action_taken_name: string;
        msamd: string;
        applicant_ethnicity_name: string;
        owner_occupancy_name: string;
        loan_purpose_name: string;
        county_code: number;
        number_of_owner_occupied_units: number;
        action_taken: number;
        hoepa_status_name: string;
        agency_code: number;
        fips_code: string;
        tract_to_msamd_income: number;
        loan_purpose: number;
        co_applicant_race_name_1: string;
        application_date_indicator: string;
        state_abbr: string;
        property_type: number;
        applicant_race_1: number;
        lien_status: number;
        loan_amount_000s: number;
        owner_occupancy: number;
        hud_median_family_income: number;
        loan_type_name: string;
        rate_spread: string;
        applicant_sex_name: string;
        applicant_sex: number;
        state_name: string;
        population: number;
        co_applicant_sex_name: string;
        purchaser_type_name: string;
        minority_population: number;
        hoepa_status: number;
        census_tract_number: string;
        agency_name: string;
        as_of_year: number;
        number_of_1_to_4_family_units: number;
        loan_type: number;
        applicant_ethnicity: number;
        agency_abbr: string;
        state_code: number;
        property_type_name: string;
        co_applicant_sex: number;
        denial_reason_name_1: string;
        denial_reason_1?: number;
        edit_status?: number;
        edit_status_name: string;
        msamd_name: string;
        denial_reason_2?: number;
        denial_reason_name_2: string;
        co_applicant_race_2?: number;
        co_applicant_race_name_2: string;
    }

    export interface ILarObject {
        errors: Errors;
        page: number;
        dimensions?: any;
        size: number;
        total: number;
        computing?: any;
        slice: string;
        query: Query;
        _links: Link[];
        dataset: string;
        results: Result[];
    }


