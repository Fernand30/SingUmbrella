/*
 *
 *  ZDCChatEvent.h
 *  ZDCChat
 *
 *  Created by Zendesk on 30/10/2014.
 *
 *  Copyright (c) 2016 Zendesk. All rights reserved.
 *
 *  By downloading or using the Zendesk Mobile SDK, You agree to the Zendesk Master
 *  Subscription Agreement https://www.zendesk.com/company/customers-partners/#master-subscription-agreement and Application Developer and API License
 *  Agreement https://www.zendesk.com/company/customers-partners/#application-developer-api-license-agreement and
 *  acknowledge that such terms govern Your use of and access to the Mobile SDK.
 *
 */


#import <Foundation/Foundation.h>
#import "ZDCChatUpload.h"
#import "ZDCChatAttachment.h"
#import "ZDCChatAPIEnums.h"


/**
 * Chat log event type.
 */
typedef NS_ENUM(NSUInteger, ZDCChatEventType) {

    /// Unknown event.
    ZDCChatEventTypeUnknown            = 0,

    /// Member (agent) join event.
    ZDCChatEventTypeMemberJoin         = 1,

    /// Member (agent) leave event.
    ZDCChatEventTypeMemberLeave        = 2,

    /// Chat system message event notifying of visitors in the queue.
    ZDCChatEventTypeSystemMessage      = 3,
    
    /// Chat message generated by a trigger event.
    ZDCChatEventTypeTriggerMessage     = 4,
    
    /// Chat message from an agent.
    ZDCChatEventTypeAgentMessage       = 5,
    
    /// Chat message from the visitor.
    ZDCChatEventTypeVisitorMessage     = 6,

    /// Visitor file upload.
    ZDCChatEventTypeVisitorUpload      = 7,

    /// Agent file upload.
    ZDCChatEventTypeAgentUpload        = 8,

    /// Chat rating event.
    ZDCChatEventTypeRating             = 9,

    /// Chat rating comment event.
    ZDCChatEventTypeRatingComment     = 10
};


/**
 * Chat event that should be displayed.
 */
@interface ZDCChatEvent : NSObject

/**
 * Unique event Id.
 */
@property (nonatomic, strong) NSString *eventId;

/**
 * Timestamp for the event.
 */
@property (nonatomic, strong) NSNumber *timestamp;

/**
 * Event authors nickname in the system.
 */
@property (nonatomic, strong) NSString *nickname;

/**
 * Event authors display name.
 */
@property (nonatomic, strong) NSString *displayName;

/**
 * Chat message (may be nil depending on the type of event).
 */
@property (nonatomic, strong) NSString *message;

/**
 * Event type.
 */
@property (nonatomic, assign) ZDCChatEventType type;

/**
 * Indicates whether this event has been confirmed by the server or is a local notification.
 */
@property (nonatomic, assign) BOOL verified;

/**
 * Number of visitors in the queue for events of type ZDCChatEventTypeSystemMessage.
 */
@property (nonatomic, strong) NSNumber *visitorQueue;

/**
 * YES if this is the first message by the author.
 */
@property (nonatomic, assign) BOOL firstMessage;

/**
 * YES if this is the first message by the author since another presentable 
 * event occured (avatar should be shown).
 */
@property (nonatomic, assign) BOOL leadMessage;

/**
 * Array of options (radio group).
 */
@property (nonatomic, strong) NSMutableArray *options;

/**
 * The index of the option that the user has selected.
 */
@property (nonatomic, assign) NSInteger selectedOptionIndex;

/**
 * If this event represents a file upload this object will be populated.
 */
@property (nonatomic, strong) ZDCChatUpload *fileUpload;

/**
 * The attachment for this event if one exists.
 */
@property (nonatomic, strong) ZDCChatAttachment *attachment;

/**
 * Visitor rating of the current chat.
 */
@property (nonatomic, assign) ZDCChatRating rating;

/*
 * Chat rating comment.
 */
@property (nonatomic, strong) NSString *ratingComment;


@end
