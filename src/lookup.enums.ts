export enum CouponStudentMappingStatus {
    ACTIVE = "Active",
    INACTIVE = "Inactive"
}

export enum CouponType {
    ALL_USERS = "ALL_USERS",
    USER_SPECIFIC = "USER_SPECIFIC",
    INSTITUTIONAL_ONLY = "INSTITUTIONAL_ONLY"
}

export enum OfferType {
    AMOUNT_OFF = "AMOUNT_OFF",
    PERCENT_OFF = "PERCENT_OFF"
}

export enum CouponStatus {
    ACTIVE = "Active",
    INACTIVE = "Inactive",
    BULK = "Bulk",
    INVISIBLE = "Invisible"
}

export enum CouponKind {
    REGULAR_COUPON = "REGULAR",
    EVENT_BASED = "EVENT_BASED",
    MARKETING = "MARKETING"
}

export enum Module {
    EXTENDED_VALIDITY = "EXTENDED_VALIDITY",
    PACKAGE_SPECIFIC = "PACKAGE_SPECIFIC",
    BATCH_SPECIFIC = "BATCH_SPECIFIC",
    BOOK_SPECIFIC = "BOOK_SPECIFIC",
    CONTENT_UNLOCK = "CONTENT_UNLOCK",
    SAARTHI_SPECIFIC = "SAARTHI_SPECIFIC",
    TEST_MODE_SPECIFIC = "TEST_MODE_SPECIFIC",
    COHORT_SPECIFIC = "COHORT_SPECIFIC"
}

export enum MaturityTime {
    SEVEN_DAYS = "0_7",
    THIRTY = "8_30",
    SIXTY = "31_60",
    SIXTY_PLUS = "60+"
}

export enum UserType {
    TRANSACTIONAL = "TRANSACTIONAL",
    NON_TRANSACTIONAL = "NON_TRANSACTIONAL"
}

export enum Event {
    MARKETPLACE_VISIT = "MARKETPLACE_VISIT",
    EXPLORE_CLICK = "EXPLORE_CLICK",
    BUY_NOW_CLICK = "BUY_NOW_CLICK",
    PAY_NOW_CLICK = "PAY_NOW_CLICK"
}

export enum BulkCouponStatus {
    ACTIVE = "Active",
    INACTIVE = "Inactive",
    LOCKED = "LOCKED"
}