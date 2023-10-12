// import { validate } from "class-validator";
// import { FilterQuery, Model, Types, UpdateQuery } from "mongoose";
// import { CouponStudentMappings } from "src/modules/coupon-student-mappings/schema/coupon-student-mapping.schema";
// import { Coupons } from "src/modules/coupons/schema/coupons.schema";
// import { CouponKind, CouponStatus, CouponStudentMappingStatus, CouponType, Event, MaturityTime, Module, OfferType, UserType } from "../../lookup.enums";
// import { CouponsDto, GetUserCouponsResponse } from "../../modules/coupons/dto/coupons.dto";
// import { BaseDocument, BaseRepository, Params } from "../base-repository/interfaces";

// // @ts-ignore
// export class Repository<T> implements BaseRepository<T>{
//     constructor(
//         public model: Model<BaseDocument<T>>
//     ) { }
//     log(data: any): void {
//         console.log("'Method not implemented.'")
//     }
//     async count(searchParams: FilterQuery<BaseDocument<T>>): Promise<any> { }
//     async fetchOne(params: Params<T>): Promise<any> { }
//     async list(params: Params<T>): Promise<any> { }
//     async create(data: any): Promise<any> { }
//     async createMany(dataList: T[]): Promise<any> { }
//     async findOneAndUpdate(
//         searchParams: FilterQuery<BaseDocument<T>>,
//         data: UpdateQuery<BaseDocument<T>>
//     ): Promise<any> { }
//     async updateMany(
//         searchParams: FilterQuery<BaseDocument<T>>,
//         data: UpdateQuery<BaseDocument<T>>
//     ): Promise<any> {
//     }
//     async findByIdAndUpdate(id: Types.ObjectId, data: UpdateQuery<BaseDocument<T>>): Promise<any> { }
//     async deleteOne(searchParams: FilterQuery<BaseDocument<T>>): Promise<any> { }
//     async deleteMany(searchParams: FilterQuery<BaseDocument<T>>): Promise<any> { }
//     generateSearchQueryForFetchOne(params: Params<T>): any { }
//     generateSearchQueryForFetch(params: Params<T>): any { }
//     aggregate(query: any, collation: any): any { }
//     clearCache(hashkey) { }
// }

// export const CouponData: CouponsDto = {
//     "name": "saasa",
//     "type": CouponType.ALL_USERS,
//     "couponKind": CouponKind.REGULAR_COUPON,
//     "offerType": OfferType.PERCENT_OFF,
//     "programId": null,
//     "couponCode": "COUPON",
//     "couponAmount": 100,
//     "usagePerCandidate": 230,
//     "minPurchaseAmount": 100,
//     "maxDiscountAmount": 1000,
//     "maxUsage": 150,
//     "startDate": new Date("2023-08-14T18:30:00.000Z"),
//     "endDate": new Date("2023-08-24T18:30:00.000Z"),
//     "description": "DESCRIPTION",
//     "metaDescription": "META DESCRIPTION"
// }

// export const UpdateRegularCouponsDto: CouponsDto = {
//     "name": "saasa",
//     "type": CouponType.ALL_USERS,
//     "couponKind": CouponKind.REGULAR_COUPON,
//     "offerType": OfferType.PERCENT_OFF,
//     "programId": null,
//     "couponCode": "COUPON",
//     "couponAmount": 100,
//     "usagePerCandidate": 23,
//     "minPurchaseAmount": 100,
//     "maxDiscountAmount": 1000,
//     "maxUsage": 15,
//     "startDate": new Date("2023-08-15T18:30:00.000Z"),
//     "endDate": new Date("2023-08-25T18:30:00.000Z"),
//     "description": "NEW DESCRIPTION",
//     "metaDescription": "META DESCRIPTION"
// }

// export const UpdateMarketingCouponsDto: CouponsDto = {
//     "name": "saasa",
//     "type": CouponType.ALL_USERS,
//     "couponKind": CouponKind.MARKETING,
//     "offerType": OfferType.PERCENT_OFF,
//     "programId": null,
//     "couponCode": "COUPON",
//     "couponAmount": 100,
//     "usagePerCandidate": 23,
//     "minPurchaseAmount": 100,
//     "maxDiscountAmount": 1000,
//     "maxUsage": 15,
//     "startDate": new Date("2023-08-15T18:30:00.000Z"),
//     "endDate": new Date("2023-08-25T18:30:00.000Z"),
//     "description": "MARKETING",
//     "metaDescription": "META MARKETING"
// }

// export const CouponsResponse: Coupons = {
//     "_id": new Types.ObjectId("64ddb9ced29311a299adc94d"),
//     "type": CouponType.ALL_USERS,
//     "offerType": OfferType.PERCENT_OFF,
//     "currentUsage": 0,
//     "status": CouponStatus.ACTIVE,
//     "packageIds": [],
//     "name": "saasa",
//     "description": "HELLO",
//     "couponCode": "asas",
//     "startDate": new Date("2023-08-14T18:30:00.000Z"),
//     "endDate": new Date("2023-08-24T18:30:00.000Z"),
//     "usagePerCandidate": 230,
//     "minPurchaseAmount": 10,
//     "maxDiscountAmount": 10,
//     "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//     "couponAmount": 10,
//     "maxUsage": 150,
//     "createdAt": new Date("2023-08-17T06:10:22.636Z"),
//     "updatedAt": new Date("2023-08-17T10:20:49.464Z"),
//     "couponKind": CouponKind.REGULAR_COUPON,
//     "metaDescription": "META DESCRIPTION HII"
// }

// export const UpdateRegularCouponsResponse: Coupons = {
//     "_id": new Types.ObjectId("64ddb9ced29311a299adc94d"),
//     "type": CouponType.ALL_USERS,
//     "offerType": OfferType.PERCENT_OFF,
//     "currentUsage": 0,
//     "status": CouponStatus.ACTIVE,
//     "packageIds": [],
//     "name": "saasa",
//     "description": "NEW DESCRIPTION",
//     "couponCode": "asas",
//     "startDate": new Date("2023-08-15T18:30:00.000Z"),
//     "endDate": new Date("2023-08-25T18:30:00.000Z"),
//     "usagePerCandidate": 23,
//     "minPurchaseAmount": 10,
//     "maxDiscountAmount": 10,
//     "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//     "couponAmount": 10,
//     "maxUsage": 15,
//     "createdAt": new Date("2023-08-17T06:10:22.636Z"),
//     "updatedAt": new Date("2023-08-17T10:20:49.464Z"),
//     "couponKind": CouponKind.REGULAR_COUPON,
//     "metaDescription": "META DESCRIPTION HII"
// }

// export const UpdateMarketingCouponsResponse: Coupons = {
//     "_id": new Types.ObjectId("64ddb9ced29311a299adc94d"),
//     "type": CouponType.ALL_USERS,
//     "offerType": OfferType.PERCENT_OFF,
//     "currentUsage": 0,
//     "status": CouponStatus.ACTIVE,
//     "packageIds": [],
//     "name": "saasa",
//     "description": "MARKETING",
//     "couponCode": "asas",
//     "startDate": new Date("2023-08-15T18:30:00.000Z"),
//     "endDate": new Date("2023-08-25T18:30:00.000Z"),
//     "usagePerCandidate": 23,
//     "minPurchaseAmount": 10,
//     "maxDiscountAmount": 10,
//     "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//     "couponAmount": 10,
//     "maxUsage": 15,
//     "createdAt": new Date("2023-08-17T06:10:22.636Z"),
//     "updatedAt": new Date("2023-08-17T10:20:49.464Z"),
//     "couponKind": CouponKind.MARKETING,
//     "metaDescription": "META MARKETING"
// }

// export const GetUserCouponsBody = {
//     "cartItems": [
//         {
//             "type": "BATCH",
//             "typeId": "64b51dc3175cff4f9ae5a0bf"
//         },
//         {
//             "type": "TEST_MODE",
//             "typeId": "638f13c42affc8a393ee0180"
//         }
//     ],
//     "cartAmount": 2000
// }

// export const GetUserCouponsFinalResponse: GetUserCouponsResponse= {
//     "recommendedCoupons": [
//         {
//             "_id": new Types.ObjectId("63d8d0f66ee59b001fa8ac24"),
//             "type": CouponType.ALL_USERS,
//             "offerType": OfferType.PERCENT_OFF,
//             "currentUsage": 0,
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [
//                 new Types.ObjectId("6135e4a654c9a63e7e16867b")
//             ],
//             "name": "test cop",
//             "description": "Coupon description goes here...",
//             "couponCode": "BB1",
//             "startDate": new Date("2023-01-30T18:30:00.000Z"),
//             "endDate": new Date("2023-02-02T18:29:59.000Z"),
//             "usagePerCandidate": 1,
//             "minPurchaseAmount": 3000,
//             "maxDiscountAmount": 2000,
//             "organization":  new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "couponAmount": 10,
//             "maxUsage": 1,
//             "createdAt": new Date("2023-02-10T08:27:34.275Z"),
//             "updatedAt": new Date("2023-01-31T08:27:34.275Z"),
//             "__v": 0,
//             "couponKind": CouponKind.REGULAR_COUPON,
//             "isApplicable": false,
//             "discountAmount": 200,
//             "amountToAdd": 1000
//         }
//     ],
//     "otherCoupons": [
//         {
//             "_id": new Types.ObjectId("64edba4d219838943e89a54d"),
//             "name": "COHORT SPECIFIC COUPON",
//             "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//             "couponCode": "COHORT200",
//             "type": CouponType.ALL_USERS,
//             "couponAmount": 100,
//             "offerType": OfferType.PERCENT_OFF,
//             "startDate": new Date("2023-08-28T18:30:00.000Z"),
//             "endDate": new Date("2023-09-29T18:30:00.000Z"),
//             "usagePerCandidate": 1,
//             "maxUsage": 1,
//             "currentUsage": 0,
//             "minPurchaseAmount": 1000,
//             "maxDiscountAmount": 100,
//             "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [
//                 new Types.ObjectId("63b58075046bd9001f09c879")
//             ],
//             "createdAt": new Date("2023-08-29T09:28:45.800Z"),
//             "updatedAt": new Date("2023-08-29T09:28:45.800Z"),
//             "__v": 0,
//             "module": Module.COHORT_SPECIFIC,
//             "couponKind": CouponKind.REGULAR_COUPON,
//             "isApplicable": true,
//             "discountAmount": 100,
//             "amountToAdd": 0
//         },
//         {
//             "_id": new Types.ObjectId("64ec7e4e14b565e0245e1513"),
//             "name": "NEW BATCH COUPON",
//             "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//             "couponCode": "NEW200",
//             "type": CouponType.ALL_USERS,
//             "couponAmount": 100,
//             "offerType": OfferType.PERCENT_OFF,
//             "startDate": new Date("2023-08-27T18:30:00.000Z"),
//             "endDate": new Date("2023-09-28T18:30:00.000Z"),
//             "usagePerCandidate": 1,
//             "maxUsage": 1,
//             "currentUsage": 0,
//             "minPurchaseAmount": 1000,
//             "maxDiscountAmount": 100,
//             "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [
//                 new Types.ObjectId("64b51dc3175cff4f9ae5a0bf")
//             ],
//             "createdAt": new Date("2023-08-28T11:00:30.613Z"),
//             "updatedAt": new Date("2023-08-28T11:00:30.613Z"),
//             "__v": 0,
//             "module": Module.BATCH_SPECIFIC,
//             "couponKind": CouponKind.REGULAR_COUPON,
//             "isApplicable": true,
//             "discountAmount": 100,
//             "amountToAdd": 0
//         },
//         {
//             "_id": new Types.ObjectId("63d8f3dcea4903001fdc2c90"),
//             "type": CouponType.USER_SPECIFIC,
//             "offerType": OfferType.AMOUNT_OFF,
//             "currentUsage": 0,
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [],
//             "name": "test cp 3",
//             "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>Coupon description goes here..WEDWE</p>\n</body>\n</html>",
//             "couponCode": "TEST03",
//             "startDate": new Date("2023-01-30T18:30:00.000Z"),
//             "endDate": new Date("2023-02-02T18:29:59.000Z"),
//             "usagePerCandidate": 1,
//             "minPurchaseAmount": 100,
//             "maxDiscountAmount": 2000,
//             "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "couponAmount": 100,
//             "maxUsage": 10,
//             "createdAt": new Date("2023-01-31T10:56:28.644Z"),
//             "updatedAt": new Date("2023-01-31T10:56:28.644Z"),
//             "__v": 0,
//             "couponKind": CouponKind.REGULAR_COUPON,
//             "isApplicable": true,
//             "discountAmount": 100,
//             "amountToAdd": 0
//         },
//         {
//             "_id": new Types.ObjectId("63d8ddd12f77cd001e3f78f3"),
//             "type": CouponType.USER_SPECIFIC,
//             "offerType": OfferType.PERCENT_OFF,
//             "currentUsage": 2,
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [],
//             "name": "test cop 2",
//             "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>Coupon description goes here...fdvfdvfdv</p>\n</body>\n</html>",
//             "couponCode": "TEST02",
//             "startDate": new Date("2023-01-30T18:30:00.000Z"),
//             "endDate": new Date("2023-02-02T18:29:59.000Z"),
//             "usagePerCandidate": 1,
//             "minPurchaseAmount": 100,
//             "maxDiscountAmount": 2000,
//             "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "couponAmount": 10,
//             "maxUsage": 1,
//             "createdAt": new Date("2023-01-31T09:22:25.664Z"),
//             "updatedAt": new Date("2023-01-31T09:22:25.664Z"),
//             "__v": 0,
//             "couponKind": CouponKind.REGULAR_COUPON,
//             "isApplicable": true,
//             "discountAmount": 200,
//             "amountToAdd": 0
//         },
//         {
//             "_id": new Types.ObjectId("63aff7bb2e4a00001f99d470"),
//             "type": CouponType.USER_SPECIFIC,
//             "offerType": OfferType.PERCENT_OFF,
//             "currentUsage": 0,
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [],
//             "name": "KARAN",
//             "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>WKIUGFHJK</p>\n</body>\n</html>",
//             "couponCode": "KARA10",
//             "startDate": new Date("2022-10-31T18:30:00.000Z"),
//             "endDate": new Date("2023-02-28T18:30:00.000Z"),
//             "usagePerCandidate": 10,
//             "minPurchaseAmount": 100,
//             "maxDiscountAmount": 100,
//             "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "couponAmount": 10,
//             "maxUsage": 100,
//             "createdAt": new Date("2022-12-31T08:50:03.583Z"),
//             "updatedAt": new Date("2022-12-31T08:50:03.583Z"),
//             "__v": 0,
//             "couponKind": CouponKind.REGULAR_COUPON,
//             "isApplicable": true,
//             "discountAmount": 100,
//             "amountToAdd": 0
//         },
//         {
//             "_id": new Types.ObjectId("633bf72b52a58d001f80f064"),
//             "type": CouponType.USER_SPECIFIC,
//             "offerType": OfferType.AMOUNT_OFF,
//             "currentUsage": 0,
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [
//                 new Types.ObjectId("624562bf290dfc0cd2812d98")
//             ],
//             "name": "rajabook",
//             "description": "HELLO",
//             "couponCode": "BOOK50",
//             "startDate": new Date("2022-10-03T18:30:00.000Z"),
//             "endDate": new Date("2022-10-04T18:29:59.000Z"),
//             "usagePerCandidate": 1,
//             "minPurchaseAmount": 900,
//             "maxDiscountAmount": 100,
//             "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "couponAmount": 50,
//             "maxUsage": 10,
//             "createdAt": new Date("2022-10-04T09:04:43.980Z"),
//             "updatedAt": new Date("2023-08-25T12:08:58.674Z"),
//             "__v": 0,
//             "module": Module.BOOK_SPECIFIC,
//             "metaDescription": "META DESCRIPTION HELLO",
//             "couponKind": CouponKind.REGULAR_COUPON,
//             "isApplicable": true,
//             "discountAmount": 50,
//             "amountToAdd": 0
//         }
//     ],
//     "brandCoupons": [
//         {
//             "_id": new Types.ObjectId("633bf6a652a58d001f80f05c"),
//             "type": CouponType.USER_SPECIFIC,
//             "offerType": OfferType.PERCENT_OFF,
//             "currentUsage": 1,
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [
//                 new Types.ObjectId("6135e4a654c9a63e7e16867b")
//             ],
//             "name": "RAJA",
//             "description": "Coupon description goes here...",
//             "couponCode": "RAJA50",
//             "startDate": new Date("2022-10-03T18:30:00.000Z"),
//             "endDate": new Date("2023-10-05T18:29:59.000Z"),
//             "usagePerCandidate": 1,
//             "minPurchaseAmount": 500,
//             "maxDiscountAmount": 100,
//             "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "couponAmount": 50,
//             "maxUsage": 10,
//             "createdAt": new Date("2022-10-04T09:02:30.169Z"),
//             "updatedAt": new Date("2022-10-04T09:02:30.169Z"),
//             "__v": 2,
//             "module": Module.BATCH_SPECIFIC,
//             "couponKind": CouponKind.MARKETING
//         }
//     ]
// }

// export const GetUserCouponsFinalResponseForTest: GetUserCouponsResponse= {
//     "recommendedCoupons": [
//         {
//             "_id": new Types.ObjectId("63d8d0f66ee59b001fa8ac24"),
//             "type": CouponType.ALL_USERS,
//             "offerType": OfferType.PERCENT_OFF,
//             "currentUsage": 0,
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [
//                 new Types.ObjectId("6135e4a654c9a63e7e16867b")
//             ],
//             "name": "test cop",
//             "description": "Coupon description goes here...",
//             "couponCode": "BB1",
//             "startDate": new Date("2023-01-30T18:30:00.000Z"),
//             "endDate": new Date("2023-02-02T18:29:59.000Z"),
//             "usagePerCandidate": 1,
//             "minPurchaseAmount": 3000,
//             "maxDiscountAmount": 2000,
//             "organization":  new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "couponAmount": 10,
//             "maxUsage": 1,
//             "createdAt": new Date("2023-02-10T08:27:34.275Z"),
//             "updatedAt": new Date("2023-01-31T08:27:34.275Z"),
//             "__v": 0,
//             "couponKind": CouponKind.REGULAR_COUPON,
//             "isApplicable": false,
//             "discountAmount": 200,
//             "amountToAdd": 1000
//         }
//     ],
//     "otherCoupons": [
//         {
//             "_id": new Types.ObjectId("63d8f3dcea4903001fdc2c90"),
//             "type": CouponType.USER_SPECIFIC,
//             "offerType": OfferType.AMOUNT_OFF,
//             "currentUsage": 0,
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [],
//             "name": "test cp 3",
//             "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>Coupon description goes here..WEDWE</p>\n</body>\n</html>",
//             "couponCode": "TEST03",
//             "startDate": new Date("2023-01-30T18:30:00.000Z"),
//             "endDate": new Date("2023-02-02T18:29:59.000Z"),
//             "usagePerCandidate": 1,
//             "minPurchaseAmount": 100,
//             "maxDiscountAmount": 2000,
//             "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "couponAmount": 100,
//             "maxUsage": 10,
//             "createdAt": new Date("2023-01-31T10:56:28.644Z"),
//             "updatedAt": new Date("2023-01-31T10:56:28.644Z"),
//             "__v": 0,
//             "couponKind": CouponKind.REGULAR_COUPON,
//             "isApplicable": true,
//             "discountAmount": 100,
//             "amountToAdd": 0
//         },
//         {
//             "_id": new Types.ObjectId("63d8ddd12f77cd001e3f78f3"),
//             "type": CouponType.USER_SPECIFIC,
//             "offerType": OfferType.PERCENT_OFF,
//             "currentUsage": 2,
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [],
//             "name": "test cop 2",
//             "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>Coupon description goes here...fdvfdvfdv</p>\n</body>\n</html>",
//             "couponCode": "TEST02",
//             "startDate": new Date("2023-01-30T18:30:00.000Z"),
//             "endDate": new Date("2023-02-02T18:29:59.000Z"),
//             "usagePerCandidate": 1,
//             "minPurchaseAmount": 100,
//             "maxDiscountAmount": 2000,
//             "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "couponAmount": 10,
//             "maxUsage": 1,
//             "createdAt": new Date("2023-01-31T09:22:25.664Z"),
//             "updatedAt": new Date("2023-01-31T09:22:25.664Z"),
//             "__v": 0,
//             "couponKind": CouponKind.REGULAR_COUPON,
//             "isApplicable": true,
//             "discountAmount": 200,
//             "amountToAdd": 0
//         },
//         {
//             "_id": new Types.ObjectId("63aff7bb2e4a00001f99d470"),
//             "type": CouponType.USER_SPECIFIC,
//             "offerType": OfferType.PERCENT_OFF,
//             "currentUsage": 0,
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [],
//             "name": "KARAN",
//             "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>WKIUGFHJK</p>\n</body>\n</html>",
//             "couponCode": "KARA10",
//             "startDate": new Date("2022-10-31T18:30:00.000Z"),
//             "endDate": new Date("2023-02-28T18:30:00.000Z"),
//             "usagePerCandidate": 10,
//             "minPurchaseAmount": 100,
//             "maxDiscountAmount": 100,
//             "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "couponAmount": 10,
//             "maxUsage": 100,
//             "createdAt": new Date("2022-12-31T08:50:03.583Z"),
//             "updatedAt": new Date("2022-12-31T08:50:03.583Z"),
//             "__v": 0,
//             "couponKind": CouponKind.REGULAR_COUPON,
//             "isApplicable": true,
//             "discountAmount": 100,
//             "amountToAdd": 0
//         },
//         {
//             "_id": new Types.ObjectId("633bf72b52a58d001f80f064"),
//             "type": CouponType.USER_SPECIFIC,
//             "offerType": OfferType.AMOUNT_OFF,
//             "currentUsage": 0,
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [
//                 new Types.ObjectId("624562bf290dfc0cd2812d98")
//             ],
//             "name": "rajabook",
//             "description": "HELLO",
//             "couponCode": "BOOK50",
//             "startDate": new Date("2022-10-03T18:30:00.000Z"),
//             "endDate": new Date("2022-10-04T18:29:59.000Z"),
//             "usagePerCandidate": 1,
//             "minPurchaseAmount": 900,
//             "maxDiscountAmount": 100,
//             "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "couponAmount": 50,
//             "maxUsage": 10,
//             "createdAt": new Date("2022-10-04T09:04:43.980Z"),
//             "updatedAt": new Date("2023-08-25T12:08:58.674Z"),
//             "__v": 0,
//             "module": Module.BOOK_SPECIFIC,
//             "metaDescription": "META DESCRIPTION HELLO",
//             "couponKind": CouponKind.REGULAR_COUPON,
//             "isApplicable": true,
//             "discountAmount": 50,
//             "amountToAdd": 0
//         },
//         {
//             _id: new Types.ObjectId("632c422d1288c4001f03bcf4"),
//             type: CouponType.USER_SPECIFIC,
//             offerType: OfferType.AMOUNT_OFF,
//             currentUsage: 0,
//             status: CouponStatus.ACTIVE,
//             packageIds: [ new Types.ObjectId("638f13c42affc8a393ee0180") ],
//             name: 'rajabook',
//             description: 'HELLO',
//             couponCode: 'BOOK50',
//             startDate: new Date("2022-10-03T18:30:00.000Z"),
//             endDate: new Date("2022-10-04T18:29:59.000Z"),
//             usagePerCandidate: 1,
//             minPurchaseAmount: 900,
//             maxDiscountAmount: 100,
//             organization: new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             couponAmount: 50,
//             maxUsage: 10,
//             createdAt: new Date("2022-10-04T09:04:43.980Z"),
//             updatedAt: new Date("2023-08-25T12:08:58.674Z"),
//             __v: 0,
//             module: Module.TEST_MODE_SPECIFIC,
//             metaDescription: 'META DESCRIPTION HELLO',
//             couponKind: CouponKind.REGULAR_COUPON
//         }
//     ],
//     "brandCoupons": [
//         {
//             "_id": new Types.ObjectId("633bf6a652a58d001f80f05c"),
//             "type": CouponType.USER_SPECIFIC,
//             "offerType": OfferType.PERCENT_OFF,
//             "currentUsage": 1,
//             "status": CouponStatus.ACTIVE,
//             "packageIds": [
//                 new Types.ObjectId("6135e4a654c9a63e7e16867b")
//             ],
//             "name": "RAJA",
//             "description": "Coupon description goes here...",
//             "couponCode": "RAJA50",
//             "startDate": new Date("2022-10-03T18:30:00.000Z"),
//             "endDate": new Date("2023-10-05T18:29:59.000Z"),
//             "usagePerCandidate": 1,
//             "minPurchaseAmount": 500,
//             "maxDiscountAmount": 100,
//             "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//             "couponAmount": 50,
//             "maxUsage": 10,
//             "createdAt": new Date("2022-10-04T09:02:30.169Z"),
//             "updatedAt": new Date("2022-10-04T09:02:30.169Z"),
//             "__v": 2,
//             "module": Module.BATCH_SPECIFIC,
//             "couponKind": CouponKind.MARKETING
//         }
//     ]
// }

// export const mappingListData: CouponStudentMappings[] = [
//     {
//         "_id": new Types.ObjectId("63d915ff2456ff001f7177d8"),
//         "status": CouponStudentMappingStatus.ACTIVE,
//         "couponId": new Types.ObjectId("63aff7bb2e4a00001f99d470"),
//         "userId": new Types.ObjectId("624825088cbf3b6a573d2e41"),
//         "createdAt": new Date("2023-01-31T13:22:07.009Z"),
//         "updatedAt": new Date("2023-01-31T13:22:07.009Z"),
//         "voucherCode": null,
//         "type": CouponKind.REGULAR_COUPON
//     },
//     {
//         "_id": new Types.ObjectId("63d8e05d2f77cd001e3f78fc"),
//         "status": CouponStudentMappingStatus.ACTIVE,
//         "couponId": new Types.ObjectId("63d8ddd12f77cd001e3f78f3"),
//         "userId": new Types.ObjectId("624825088cbf3b6a573d2e41"),
//         "createdAt": new Date("2023-01-31T09:33:17.261Z"),
//         "updatedAt": new Date("2023-01-31T09:33:17.261Z"),
//         "voucherCode": null,
//         "type": CouponKind.REGULAR_COUPON
//     },
//     {
//         "_id": new Types.ObjectId("63d8cbed6ee59b001fa8abfd"),
//         "status": CouponStudentMappingStatus.ACTIVE,
//         "couponId": new Types.ObjectId("633bf72b52a58d001f80f064"),
//         "userId": new Types.ObjectId("624825088cbf3b6a573d2e41"),
//         "createdAt": new Date("2023-01-31T08:06:05.706Z"),
//         "updatedAt": new Date("2023-01-31T08:06:05.706Z"),
//         "voucherCode": null,
//         "type": CouponKind.REGULAR_COUPON
//     },
//     {
//         "_id": new Types.ObjectId("63d806b7807b2e476957b7a8"),
//         "status": CouponStudentMappingStatus.ACTIVE,
//         "couponId": new Types.ObjectId("633bf6a652a58d001f80f05c"),
//         "userId": new Types.ObjectId("624825088cbf3b6a573d2e41"),
//         "createdAt": new Date("2023-01-30T18:04:39.576Z"),
//         "updatedAt": new Date("2023-01-30T18:04:39.576Z"),
//         "voucherCode": null,
//         "type": CouponKind.REGULAR_COUPON
//     },
//     {
//         "_id": new Types.ObjectId("63d9037e384d33002383e1cf"),
//         "status": CouponStudentMappingStatus.ACTIVE,
//         "couponId": new Types.ObjectId("63d8d0f66ee59b001fa8ac24"),
//         "userId": new Types.ObjectId("624825088cbf3b6a573d2e41"),
//         "createdAt": new Date("2023-01-31T12:03:10.444Z"),
//         "updatedAt": new Date("2023-01-31T12:03:10.444Z"),
//         "voucherCode": null,
//         "type": CouponKind.REGULAR_COUPON
//     },
//     {
//         "_id": new Types.ObjectId("63d905613995b7001ffede89"),
//         "status": CouponStudentMappingStatus.ACTIVE,
//         "couponId": new Types.ObjectId("63d8f3dcea4903001fdc2c90"),
//         "userId": new Types.ObjectId("624825088cbf3b6a573d2e41"),
//         "createdAt": new Date("2023-01-31T12:11:13.802Z"),
//         "updatedAt": new Date("2023-01-31T12:11:13.802Z"),
//         "voucherCode": null,
//         "type": CouponKind.REGULAR_COUPON
//     }
// ]

// export const cohortMappingResponse = [
//     {
//         status: 'Active',
//         _id: new Types.ObjectId('64ec891a9bee0b275e917528'),
//         batchId: new Types.ObjectId('64b51dc3175cff4f9ae5a0bf'),
//         cohortId: new Types.ObjectId('63b58075046bd9001f09c879'),
//         __v: 0,
//         createdAt: new Date('2023-08-28T11:46:34.900Z'),
//         priority: 1,
//         updatedAt: new Date('2023-08-28T11:46:34.900Z')
//     }
// ]

// export const cohortMappingResponseForTest = [
//     {
//       _id: '63da3ceee1030dea1195fd93',
//       status: 'Active',
//       createdBy: '5eae81eae60a1f0fce04ba17',
//       cohortId: '63da3ceee1030dea1195fd93',
//       testCategoryId: '63898b005261da00244f26da',
//       displayOrder: 10,
//       testModeTypes: [ 'Online', 'Offline' ],
//       createdAt: '2023-02-01T10:20:30.471Z',
//       updatedAt: '2023-07-26T13:56:11.421Z',
//       countryGroup: 'IN'
//     },
//     {
//       _id: '63a151302a8b01e58314df30',
//       status: 'Active',
//       createdBy: '5b09189f7285894d9130ccd2',
//       cohortId: '632c422d1288c4001f03bcf4',
//       testCategoryId: '63898b005261da00244f26da',
//       displayOrder: 10,
//       testModeTypes: [ 'Online', 'Offline', 'Online', 'HomeBased' ],
//       createdAt: '2022-12-20T06:07:44.822Z',
//       updatedAt: '2023-07-26T13:56:11.421Z',
//       countryGroup: 'IN'
//     },
//     {
//       _id: '63a044bd4fc91ef7e4518584',
//       status: 'Active',
//       createdBy: '5b09189f7285894d9130ccd2',
//       cohortId: '632c422d1288c4001f03bcf8',
//       testCategoryId: '63898b005261da00244f26da',
//       displayOrder: 2,
//       testModeTypes: [ 'Online', 'Offline' ],
//       createdAt: '2022-12-19T11:02:21.642Z',
//       updatedAt: '2023-07-26T13:56:11.421Z',
//       countryGroup: 'IN'
//     },
//     {
//       _id: '6396ee412d9d11cd152a7a4c',
//       status: 'Active',
//       createdBy: '5eae81eae60a1f0fce04ba17',
//       cohortId: '632c422d1288c4001f03bcf9',
//       testCategoryId: '63898b005261da00244f26da',
//       displayOrder: 2,
//       testModeTypes: [ 'Online', 'Offline' ],
//       createdAt: '2022-12-12T09:02:57.887Z',
//       updatedAt: '2023-07-26T13:56:11.421Z',
//       countryGroup: 'IN'
//     },
//     {
//       _id: '638f135e2affc8a393ee0177',
//       status: 'Active',
//       createdBy: '5b09189f7285894d9130ccd2',
//       cohortId: '632c422d1288c4001f03bcf4',
//       testCategoryId: '63898b005261da00244f26da',
//       displayOrder: 2,
//       testModeTypes: [ 'Online' ],
//       createdAt: '2022-12-06T10:03:10.067Z',
//       updatedAt: '2023-07-26T13:56:11.421Z',
//       countryGroup: 'IN'
//     }
//   ]

// export const couponListCacheResponse = [
//     {
//         "_id": new Types.ObjectId("63d8d0f66ee59b001fa8ac24"),
//         "type": CouponType.ALL_USERS,
//         "offerType": OfferType.PERCENT_OFF,
//         "currentUsage": 0,
//         "status": CouponStatus.ACTIVE,
//         "packageIds": [
//             new Types.ObjectId("6135e4a654c9a63e7e16867b")
//         ],
//         "name": "test cop",
//         "description": "Coupon description goes here...",
//         "couponCode": "BB1",
//         "startDate": new Date("2023-01-30T18:30:00.000Z"),
//         "endDate": new Date("2023-02-02T18:29:59.000Z"),
//         "usagePerCandidate": 1,
//         "minPurchaseAmount": 3000,
//         "maxDiscountAmount": 2000,
//         "organization":  new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "couponAmount": 10,
//         "maxUsage": 1,
//         "createdAt": new Date("2023-02-10T08:27:34.275Z"),
//         "updatedAt": new Date("2023-01-31T08:27:34.275Z"),
//         "__v": 0,
//         "couponKind": CouponKind.REGULAR_COUPON,
//         "isApplicable": false,
//         "discountAmount": 200,
//         "amountToAdd": 1000
//     },
//     {
//         "_id": new Types.ObjectId("633bf72b52a58d001f80f064"),
//         "type": CouponType.USER_SPECIFIC,
//         "offerType": OfferType.AMOUNT_OFF,
//         "currentUsage": 0,
//         "status": CouponStatus.ACTIVE,
//         "packageIds": [
//             new Types.ObjectId("624562bf290dfc0cd2812d98")
//         ],
//         "name": "rajabook",
//         "description": "HELLO",
//         "couponCode": "BOOK50",
//         "startDate": new Date("2022-10-03T18:30:00.000Z"),
//         "endDate": new Date("2022-10-04T18:29:59.000Z"),
//         "usagePerCandidate": 1,
//         "minPurchaseAmount": 900,
//         "maxDiscountAmount": 100,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "couponAmount": 50,
//         "maxUsage": 10,
//         "createdAt": new Date("2022-10-04T09:04:43.980Z"),
//         "updatedAt": new Date("2023-08-25T12:08:58.674Z"),
//         "__v": 0,
//         "module": Module.BOOK_SPECIFIC,
//         "metaDescription": "META DESCRIPTION HELLO",
//         "couponKind": CouponKind.REGULAR_COUPON,
//         "isApplicable": true,
//         "discountAmount": 50,
//         "amountToAdd": 0
//     },
//     {
//         "_id": new Types.ObjectId("63aff7bb2e4a00001f99d470"),
//         "type": CouponType.USER_SPECIFIC,
//         "offerType": OfferType.PERCENT_OFF,
//         "currentUsage": 0,
//         "status": CouponStatus.ACTIVE,
//         "packageIds": [],
//         "name": "KARAN",
//         "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>WKIUGFHJK</p>\n</body>\n</html>",
//         "couponCode": "KARA10",
//         "startDate": new Date("2022-10-31T18:30:00.000Z"),
//         "endDate": new Date("2023-02-28T18:30:00.000Z"),
//         "usagePerCandidate": 10,
//         "minPurchaseAmount": 100,
//         "maxDiscountAmount": 100,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "couponAmount": 10,
//         "maxUsage": 100,
//         "createdAt": new Date("2022-12-31T08:50:03.583Z"),
//         "updatedAt": new Date("2022-12-31T08:50:03.583Z"),
//         "__v": 0,
//         "couponKind": CouponKind.REGULAR_COUPON,
//         "isApplicable": true,
//         "discountAmount": 100,
//         "amountToAdd": 0
//     },
//     {
//         "_id": new Types.ObjectId("63d8ddd12f77cd001e3f78f3"),
//         "type": CouponType.USER_SPECIFIC,
//         "offerType": OfferType.PERCENT_OFF,
//         "currentUsage": 2,
//         "status": CouponStatus.ACTIVE,
//         "packageIds": [],
//         "name": "test cop 2",
//         "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>Coupon description goes here...fdvfdvfdv</p>\n</body>\n</html>",
//         "couponCode": "TEST02",
//         "startDate": new Date("2023-01-30T18:30:00.000Z"),
//         "endDate": new Date("2023-02-02T18:29:59.000Z"),
//         "usagePerCandidate": 1,
//         "minPurchaseAmount": 100,
//         "maxDiscountAmount": 2000,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "couponAmount": 10,
//         "maxUsage": 1,
//         "createdAt": new Date("2023-01-31T09:22:25.664Z"),
//         "updatedAt": new Date("2023-01-31T09:22:25.664Z"),
//         "__v": 0,
//         "couponKind": CouponKind.REGULAR_COUPON,
//         "isApplicable": true,
//         "discountAmount": 200,
//         "amountToAdd": 0
//     },
//     {
//         "_id": new Types.ObjectId("63d8f3dcea4903001fdc2c90"),
//         "type": CouponType.USER_SPECIFIC,
//         "offerType": OfferType.AMOUNT_OFF,
//         "currentUsage": 0,
//         "status": CouponStatus.ACTIVE,
//         "packageIds": [],
//         "name": "test cp 3",
//         "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>Coupon description goes here..WEDWE</p>\n</body>\n</html>",
//         "couponCode": "TEST03",
//         "startDate": new Date("2023-01-30T18:30:00.000Z"),
//         "endDate": new Date("2023-02-02T18:29:59.000Z"),
//         "usagePerCandidate": 1,
//         "minPurchaseAmount": 100,
//         "maxDiscountAmount": 2000,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "couponAmount": 100,
//         "maxUsage": 10,
//         "createdAt": new Date("2023-01-31T10:56:28.644Z"),
//         "updatedAt": new Date("2023-01-31T10:56:28.644Z"),
//         "__v": 0,
//         "couponKind": CouponKind.REGULAR_COUPON,
//         "isApplicable": true,
//         "discountAmount": 100,
//         "amountToAdd": 0
//     },
//     {
//         "_id": new Types.ObjectId("633bf6a652a58d001f80f05c"),
//         "type": CouponType.USER_SPECIFIC,
//         "offerType": OfferType.PERCENT_OFF,
//         "currentUsage": 1,
//         "status": CouponStatus.ACTIVE,
//         "packageIds": [
//             new Types.ObjectId("6135e4a654c9a63e7e16867b")
//         ],
//         "name": "RAJA",
//         "description": "Coupon description goes here...",
//         "couponCode": "RAJA50",
//         "startDate": new Date("2022-10-03T18:30:00.000Z"),
//         "endDate": new Date("2023-10-05T18:29:59.000Z"),
//         "usagePerCandidate": 1,
//         "minPurchaseAmount": 500,
//         "maxDiscountAmount": 100,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "couponAmount": 50,
//         "maxUsage": 10,
//         "createdAt": new Date("2022-10-04T09:02:30.169Z"),
//         "updatedAt": new Date("2022-10-04T09:02:30.169Z"),
//         "__v": 2,
//         "module": Module.BATCH_SPECIFIC,
//         "couponKind": CouponKind.MARKETING
//     }
// ]

// export const couponListResponse = [
//     {
//         "_id": new Types.ObjectId("64ec7e4e14b565e0245e1513"),
//         "name": "NEW BATCH COUPON",
//         "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//         "couponCode": "NEW200",
//         "type": CouponType.ALL_USERS,
//         "couponAmount": 100,
//         "offerType": OfferType.PERCENT_OFF,
//         "startDate": new Date("2023-08-27T18:30:00.000Z"),
//         "endDate": new Date("2023-09-28T18:30:00.000Z"),
//         "usagePerCandidate": 1,
//         "maxUsage": 1,
//         "currentUsage": 0,
//         "minPurchaseAmount": 1000,
//         "maxDiscountAmount": 100,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "status": CouponStatus.ACTIVE,
//         "packageIds": [
//             new Types.ObjectId("64b51dc3175cff4f9ae5a0bf")
//         ],
//         "createdAt": new Date("2023-08-28T11:00:30.613Z"),
//         "updatedAt": new Date("2023-08-28T11:00:30.613Z"),
//         "__v": 0,
//         "module": Module.BATCH_SPECIFIC,
//         "couponKind": CouponKind.REGULAR_COUPON,
//         "isApplicable": true,
//         "discountAmount": 100,
//         "amountToAdd": 0
//     },
//     {
//         "_id": new Types.ObjectId("64edba4d219838943e89a54d"),
//         "name": "COHORT SPECIFIC COUPON",
//         "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//         "couponCode": "COHORT200",
//         "type": CouponType.ALL_USERS,
//         "couponAmount": 100,
//         "offerType": OfferType.PERCENT_OFF,
//         "startDate": new Date("2023-08-28T18:30:00.000Z"),
//         "endDate": new Date("2023-09-29T18:30:00.000Z"),
//         "usagePerCandidate": 1,
//         "maxUsage": 1,
//         "currentUsage": 0,
//         "minPurchaseAmount": 1000,
//         "maxDiscountAmount": 100,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "status": CouponStatus.ACTIVE,
//         "packageIds": [
//             new Types.ObjectId("63b58075046bd9001f09c879")
//         ],
//         "createdAt": new Date("2023-08-29T09:28:45.800Z"),
//         "updatedAt": new Date("2023-08-29T09:28:45.800Z"),
//         "__v": 0,
//         "module": Module.COHORT_SPECIFIC,
//         "couponKind": CouponKind.REGULAR_COUPON,
//         "isApplicable": true,
//         "discountAmount": 100,
//         "amountToAdd": 0
//     }
// ]

// export const GetUserCouponsSadResponse = {
//     "recommendedCoupons": [],
//     "otherCoupons": [],
//     "brandCoupons": []
// }

// export const couponListResponseForTest = [
//     {
//         _id: new Types.ObjectId("632c422d1288c4001f03bcf4"),
//         type: CouponType.USER_SPECIFIC,
//         offerType: OfferType.AMOUNT_OFF,
//         currentUsage: 0,
//         status: CouponStatus.ACTIVE,
//         packageIds: [new Types.ObjectId("638f13c42affc8a393ee0180")],
//         name: 'rajabook',
//         description: 'HELLO',
//         couponCode: 'BOOK50',
//         startDate: new Date("2022-10-03T18:30:00.000Z"),
//         endDate: new Date("2022-10-04T18:29:59.000Z"),
//         usagePerCandidate: 1,
//         minPurchaseAmount: 900,
//         maxDiscountAmount: 100,
//         organization: new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         couponAmount: 50,
//         maxUsage: 10,
//         createdAt: new Date("2022-10-04T09:04:43.980Z"),
//         updatedAt: new Date("2023-08-25T12:08:58.674Z"),
//         __v: 0,
//         module: Module.TEST_MODE_SPECIFIC,
//         metaDescription: 'META DESCRIPTION HELLO',
//         couponKind: CouponKind.REGULAR_COUPON
//     }
// ]

// export const CouponRepoListResponse = [
//     {
//         "_id": new Types.ObjectId("64edba4d219838943e89a54d"),
//         "name": "COHORT SPECIFIC COUPON",
//         "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//         "couponCode": "COHORT200",
//         "type": CouponType.ALL_USERS,
//         "couponAmount": 100,
//         "offerType": OfferType.PERCENT_OFF,
//         "startDate": new Date("2023-08-28T18:30:00.000Z"),
//         "endDate": new Date("2023-09-29T18:30:00.000Z"),
//         "usagePerCandidate": 1,
//         "maxUsage": 1,
//         "currentUsage": 0,
//         "minPurchaseAmount": 1000,
//         "maxDiscountAmount": 100,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "status": CouponStatus.ACTIVE,
//         "packageIds": [
//             new Types.ObjectId("63b58075046bd9001f09c879")
//         ],
//         "createdAt": new Date("2023-08-29T09:28:45.800Z"),
//         "updatedAt": new Date("2023-08-29T09:28:45.800Z"),
//         "__v": 0,
//         "module": Module.COHORT_SPECIFIC,
//         "couponKind": CouponKind.REGULAR_COUPON,
//         "isApplicable": true,
//         "discountAmount": 100,
//         "amountToAdd": 0
//     }
// ]

// export const remianingCouponsList = [
//     {
//         "_id": new Types.ObjectId("64ec7e4e14b565e0245e1513"),
//         "name": "NEW BATCH COUPON",
//         "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//         "couponCode": "NEW200",
//         "type": CouponType.ALL_USERS,
//         "couponAmount": 100,
//         "offerType": OfferType.PERCENT_OFF,
//         "startDate": new Date("2023-08-27T18:30:00.000Z"),
//         "endDate": new Date("2023-09-28T18:30:00.000Z"),
//         "usagePerCandidate": 1,
//         "maxUsage": 1,
//         "currentUsage": 0,
//         "minPurchaseAmount": 1000,
//         "maxDiscountAmount": 100,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "status": CouponStatus.ACTIVE,
//         "packageIds": [
//             new Types.ObjectId("64b51dc3175cff4f9ae5a0bf")
//         ],
//         "createdAt": new Date("2023-08-28T11:00:30.613Z"),
//         "updatedAt": new Date("2023-08-28T11:00:30.613Z"),
//         "__v": 0,
//         "module": Module.BATCH_SPECIFIC,
//         "couponKind": CouponKind.REGULAR_COUPON,
//         "isApplicable": true,
//         "discountAmount": 100,
//         "amountToAdd": 0
//     }
// ]

// export const couponCacheData = {
//     "_id": new Types.ObjectId("64edba4d219838943e89a54d"),
//     "name": "COHORT SPECIFIC COUPON",
//     "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//     "couponCode": "COHORT200",
//     "type": CouponType.ALL_USERS,
//     "couponAmount": 100,
//     "offerType": OfferType.PERCENT_OFF,
//     "startDate": new Date("2023-08-28T18:30:00.000Z"),
//     "endDate": new Date("2023-09-29T18:30:00.000Z"),
//     "usagePerCandidate": 1,
//     "maxUsage": 1,
//     "currentUsage": 0,
//     "minPurchaseAmount": 1000,
//     "maxDiscountAmount": 100,
//     "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//     "status": CouponStatus.ACTIVE,
//     "packageIds": [
//         new Types.ObjectId("63b58075046bd9001f09c879")
//     ],
//     "createdAt": new Date("2023-08-29T09:28:45.800Z"),
//     "updatedAt": new Date("2023-08-29T09:28:45.800Z"),
//     "__v": 0,
//     "module": Module.COHORT_SPECIFIC,
//     "couponKind": CouponKind.REGULAR_COUPON,
//     "isApplicable": true,
//     "discountAmount": 100,
//     "amountToAdd": 0
// }

// export const validateCouponDetails = {
//     "_id": new Types.ObjectId("64facae933e251d89235de78"),
//     "createdAt": new Date("2023-09-08T05:01:29.652Z"),
//     "updatedAt": new Date("2023-09-08T05:01:29.652Z"),
//     "name": "NEW TEST PERCENT OFF",
//     "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//     "metaDescription": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>ddsd</p>\n</body>\n</html>",
//     "couponKind": CouponKind.REGULAR_COUPON,
//     "couponCode": "PERC200",
//     "type": CouponType.ALL_USERS,
//     "couponAmount": 15,
//     "offerType": OfferType.PERCENT_OFF,
//     "startDate": new Date("2023-09-03T18:30:00.000Z"),
//     "endDate": new Date("2023-09-29T18:30:00.000Z"),
//     "usagePerCandidate": 2,
//     "maxUsage": 2,
//     "currentUsage": 0,
//     "minPurchaseAmount": 500,
//     "maxDiscountAmount": 1000,
//     "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//     "status": "Active",
//     "packageIds": [],
//     "__v": 0
// }

// export const validateCouponsResponse = {
//     "coupon": {
//         "_id": new Types.ObjectId("64facae933e251d89235de78"),
//         "createdAt": new Date("2023-09-08T05:01:29.652Z"),
//         "updatedAt": new Date("2023-09-08T05:01:29.652Z"),
//         "name": "NEW TEST PERCENT OFF",
//         "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//         "metaDescription": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>ddsd</p>\n</body>\n</html>",
//         "couponKind": CouponKind.REGULAR_COUPON,
//         "couponCode": "PERC200",
//         "type": CouponType.ALL_USERS,
//         "couponAmount": 15,
//         "offerType": OfferType.PERCENT_OFF,
//         "startDate": new Date("2023-09-03T18:30:00.000Z"),
//         "endDate": new Date("2023-09-29T18:30:00.000Z"),
//         "usagePerCandidate": 2,
//         "maxUsage": 2,
//         "currentUsage": 0,
//         "minPurchaseAmount": 500,
//         "maxDiscountAmount": 1000,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "status": CouponStatus.ACTIVE,
//         "packageIds": [],
//         "__v": 0
//     },
//     "totalAmount": 1000,
//     "discountedAmount": 150,
//     "finalAmount": 850
// }

// export const validateMarketCouponDetails = {
//     "_id": new Types.ObjectId("64facae933e251d89235de78"),
//     "createdAt": new Date("2023-09-08T05:01:29.652Z"),
//     "updatedAt": new Date("2023-09-08T05:01:29.652Z"),
//     "name": "NEW TEST PERCENT OFF",
//     "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//     "metaDescription": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>ddsd</p>\n</body>\n</html>",
//     "couponKind": CouponKind.MARKETING,
//     "couponCode": "PERC200",
//     "type": CouponType.ALL_USERS,
//     "couponAmount": 15,
//     "offerType": OfferType.PERCENT_OFF,
//     "startDate": new Date("2023-09-03T18:30:00.000Z"),
//     "endDate": new Date("2023-09-29T18:30:00.000Z"),
//     "usagePerCandidate": 2,
//     "maxUsage": 2,
//     "currentUsage": 0,
//     "minPurchaseAmount": 500,
//     "maxDiscountAmount": 1000,
//     "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//     "status": "Active",
//     "packageIds": [],
//     "__v": 0
// }

// export const validateMarketCouponsResponse = {
//     "coupon": {
//         "_id": new Types.ObjectId("64facae933e251d89235de78"),
//         "createdAt": new Date("2023-09-08T05:01:29.652Z"),
//         "updatedAt": new Date("2023-09-08T05:01:29.652Z"),
//         "name": "NEW TEST PERCENT OFF",
//         "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//         "metaDescription": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>ddsd</p>\n</body>\n</html>",
//         "couponKind": CouponKind.MARKETING,
//         "couponCode": "PERC200",
//         "type": CouponType.ALL_USERS,
//         "couponAmount": 15,
//         "offerType": OfferType.PERCENT_OFF,
//         "startDate": new Date("2023-09-03T18:30:00.000Z"),
//         "endDate": new Date("2023-09-29T18:30:00.000Z"),
//         "usagePerCandidate": 2,
//         "maxUsage": 2,
//         "currentUsage": 0,
//         "minPurchaseAmount": 500,
//         "maxDiscountAmount": 1000,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "status": "Active",
//         "packageIds": [],
//         "__v": 0
//     },
//     "totalAmount": 1000,
//     "discountedAmount": 0,
//     "finalAmount": 1000
// }

// export const validateCouponModuleDetails = {
//     "_id": new Types.ObjectId("64facae933e251d89235de78"),
//     "createdAt": new Date("2023-09-08T05:01:29.652Z"),
//     "updatedAt": new Date("2023-09-08T05:01:29.652Z"),
//     "name": "NEW TEST PERCENT OFF",
//     "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//     "metaDescription": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>ddsd</p>\n</body>\n</html>",
//     "couponKind": CouponKind.REGULAR_COUPON,
//     "couponCode": "PERC200",
//     "type": CouponType.ALL_USERS,
//     "couponAmount": 15,
//     "offerType": OfferType.PERCENT_OFF,
//     "startDate": new Date("2023-09-03T18:30:00.000Z"),
//     "endDate": new Date("2023-09-29T18:30:00.000Z"),
//     "usagePerCandidate": 2,
//     "maxUsage": 2,
//     "currentUsage": 0,
//     "minPurchaseAmount": 500,
//     "maxDiscountAmount": 1000,
//     "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//     "status": "Active",
//     "module": Module.BATCH_SPECIFIC,
//     "packageIds": ["64b51dc3175cff4f9ae5a0bf"],
//     "__v": 0
// }

// export const validateCouponsModuleResponse = {
//     "coupon": {
//         "_id": new Types.ObjectId("64facae933e251d89235de78"),
//         "createdAt": new Date("2023-09-08T05:01:29.652Z"),
//         "updatedAt": new Date("2023-09-08T05:01:29.652Z"),
//         "name": "NEW TEST PERCENT OFF",
//         "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//         "metaDescription": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>ddsd</p>\n</body>\n</html>",
//         "couponKind": CouponKind.REGULAR_COUPON,
//         "couponCode": "PERC200",
//         "type": CouponType.ALL_USERS,
//         "couponAmount": 15,
//         "offerType": OfferType.PERCENT_OFF,
//         "startDate": new Date("2023-09-03T18:30:00.000Z"),
//         "endDate": new Date("2023-09-29T18:30:00.000Z"),
//         "usagePerCandidate": 2,
//         "maxUsage": 2,
//         "currentUsage": 0,
//         "minPurchaseAmount": 500,
//         "maxDiscountAmount": 1000,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "status": "Active",
//         "module": Module.BATCH_SPECIFIC,
//         "packageIds": ["64b51dc3175cff4f9ae5a0bf"],
//         "__v": 0
//     },
//     "totalAmount": 1000,
//     "discountedAmount": 150,
//     "finalAmount": 850
// }

// export const validateContentModuleResponse = {
//     "coupon": {
//         "_id": new Types.ObjectId("64facae933e251d89235de78"),
//         "createdAt": new Date("2023-09-08T05:01:29.652Z"),
//         "updatedAt": new Date("2023-09-08T05:01:29.652Z"),
//         "name": "NEW TEST PERCENT OFF",
//         "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//         "metaDescription": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>ddsd</p>\n</body>\n</html>",
//         "couponKind": CouponKind.REGULAR_COUPON,
//         "couponCode": "PERC200",
//         "type": CouponType.ALL_USERS,
//         "couponAmount": 15,
//         "offerType": OfferType.PERCENT_OFF,
//         "startDate": new Date("2023-09-03T18:30:00.000Z"),
//         "endDate": new Date("2023-09-29T18:30:00.000Z"),
//         "usagePerCandidate": 2,
//         "maxUsage": 2,
//         "currentUsage": 0,
//         "minPurchaseAmount": 500,
//         "maxDiscountAmount": 1000,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "status": "Active",
//         "module": Module.CONTENT_UNLOCK,
//         "packageIds": ["64b51dc3175cff4f9ae5a0bf"],
//         "__v": 0
//     },
//     "totalAmount": 1000,
//     "discountedAmount": 150,
//     "finalAmount": 850
// }

// export const validateTestCohortMappingResponse = [
//     {
//         status: 'Active',
//         _id: new Types.ObjectId('64b51dc3175cff4f9ae5a0bf'),
//         testCategoryId: new Types.ObjectId('64b51dc3175cff4f9ae5a0bf'),
//         cohortId: new Types.ObjectId('63b58075046bd9001f09c879'),
//         __v: 0,
//         createdAt: new Date('2023-08-28T11:46:34.900Z'),
//         priority: 1,
//         updatedAt: new Date('2023-08-28T11:46:34.900Z')
//     }
// ]

// export const validateCouponsMappingData = {
//     "_id": new Types.ObjectId("63d915ff2456ff001f7177d8"),
//     "status": CouponStudentMappingStatus.ACTIVE,
//     "couponId": new Types.ObjectId("63aff7bb2e4a00001f99d470"),
//     "userId": new Types.ObjectId("624825088cbf3b6a573d2e41"),
//     "createdAt": new Date("2023-01-31T13:22:07.009Z"),
//     "updatedAt": new Date("2023-01-31T13:22:07.009Z"),
//     "voucherCode": null,
//     "type": CouponKind.REGULAR_COUPON
// }

// export const validateUserSpecificCouponResponse = {
//     "coupon": {
//         "_id": new Types.ObjectId("64facae933e251d89235de78"),
//         "createdAt": new Date("2023-09-08T05:01:29.652Z"),
//         "updatedAt": new Date("2023-09-08T05:01:29.652Z"),
//         "name": "NEW TEST PERCENT OFF",
//         "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//         "metaDescription": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>ddsd</p>\n</body>\n</html>",
//         "couponKind": CouponKind.REGULAR_COUPON,
//         "couponCode": "PERC200",
//         "type": CouponType.USER_SPECIFIC,
//         "couponAmount": 15,
//         "offerType": OfferType.PERCENT_OFF,
//         "startDate": new Date("2023-09-03T18:30:00.000Z"),
//         "endDate": new Date("2023-09-29T18:30:00.000Z"),
//         "usagePerCandidate": 2,
//         "maxUsage": 2,
//         "currentUsage": 0,
//         "minPurchaseAmount": 500,
//         "maxDiscountAmount": 1000,
//         "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//         "status": "Active",
//         "module": Module.BATCH_SPECIFIC,
//         "packageIds": ["64b51dc3175cff4f9ae5a0bf"],
//         "__v": 0
//     },
//     "totalAmount": 1000,
//     "discountedAmount": 150,
//     "finalAmount": 850
// }

// export const expiredCouponDetails = {
//     "_id": new Types.ObjectId("64facae933e251d89235de78"),
//     "createdAt": new Date("2023-09-08T05:01:29.652Z"),
//     "updatedAt": new Date("2023-09-08T05:01:29.652Z"),
//     "name": "NEW TEST PERCENT OFF",
//     "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//     "metaDescription": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>ddsd</p>\n</body>\n</html>",
//     "couponKind": CouponKind.REGULAR_COUPON,
//     "couponCode": "PERC200",
//     "type": CouponType.ALL_USERS,
//     "couponAmount": 15,
//     "offerType": OfferType.PERCENT_OFF,
//     "startDate": new Date("2023-09-03T18:30:00.000Z"),
//     "endDate": new Date("2022-09-29T18:30:00.000Z"),
//     "usagePerCandidate": 2,
//     "maxUsage": 2,
//     "currentUsage": 0,
//     "minPurchaseAmount": 500,
//     "maxDiscountAmount": 1000,
//     "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//     "status": "Active",
//     "packageIds": [],
//     "__v": 0
// }

// export const notStartedCouponDetails = {
//     "_id": new Types.ObjectId("64facae933e251d89235de78"),
//     "createdAt": new Date("2023-09-08T05:01:29.652Z"),
//     "updatedAt": new Date("2023-09-08T05:01:29.652Z"),
//     "name": "NEW TEST PERCENT OFF",
//     "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//     "metaDescription": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>ddsd</p>\n</body>\n</html>",
//     "couponKind": CouponKind.REGULAR_COUPON,
//     "couponCode": "PERC200",
//     "type": CouponType.ALL_USERS,
//     "couponAmount": 15,
//     "offerType": OfferType.PERCENT_OFF,
//     "startDate": new Date("2024-09-03T18:30:00.000Z"),
//     "endDate": new Date("2023-09-29T18:30:00.000Z"),
//     "usagePerCandidate": 2,
//     "maxUsage": 2,
//     "currentUsage": 0,
//     "minPurchaseAmount": 500,
//     "maxDiscountAmount": 1000,
//     "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//     "status": "Active",
//     "packageIds": [],
//     "__v": 0
// }

// export const maxUsageReachedCouponDetails = {
//     "_id": new Types.ObjectId("64facae933e251d89235de78"),
//     "createdAt": new Date("2023-09-08T05:01:29.652Z"),
//     "updatedAt": new Date("2023-09-08T05:01:29.652Z"),
//     "name": "NEW TEST PERCENT OFF",
//     "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//     "metaDescription": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>ddsd</p>\n</body>\n</html>",
//     "couponKind": CouponKind.REGULAR_COUPON,
//     "couponCode": "PERC200",
//     "type": CouponType.ALL_USERS,
//     "couponAmount": 15,
//     "offerType": OfferType.PERCENT_OFF,
//     "startDate": new Date("2023-09-03T18:30:00.000Z"),
//     "endDate": new Date("2023-09-29T18:30:00.000Z"),
//     "usagePerCandidate": 2,
//     "maxUsage": 2,
//     "currentUsage": 4,
//     "minPurchaseAmount": 500,
//     "maxDiscountAmount": 1000,
//     "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//     "status": "Active",
//     "packageIds": [],
//     "__v": 0
// }

// export const minPurchasedCouponDetails = {
//     "_id": new Types.ObjectId("64facae933e251d89235de78"),
//     "createdAt": new Date("2023-09-08T05:01:29.652Z"),
//     "updatedAt": new Date("2023-09-08T05:01:29.652Z"),
//     "name": "NEW TEST PERCENT OFF",
//     "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//     "metaDescription": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>ddsd</p>\n</body>\n</html>",
//     "couponKind": CouponKind.REGULAR_COUPON,
//     "couponCode": "PERC200",
//     "type": CouponType.ALL_USERS,
//     "couponAmount": 15,
//     "offerType": OfferType.PERCENT_OFF,
//     "startDate": new Date("2023-09-03T18:30:00.000Z"),
//     "endDate": new Date("2023-09-29T18:30:00.000Z"),
//     "usagePerCandidate": 2,
//     "maxUsage": 2,
//     "currentUsage": 0,
//     "minPurchaseAmount": 1200,
//     "maxDiscountAmount": 100,
//     "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//     "status": "Active",
//     "packageIds": [],
//     "__v": 0
// }

// export const zeroAmountCouponDetails = {
//     "_id": new Types.ObjectId("64facae933e251d89235de78"),
//     "createdAt": new Date("2023-09-08T05:01:29.652Z"),
//     "updatedAt": new Date("2023-09-08T05:01:29.652Z"),
//     "name": "NEW TEST PERCENT OFF",
//     "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>HELLO</p>\n</body>\n</html>",
//     "metaDescription": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>ddsd</p>\n</body>\n</html>",
//     "couponKind": CouponKind.REGULAR_COUPON,
//     "couponCode": "PERC200",
//     "type": CouponType.ALL_USERS,
//     "couponAmount": 100,
//     "offerType": OfferType.PERCENT_OFF,
//     "startDate": new Date("2023-09-03T18:30:00.000Z"),
//     "endDate": new Date("2023-09-29T18:30:00.000Z"),
//     "usagePerCandidate": 2,
//     "maxUsage": 2,
//     "currentUsage": 0,
//     "minPurchaseAmount": 40,
//     "maxDiscountAmount": 100,
//     "organization": new Types.ObjectId("5eb393ee95fab7468a79d189"),
//     "status": "Active",
//     "packageIds": [],
//     "__v": 0
// }

// export const canInstitutionalApplied = false;
// export const headers = {
//     "organizationid": "5eb393ee95fab7468a79d189",
//     "userid": "624825088cbf3b6a573d2e41",
//     "clientVersion": "199",
//     "clientType": "WEB"
// }
// export const type = "CART";
// export const couponCode = "PERC200";
// export const totalAmount = 1000;
// export const couponId = new Types.ObjectId("64facae933e251d89235de78");