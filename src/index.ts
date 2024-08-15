/***
 ** File: server\9-helper\src\index.ts
 ** Description: Export all the helper functions and interfaces
 ** Date: 2024-08-16 01:40:38
 ** Version: 1.0.0
 ** Author: Sunny Kumar
 ***/

export {
    IAuthBuyerMessageDetails,
    IEmailMessageDetails,
    ISignUpPayload,
    ISignInPayload,
    IForgotPassword,
    IResetPassword,
    IReduxAuthPayload,
    IReduxAddAuthUser,
    IReduxLogout,
    IAuthResponse,
} from './auth.interface';

export { IBuyerDocument, IReduxBuyer } from './buyer.interface';

export {
    IConversationDocument,
    IMessageDocument,
    IMessageDetails,
    IChatBoxProps,
    IChatSellerProps,
    IChatBuyerProps,
} from './chat.interface';

export { IEmailLocals } from './email.interface';
export {
    ICreateGig,
    ISellerGig,
    IGigContext,
    IGigCardItems,
    IGigTopProps,
    IGigInfo,
    IGigViewReviewsProps,
    ISelectedBudget,
    IGigsProps,
} from './gig.interface';

export {
    IDeliveredWork,
    IExtendedDelivery,
    IOrderEvents,
    IOrderMessage,
    IOrderReview,
} from './order.interface';

export {
    IRatingCategories,
    IRatingCategoryItem,
    IRatingTypes,
    IReviewDocument,
    IReviewMessageDetails,
} from './review.interface';

export {
    IHitsTotal,
    IQueryList,
    IQueryString,
    IPaginateProps,
    ISearchResult,
    ITerm,
} from './search.interface';

export {
    ICertificate,
    IExperience,
    IEducation,
    ISellerDocument,
} from './seller.interface';

export { Uploads, videoUpload } from './cloudinary-upload';

export {
    BadRequestError,
    NotFoundError,
    NotAuthorizedError,
    FileTooLargeError,
    ServerError,
    customError,
    ErrnoException,
    IError,
    IErrorResponse,
} from './error-handler';

export { verifyGatewayRequest } from './gateway-middleware';
export { winstonLogger } from './logger';
export {
    firstLetterUppercase,
    lowerCase,
    toUpperCase,
    isEmail,
    isDataURL,
} from './helpers';
