// Export KAFKA SERVICE NAME
export const service_name = {
  kafka: {
    name: 'KAFKA_SERVICE',
  },
};

export class ResponseStatus{
  static Ok = 200;
  static Accepted = 201;
  static BadRequest = 400;
  static Invalid = 412;
  static Unauthorised = 401;
  static NotFound = 404;
  static Conflict = 409;
  static InternalServerError = 500;
}

export class ErrorMessages {
  static resultDataRequired(arg0: string, resultDataRequired: any) {
    throw new Error('Method not implemented.');
  }
  static incorrectUsernamePassword = "Username or password is incorrect.";
  static incorrectUsernameOtp = "Username or OTP is incorrect.";
  static userDoesNotExist = "User does not exist";
  static accountNotActivated= "Account Not Yet Activated";
  static setupNotDone= "Setup Your Account First to Login!";
  static invalidRole= "Invalid Role";
  static forbidden= "Unauthorised Scope Access";
  static notFound= 'Not Found';
  static adminMaintenance= 'Admin server is under maintenance. Please try after some time.';
  static userMaintenance= 'Server is under maintenance. Please try after some time.';
  static orgNotExist= "Organization does not exists";
  static invalidCredentials= 'Invalid credentials';
  static unauthorisedAccess= 'Unauthorised Access';
  static accountSuspended= "Account suspended";
  static accountBlocked= "Account blocked";
  static testDataRequired = "Test data is Required.";
  static invalidTest = "Inavlid Test ID passed";
  static mandatoryField = (data) => `${data} is required. ${data} is a mandatory field.`;
};


export class GenericResponse{
  constructor(success, data) {
      this.data = data;
      this.success = success;
  }
  data: any;
  success: boolean;
}

export class ResponseMessage {
  static Ok = "Ok";
  static Accepted = "Accepted";
  static BadRequest = "Bad Request";
  static Unauthorised = "Unauthorised";
  static NotFound = "Not Found";
  static Conflict = "Conflict / Duplicate"
  static InternalServerError = "Internal Server Error";

}

export class InstituteEvents {
  static InstituteBatchAdd = "INSTITUTE_BATCH_ADDED" 
  static InstituteStudentAdd = "INSTITUTE_STUDENT_ADDED"
}

export const ACCURACY = "ACCURACY";
export const AVG_TIME = "AVG_TIME";
export const AVG_SCORE = "AVG_SCORE";
export const AVG_SCORE_NEW = "AVG_SCORE_NEW";

export const BATCHES_BASE_PATH = "batch"
export const OVERALL_START_DATE = "01-01-2010"
export const OVERALL_END_DATE = "01-01-2099"

export const BASE_URL_OF_FILE = "https://d2bps9p1kiy4ka.cloudfront.net/";
